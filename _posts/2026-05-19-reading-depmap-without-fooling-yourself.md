---
layout: post
title: Reading DepMap without fooling yourself
date: 2026-05-19 09:00:00-0500
description: Four things that quietly ruin biomarker analyses of cancer dependency screens — common essentials, lineage confounding, score scale, and the variance filter you should apply first.
tags: [depmap, machine-learning, R, reproducibility]
categories: [methods]
related_posts: false
---

> **Draft.** Written as a starting point — edit freely before publishing.

The DepMap CRISPR screens are the most useful public resource in cancer
functional genomics, and they are also unusually easy to misuse. The data are
tidy, the download is one click, and a naive correlation analysis will hand you
a beautiful result that means nothing. Four things account for most of it.

## 1. The scale is not arbitrary, and zero is not "no data"

Gene effect scores are Chronos estimates, normalized so that **0 is the median
of non-essential controls** and **−1 is the median of common essential genes**.
A score of −0.4 is not "weakly essential in the abstract"; it is 40% of the way
to the effect size of a pan-essential gene.

This matters because it makes thresholding interpretable. A cell line is
usually called dependent on a gene below roughly −0.5. Analysts who
z-score the matrix before doing anything else throw this away and replace an
interpretable scale with a relative one.

## 2. Common essentials have no variance, and variance is the whole game

Ribosomal subunits, proteasome components, and core spliceosome genes are
essential in nearly every line. They will dominate any list ranked by mean
dependency and they are useless as biomarkers, because a biomarker requires
_differential_ dependency — some lines sensitive, others not.

Filter on spread before you model anything:

```r
# gene_effect: cell lines (rows) x genes (columns), Chronos scores
dep_sd <- apply(gene_effect, 2, sd, na.rm = TRUE)
dep_mean <- apply(gene_effect, 2, mean, na.rm = TRUE)

# drop pan-essentials (strongly negative everywhere) and inert genes (flat near 0)
selective <- names(which(dep_sd > 0.25 & dep_mean > -0.75))

length(selective)
```

The thresholds are a judgment call and worth reporting explicitly. The
principle behind them is not: a gene with no variance across cell lines cannot
be explained by a feature that varies across cell lines.

## 3. Lineage is the confounder that explains your result

This is the one that bites hardest. Cell lines cluster by tissue of origin, and
so does almost everything measured on them — expression, methylation, mutation
burden, and dependency. Correlate any lineage-restricted gene's expression
against any lineage-restricted dependency and you will get a strong,
highly significant, entirely uninformative association.

Before believing a dependency–feature correlation, ask whether it survives
within lineage:

```r
# within-lineage correlation, pooled across lineages via Fisher's z
within_lineage_cor <- function(x, y, lineage) {
  keep <- !is.na(x) & !is.na(y)
  x <- x[keep]; y <- y[keep]; lineage <- lineage[keep]

  tab <- table(lineage)
  big <- names(tab)[tab >= 10] # need enough lines per group to be meaningful

  z <- sapply(big, function(g) {
    i <- lineage == g
    r <- cor(x[i], y[i])
    0.5 * log((1 + r) / (1 - r)) # Fisher's z
  })
  w <- tab[big] - 3

  z_bar <- sum(w * z) / sum(w)
  tanh(z_bar) # back to correlation scale
}

r_marginal <- cor(feature, dependency, use = "complete.obs")
r_within <- within_lineage_cor(feature, dependency, lineage)

c(marginal = r_marginal, within_lineage = r_within)
```

If `r_within` collapses toward zero, you have found a tissue, not a mechanism.
This single check would retract a good fraction of the dependency correlations
that get reported.

## 4. Copy number leaks into the score

CRISPR cutting in amplified regions produces a DNA-damage response
proportional to the number of cuts, which reads out as apparent dependency at
high copy number. DepMap applies a correction for this, but it is a correction,
not a guarantee. When a hit sits in a recurrently amplified region, check
whether the dependency tracks copy number more tightly than it tracks anything
biological.

## The order that works

1. Filter to selective dependencies (variance filter above).
2. Regress out or stratify by lineage.
3. Check copy number for any hit in an amplified locus.
4. _Then_ model.

None of this is exotic. It is the difference between a result that survives
someone else's reanalysis and one that does not — and in my experience the
reanalysis is where most dependency biomarkers go to die.

<!-- TODO: link the release version used and pin the DepMap portal DOI -->
