---
title: Week 2 — Site, cutting, and kerf
shortTitle: Cutting & docs
week: 2
time: "~8–12 h (plus shop access)"
goal: Publish a reproducible site; vinyl-cut something useful; measure kerf; laser a parametric press-fit kit.
---

Two jobs share this week: the **site as lab notebook**, and **cutting** with numbers from the machine — not from software defaults.

**FOSS defaults:** Git, plain HTML or Hugo, Inkscape, FreeCAD. See [vinyl](../processes/vinyl-cutting.md), [laser](../processes/laser-cutting.md), [press-fit](../processes/parametric-press-fit.md).

## Site and Git

1. In your working folder, create a site root (for example `site/`) with at least:
   - `index.html` — who you are and a link to the final-project paragraph
   - `project.html` — week 1 paragraph and model files
   - `css/style.css` — readable type, max image width
2. Prefer hand-written HTML so you can read it. Hugo is fine if you want Markdown; it is not required.
3. Git minimum: `status` → `add` → `commit`. One commit per working state. Do not commit multi-megabyte videos; compress first.
4. If you use a remote, add it and push. Record the clone URL on `index.html`.
5. Add a **sources** section on each page: tools used, and any AI-assisted text or code with enough detail that someone else can reproduce the work.
6. If your cohort requires a signed agreement (or equivalent), commit that file under the required name and link it from the site.

## Vinyl

1. Complete vinyl-cutter safety training for your shop (or document a substitute).
2. In Inkscape: one-color drawing; convert strokes/text to paths as needed; weed border; millimetres.
3. Cut with shop force, speed, and blade offset. Record settings that cut vinyl without cutting through the carrier.
4. Photograph before and after weeding. Stick the graphic on the notebook or project.
5. Publish file, settings table, and photos.

## Kerf coupon and laser table

1. Complete laser safety training. Never bypass interlocks or supervised access rules.
2. Characterize focus, power, speed, rate, kerf, joint clearance, and joint types for your material (group when possible).
3. **Kerf rectangle:** known drawn width; measure the fallen piece; subtract. Record material and settings.
4. **Clearance ladder:** slots from about `thickness - 0.20 mm` to `thickness + 0.10 mm`. The slot that holds with the force you want is `slot`.
5. Include finger, slot, and snap/wedge coupons; note failures.
6. Publish the settings table with measured `thickness`, `kerf`, and winning `slot`.

## Parametric press-fit kit

1. In FreeCAD, spreadsheet aliases: `thickness`, `kerf`, `slot` (from above).
2. Bind sketches to those aliases. Changing material means editing the spreadsheet and exporting again — not redrawing.
3. Relief at inside corners; chamfer or round tab entries.
4. Export DXF; verify in Inkscape (paths only, mm, closed paths). Separate cut/engrave layers if needed.
5. Cut with your table; assemble at least one configuration; photograph parts and assembly.
6. Publish parameters, DXF/SVG, photos, and what you would change.

## Done when

- [ ] Site describes you and the project; design files are linked
- [ ] Git history is incremental; sources (including AI) are named
- [ ] Vinyl cut documented with settings and photos
- [ ] Kerf measured; clearance-ladder `slot` recorded
- [ ] Kit is parametric off `thickness` / `kerf` / `slot`; assembly photos on the site

Next: [Week 3 — Embedded bring-up](03-embedded.md)
