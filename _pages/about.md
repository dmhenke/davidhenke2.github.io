---
layout: about
title: About
permalink: / # homepage — this is what generates index.html at the site root
description: David M. Henke — computational biologist at Baylor College of Medicine building network-informed machine learning for precision oncology.
profile:
  align: right
  image: prof_pic.jpg
  image_circular: false # true, false
  more_info: >
    <p>Baylor College of Medicine</p>
    <p>Houston, TX</p>

network_hero: true
hero_eyebrow: "Computational Biology · Precision Oncology"
hero_tagline: "Network-informed machine learning that teaches models what biology already knows — from viral genomics to cancer dependency screens."

news: true
announcements:
  enabled: true
  scrollable: true
  limit: 5

selected_papers: true
social: true

latest_posts:
  enabled: false
---

I am a computational biologist at **Baylor College of Medicine**, where my work sits at the intersection of statistical machine learning, network biology, and functional genomics. Across nearly two decades in biomedical research, I have led the data-driven arm of clinical and basic-science studies spanning viral genomics, precision oncology, and human genetics.

High-dimensional biological data is noisy, collinear, and humbling. Standard approaches will happily select a feature simply because it lives next to the real driver. My central research question is whether we can teach models what biology already knows — and use that knowledge to find signals that statistics alone would miss.

In practice, this means building regularized regression frameworks that incorporate **protein–protein interaction networks**, applying them to large-scale cancer dependency screens from **DepMap**, and translating the results toward therapeutic hypotheses. My flagship project, **[BioPrimeLASSO](https://www.nature.com/articles/s41698-025-00825-9)** — published in _npj Precision Oncology_ (2025) — encodes STRING-DB network structure into the LASSO penalty, scaled it across 453 cancer targets and 1,048 cell lines, and recovered GAB2 as an EGFR dependency biomarker that conventional feature selection would have missed.

My primary tool is **R**. My primary motivation is the gap between a statistically significant finding and a biologically meaningful one.

<div class="featured-work" markdown="1">
<span class="featured-work__label">Featured work</span>
**BioPrimeLASSO** — *npj Precision Oncology* (2025). Network-priming recovered GAB2 as an EGFR dependency across 453 targets and 1,048 DepMap cell lines, a signal conventional feature selection missed. [Read the paper →](https://www.nature.com/articles/s41698-025-00825-9)
</div>
