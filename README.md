# almost-open

**How To Make (almost) Anything** — a self-paced, FOSS-first course. Design → cut/print/mill → boards → integrate → document. Weekly pieces become one final project.

Inspired by MIT’s [How To Make (almost) Anything](https://fab.cba.mit.edu/classes/MAS.863/). This is a **completely open** course: one curriculum tree, no student/instructor gates.

**Live site:** [https://a1-workshop.github.io/almost-open/](https://a1-workshop.github.io/almost-open/)  
**Org hub:** [https://a1-workshop.github.io](https://a1-workshop.github.io)

## Start

Read [`course/index.md`](course/index.md) (or the site home after build). Weeks live under [`course/weeks/`](course/weeks/). Provenance and sources: [`course/references.md`](course/references.md).

## Build the site

```bash
npm install
npm run dev    # http://localhost:8080  (pathPrefix still /almost-open/ in output links)
npm run build  # site/_site/
```

Markdown in `course/` is the SSOT. The site is generated; do not hand-mirror lessons into HTML. GitHub Actions deploys `site/_site` to project Pages on push to `main`.

## Repo map

| Path | Role |
| --- | --- |
| `course/` | Open curriculum (weeks, processes, tools, references) |
| `site/` | Eleventy layouts and CSS |
| `.github/workflows/` | Pages deploy |
| `AGENTS.md` | Cursor / author standing policy |
| `.cursor/rules/` | Scoped authoring rules |

## Location / org

Local home: `~/src/a1-workshop/almost-open` (sibling to `a1-inventor` and `a1-workshop.github.io`). Git remotes stay independent.

Authors/agents: see [`AGENTS.md`](AGENTS.md).

## Brand

**How To Make (almost) Anything** — reading-first, FOSS-default, week spine inspired by MIT HTMAA. Repo slug: `almost-open`.
