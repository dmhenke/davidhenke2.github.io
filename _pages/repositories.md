---
layout: page
permalink: /repositories/
title: repositories
description: Open-source code behind my research — network-informed ML, viral genomics, and LLM tooling.
nav: true
nav_order: 4
---

{% if site.data.repositories.github_users %}

## GitHub

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for user in site.data.repositories.github_users %}
    {% include repository/repo_user.liquid username=user %}
  {% endfor %}
</div>

{% endif %}

{% if site.data.repositories.github_orgs %}

## Organizations

<div class="repositories repositories--orgs d-flex flex-wrap flex-md-row flex-column justify-content-between">
  {% for org in site.data.repositories.github_orgs %}
    {% include repository/repo_org.liquid org=org %}
  {% endfor %}
</div>

{% endif %}

{% if site.data.repositories.github_repos %}

## Selected repositories

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>

{% endif %}
