# Agent guide — almost-open

**Org:** A1 Workshop (independent). Remotes stay independent; local siblings under `~/src/a1-workshop/` are not a monorepo.

Public learner materials (`course/`, README) are not Cursor instructions. Standing policy lives here and in `.cursor/rules/`.

## Course law

- Curriculum SSOT is markdown under `course/` only.
- Completely open: do **not** reintroduce `student/`, `instructor/`, facilitator-only paths, or audience gates.
- Do not invent lecture transcripts where evidence is missing. Gaps stay gaps.
- Prefer FOSS worked paths; commercial tools are catalog alternatives, not mandates.
- Lab safety and local machine settings override any number in a guide.

## Site

- Eleventy builds from `course/**/*.md` → `site/_site/` with pathPrefix `/almost-open/`.
- Do not hand-mirror lessons into HTML.
- Org hub listing lives in sibling `a1-workshop.github.io` — link it; do **not** vendor `course/` into the hub.

## Commands

```bash
npm install
npm run dev
npm run build
```

## Scoped rules

Week/site authoring details: [`.cursor/rules/almost-open.mdc`](.cursor/rules/almost-open.mdc).
