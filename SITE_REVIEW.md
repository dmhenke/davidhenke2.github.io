# Site Review — dmhenke.github.io

Reviewed as career coach + designer. Ordered by impact. Findings reference the
files they live in so each is directly actionable.

---

## 1. Critical — fix before anything else

**The homepage is rendering blank below the bio.** `_pages/about.md` front
matter is missing the keys the `about` layout checks for (`_layouts/about.liquid`
gates news, publications, and social icons on `page.announcements`,
`page.selected_papers`, `page.social`). The npj paper, the three news items, and
the social links all exist in the repo but **never appear on the landing page.**
Add to `about.md` front matter:

```yaml
news: true
selected_papers: true
social: true
announcements:
  enabled: true
  scrollable: true
  limit: 5
latest_posts:
  enabled: false
```

This is the single highest-return change. Everything else is polish.

**Location contradiction.** `about.md` profile says _Salt Lake City, UT_;
`_data/cv.yml` and every experience entry say _Houston, TX / Baylor College of
Medicine_ (BCM is in Houston). Pick one and make it consistent.

**Dead / placeholder assets:**

- `_pages/cv.md` → `cv_pdf: /assets/pdf/example_pdf.pdf` and
  `_data/socials.yml` → `cv_pdf: ""`. The CV download points at the demo file.
- `_data/socials.yml` → `email: ""`. No contact email is set.
- Project thumbnails `boat.jpg`, `lunch.jpg`, `dino.jpg` (projects 1–3) are
  al-folio demo stock.

**Leftover demo content** still shipping: `_books/the_godfather.md`,
`_pages/about_einstein.md`, `_pages/profiles.md` ("members of the lab or group,"
Einstein, "555 your office number"), and the two demo courses in `_teachings/`.
Delete or hide from nav.

**Project ordering is unstable.** `importance` values collide (two `2`s, two
`3`s across `_projects/`). Renumber 1–5 so ordering is deterministic.

---

## 2. Career positioning (content)

**Cut the throat-clearing open.** `about.md` currently leads with "This is my
personal professional page. Here you'll find an overview of my research…" — it
tells instead of shows and wastes the most valuable real estate (and the SEO
meta description). The _second_ half — the network-biology research narrative —
is genuinely strong. Promote it to the top; delete the meta paragraph.

**Converge on one identity line.** Three different self-descriptions are live:
about = "Computational biologist… biomarker discovery, precision oncology, ML";
`cv.yml` label = "Computational Biologist"; `cv.yml` summary leads with
"biostatistician… viral and human genetics." Pick one positioning and repeat it
everywhere. Recommended differentiator: _network-informed machine learning for
precision oncology — ~2 decades, R-first._

**Surface the marquee credential.** The npj Precision Oncology paper (2025,
doi:10.1038/s41698-025-00825-9) is the strongest signal on the site but is
buried in a one-line news item. Feature it: enable `selected_papers` (above) and
add a one-line "Featured work" callout on the about page.

**Move quantified wins up.** The CV holds the measurable impact — _453 cancer
targets × 1,048 DepMap cell lines; recovered GAB2 as an EGFR dependency; secured
orphan-drug designation; built the cfNIPT algorithm._ These belong on the about
page where attention lands, not only in the CV.

**Add missing social proof.** `scholar_userid` is set but Google Scholar isn't
surfaced on the homepage, and there's no ORCID. Add both to `_data/socials.yml`.

---

## 3. Avant-garde design direction

The site is the recognizable stock al-folio look. The differentiators below are
avant-garde _and_ on-brand, because they visualize the actual research rather
than decorate around it.

**Make the hero the work.** Replace the static circular headshot + paragraph
with an asymmetric split: portrait offset to one side, and a live SVG
**protein–protein interaction network** (STRING-style node-edge graph, gently
animated) as the hero backdrop. It signals "computational biology" in one glance
and is unmistakably custom.

**Build a typographic identity.** Override the al-folio accent and fonts in
`_sass`: one distinctive accent color (a clinical teal / oncology-data palette),
a display serif for headers paired with a monospace for code and figures — the
serif/mono pairing reads as "rigor + computation."

**Replace stock thumbnails with generated data-viz.** Swap `boat/lunch/dino.jpg`
for real figures from the work (network plots, a DepMap dependency heatmap). A
coherent visual language across project cards is worth more than any stock photo.

**Tune dark mode deliberately.** al-folio ships dark mode; the node-edge network
motif reads beautifully on a dark canvas — make it the intentional default look,
not an afterthought.

**Add one living element.** The existing `Preprint_Digest` project already
produces a daily LLM-curated feed. Embed a small live-ish digest panel on the
landing page so a static CV becomes a site that updates itself — a strong,
unusual differentiator for an academic page.

---

## Suggested order of execution

1. Front-matter fixes in `about.md` (unblocks the whole homepage).
2. Resolve location + replace placeholder CV/email/thumbnail assets.
3. Remove demo content, renumber projects.
4. Rewrite the about copy around one positioning line + quantified wins.
5. Design pass: accent/type system, network hero, dark mode, live digest panel.

Items 1–3 are an afternoon. Items 4–5 are where the page stops looking like a
template and starts looking like yours.
