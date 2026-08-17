---
layout: post
title: Significant and meaningless
date: 2026-07-28 09:00:00-0500
description: On the gap between a p-value that clears threshold and a finding a biologist can act on — and why closing it is a modeling problem, not a statistics problem.
tags: [reproducibility, machine-learning]
categories: [commentary]
related_posts: false
---

> **Draft.** Written as a starting point — edit freely before publishing.

Every computational biologist eventually has the same meeting. You present a
result. It is significant after multiple-testing correction, the effect size is
respectable, the model validates out of sample. A bench scientist looks at the
top hit and says, politely, that the gene does not do that.

They are usually right, and the interesting question is why.

## Significance answers a question nobody asked

A p-value asks whether the data are surprising under a null hypothesis. In a
high-dimensional screen, that null — no association whatsoever, in a system with
tens of thousands of correlated measurements — is close to trivially false.
Something will always be associated with something. With 20,000 genes and
adequate power, the multiple-testing burden is the least of the problem; the
deeper issue is that "not exactly zero" is a very low bar for a biological
claim.

The bar a biologist applies is different and mostly unstated. Roughly: _is
there a mechanism by which this could be true, and does the effect survive
contact with the things I know confound it?_

## Three specific gaps

**Correlated predictors are not interchangeable to biology.** A model that
selects one of five co-expressed pathway members has made a statistically
defensible choice and a biologically arbitrary one. The statistics cannot tell
them apart; only prior structure can. (I wrote about
[one way to encode that structure]({{ '/blog/2026/lasso-picks-the-wrong-gene/' | relative_url }}).)

**Confounders are domain-specific and invisible to the loss function.** Tissue
of origin, batch, growth rate, copy number. A model optimizing predictive error
will happily route its signal through any of them, and cross-validation will
applaud, because the confounder is present in the held-out fold too. Predictive
validation does not detect confounding — it launders it.

**Effect size is reported on the wrong scale.** A standardized coefficient of
0.3 tells a biologist nothing. The number they need is the one attached to a
decision: how much does dependency shift between biomarker-positive and
biomarker-negative lines, on the scale the assay is actually measured in?

## What actually closes the gap

Not more stringent thresholds. Lowering α makes a list shorter without making
it more mechanistic — you get fewer arbitrary genes, not better ones.

What has worked for me is putting the biology _inside_ the model rather than
applying it as a filter afterward. Prior network structure in the penalty.
Stratification by the known confounder rather than hoping it averages out.
Reporting effects on the native measurement scale. These are modeling
decisions, and they are made before you see a p-value.

There is a version of this argument that slides into dismissing statistics
altogether, and that is worse than the disease — biological intuition is at
least as good at generating confident wrong answers, and it does not come with
error bars. The point is narrower. Statistical significance is a necessary
filter and a poor ranking. Something has to supply the ranking, and if you do
not choose what that something is, noise will choose for you.

The result worth presenting is the one where you can say, in a sentence and
without hedging, what would have to be true in the cell for the model to be
right. If you cannot, the p-value is not going to help.
