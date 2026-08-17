---
layout: post
title: Why the LASSO picks the wrong gene
date: 2026-03-10 09:00:00-0500
description: Penalized regression is indifferent to which member of a correlated group it selects. Biology is not. A short note on encoding network structure into the penalty.
tags: [network-biology, machine-learning, R]
categories: [methods]
related_posts: false
---

> **Draft.** Written as a starting point — edit freely before publishing.

The LASSO has a property that is easy to state and easy to forget: when two
predictors are strongly correlated, it will select one of them and shrink the
other to zero, and it does not much care which one it keeps.

This is not a bug. The $$\ell_1$$ penalty is doing exactly what it was designed
to do — produce a sparse solution with good predictive error. Two collinear
predictors carry nearly the same information, so keeping either one costs the
same in residual sum of squares while keeping both costs more in penalty. The
choice between them is settled by noise.

In genomics, that indifference is expensive. Genes are correlated because they
sit in the same pathway, the same complex, the same amplicon. Selecting an
arbitrary member of a correlated group is selecting an arbitrary member of a
biological module — and the one the model hands you may have no mechanistic
relationship to the phenotype at all.

## A demonstration

Here is the failure mode in miniature. One true driver, one innocent bystander
correlated with it at $$\rho = 0.95$$, and no biological signal in the bystander
whatsoever.

```r
set.seed(42)

n <- 100
driver <- rnorm(n)
bystander <- 0.95 * driver + sqrt(1 - 0.95^2) * rnorm(n) # correlated, causally irrelevant
noise <- matrix(rnorm(n * 20), nrow = n)

X <- cbind(driver, bystander, noise)
colnames(X) <- c("driver", "bystander", paste0("gene", 1:20))

# only 'driver' contributes to y
y <- 2 * driver + rnorm(n, sd = 1)

library(glmnet)
fit <- cv.glmnet(X, y, alpha = 1)
coef(fit, s = "lambda.min")[1:3, ]
```

Run that across seeds and the model keeps `bystander` instead of `driver` a
substantial fraction of the time. Both give nearly the same cross-validated
error. Only one of them is a drug target.

## Weighting the penalty

The adaptive LASSO gives us the hook. Instead of penalizing every coefficient
equally, attach a weight $$w_j$$ to each:

$$
\hat\beta = \arg\min_\beta \; \|y - X\beta\|_2^2 \;+\; \lambda \sum_j w_j |\beta_j|
$$

Small $$w_j$$ means gene $$j$$ is cheap to keep; large $$w_j$$ means it is
expensive. The adaptive LASSO conventionally derives these weights from an
initial data-driven fit — but nothing requires the weights to come from the data
at all. They can come from prior knowledge.

That is the whole idea behind bio-priming: set $$w_j$$ as a decreasing function
of the evidence that gene $$j$$ interacts with the target of interest. In
[BioPrimeLASSO](https://www.nature.com/articles/s41698-025-00825-9) those
weights come from STRING-DB confidence scores.

```r
# prior[j] in [0, 1]: confidence that gene j interacts with the target
prior <- c(driver = 0.9, bystander = 0.0, setNames(rep(0, 20), paste0("gene", 1:20)))

# genes with strong prior evidence are penalized less
pf <- 1 - 0.9 * prior

fit_primed <- cv.glmnet(X, y, alpha = 1, penalty.factor = pf)
coef(fit_primed, s = "lambda.min")[1:3, ]
```

The tie between `driver` and `bystander` is no longer broken by noise. It is
broken by the prior.

## What this does and does not buy you

It is worth being precise about the claim, because "add biological knowledge to
the model" invites more enthusiasm than it deserves.

**What it does:** it changes which member of a correlated group survives
selection. Where the data alone are genuinely indifferent, the prior decides.
That converts an arbitrary choice into an interpretable one.

**What it does not:** it does not manufacture signal. If the driver carries no
association with the phenotype, no penalty weight will conjure one. And a
confidently wrong prior will push you toward a confidently wrong gene — the
method inherits whatever bias lives in the interaction database. STRING
aggregates co-expression and text-mining alongside experimental evidence, which
means well-studied genes carry higher scores partly because they are
well-studied.

The honest framing is narrow and, I think, more useful for it: bio-priming is a
tiebreaker, not a discovery engine. Most of the time it changes nothing. The
cases where it changes the answer are the cases where the data were never going
to give you a defensible answer on their own.

<!-- TODO: add the GAB2/EGFR worked example from the paper -->
