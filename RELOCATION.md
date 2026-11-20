# Relocation and org hub

## Intent

almost-open will live as a sibling under the A1 Workshop local tree. The org GitHub Pages site becomes a **multi-workshop landing page**, not an Inventor-only proposal.

**This repo’s agent does not perform the move or edit `a1-workshop` files.** The operator moves the directory manually, then implements the hub in the a1-workshop workspace.

## Manual move

```bash
# stop any npm run dev first
mv ~/src/almost-open ~/src/a1-workshop/almost-open
```

Target layout:

```text
~/src/a1-workshop/
├── a1-workshop.github.io   # ORG HUB (refactor after move)
├── a1-inventor             # AI-Powered Inventor
├── almost-open             # this course (after move)
└── a1-student              # (future)
```

Git remotes stay independent. Sibling folders are for local organization and hub linking — not a monorepo merge.

## Hub work (other workspace)

After the move, in `~/src/a1-workshop/`:

1. Refactor `a1-workshop.github.io` root into an org hub listing:
   - **AI-Powered Inventor** → `/inventor/` (relocate today’s proposal + `lab/gate-lite`)
   - **almost-open** → link out to this course’s published Pages (or interim URL)
2. Update `a1-inventor/docs/org.md` and the hub `README.md` so `a1-workshop.github.io` is defined as the org brochure, not Inventor-only.
3. Do **not** vendor `course/` into the hub; almost-open keeps its own Eleventy site (`npm run build` → `site/_site/`).

## Follow-ups in almost-open (after move)

- Adjust `.cursor/rules/almost-open.mdc` if hub edits from a sibling path are intentional.
- Point README / `course/references.md` at the live org hub URL once deployed.
- Deploy project Pages so the hub has a stable href for almost-open.

## Verify

- Hub `/` lists both workshops
- `/inventor/lab/gate-lite.html` still works
- `npm run build` succeeds from `~/src/a1-workshop/almost-open`
