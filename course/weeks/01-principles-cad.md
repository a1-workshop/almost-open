---
title: Week 1 — Principles and a project model
shortTitle: Principles & CAD
week: 1
time: "~4–6 h"
goal: Describe a possible final project and model it three ways; get a working notebook repo.
---

This week is the sketch the rest of the course grows from. Decide what the object does, who it is for, and which pieces you will make: shape, circuit, program, package.

**FOSS defaults:** Inkscape (vector), FreeCAD (solid), GIMP or Blender (raster/render), Git.

## Setup

1. Create a working folder (for example `almost-open-work/`). Keep your design files and personal site here — not inside this curriculum repo unless you forked it on purpose.
2. Install or confirm: **Git**, **Inkscape**, **FreeCAD**, **GIMP** (or another raster editor).
3. Initialize Git:

   ```bash
   cd almost-open-work
   git init
   git config user.name "Your Name"
   git config user.email "you@example.com"
   ```

4. Add a `README.md` with one sentence about what you might make. Commit it.

## Raster, vector, solid

A picture, a drawing, and a solid are different descriptions of the same object.

- **Raster** — pixel grid (GIMP). Good for photos and web images; poor for cutter paths.
- **Vector** — curves (Inkscape). Scale stays sharp; logos and vinyl art belong here.
- **Solid** — volume with dimensions (FreeCAD). Keep the native file; export mesh only when a printer needs it.

## Model a possible project

1. Write one paragraph: what the object does, who it is for, and which pieces you will have to make.
2. **Vector (Inkscape):** Front view in millimetres. Put overall width and height as text. Convert cut text to paths (`Path → Object to Path`). Save SVG.
3. **Solid (FreeCAD):** Body + sketch on XY. Constrain geometry; pad to a thickness stored as spreadsheet alias `thickness`. Save the FreeCAD file; export a PNG for the page; keep the native file as the design file.
4. **Raster / render:** Prepare a photo or diagram in GIMP — or light a simplified volume in Blender and render a still (a short turntable is enough if you animate).
5. Compress before you post:

   ```bash
   magick render.png -strip -quality 85 render.jpg
   magick photo.png -resize 1600x1600\> photo-web.png
   ```

   Optional video:

   ```bash
   ffmpeg -i turntable.mov -c:v libx264 -crf 28 -pix_fmt yuv420p -an turntable.mp4
   ```

6. Commit design files (not huge videos). Name the programs you used in `week-01-notes.md`.

## Done when

- [ ] Working folder is a Git repo with a first commit
- [ ] Inkscape and FreeCAD launch
- [ ] Paragraph states function, audience, and makeable pieces
- [ ] SVG, FreeCAD (or named solid tool), and at least one render/photo are saved
- [ ] `thickness` (or equivalent) is findable in the solid file
- [ ] Images are compressed; programs are named in notes

Next: [Week 2 — Site, cutting, and kerf](02-cutting-docs.md)
