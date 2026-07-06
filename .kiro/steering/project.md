---
inclusion: always
project: mycourses
---

# Project: mycourses

Personal learning platform. Any topic becomes a course (modules -> content lessons + quizzes), authored as Markdown + JSON in git and published free to a static site.

- **Live:** https://mikeartee.github.io/mycourses/
- **Stack:** Astro static site -> GitHub Actions -> GitHub Pages, deployed on push to `main`. No backend.
- **Content model:** `courses/<slug>/course.json` (+ `welcome.md`); `modules/<id>/manifest.json` + lesson `.md` files + `quiz.json`.
- **Add a course:** create those files and push to `main` (auto-builds + deploys), or ask the agent to generate a topic.
- **Ship style:** direct push to `main`, no PR (see `docs/agents/ship-style.md`).
- **Architecture decision:** `docs/adr/0001-static-astro-site-on-github-pages.md`.

The `project: mycourses` field in this file's frontmatter lets kiro-recall's secondary signal load `01-projects/mycourses.md` from the vault at session start.
