# almost-open

**How To Make (almost) Anything, Open** — a self-paced, FOSS-first course. Design → cut/print/mill → boards → integrate → document. Weekly pieces become one final project.

This is a **completely open** course: one curriculum tree, no student/instructor gates.

## Start

Read [`course/index.md`](course/index.md) (or the site home after build). Weeks live under [`course/weeks/`](course/weeks/). Provenance and sources: [`course/references.md`](course/references.md).

## Build the site

```bash
npm install
npm run dev    # http://localhost:8080
npm run build  # site/_site/
```

Markdown in `course/` is the SSOT. The site is generated; do not hand-mirror lessons into HTML.

## Repo map

| Path | Role |
| --- | --- |
| `course/` | Open curriculum (weeks, processes, tools, references) |
| `site/` | Eleventy layouts and CSS |
| `.cursor/rules/` | Author/agent rules (not published as lessons) |

## Location / org

Intended local home: `~/src/a1-workshop/almost-open` (sibling to `a1-inventor` and `a1-workshop.github.io`). The org Pages site will become a hub for **AI-Powered Inventor** and **almost-open**. See [`RELOCATION.md`](RELOCATION.md) for the move checklist and hub notes — move the directory manually; hub edits happen in the a1-workshop workspace.

## Brand

**almost-open** — reading-first, FOSS-default, week spine aligned with HTMAA course-design architecture.
