# 1. Static Astro site on GitHub Pages for the mycourses platform

Date: 2026-07-06

## Status

Accepted

## Context

`mycourses` is a personal learning platform: any topic can be authored as a course (modules → content lessons + quizzes) and published to a website. The requirements that shaped the architecture were:

- **Free to run** and hosted on the owner's personal GitHub account (`mikeartee/mycourses`).
- **Content lives in git** as folders + Markdown + JSON, so authoring is just editing files (often by an AI agent in-session).
- **Unattended publishing** — a push should deploy with no manual steps and no per-change approvals.
- **Independent** of any prior project. A reference project (`forgood`) inspired the content model but runs on a Cloudflare R2 + D1 pipeline tied to another org; we wanted the shape, not the infrastructure.

The key open question was how course content should render on the web.

## Decision

Build the site with **Astro** (static output) and deploy it to **GitHub Pages** via **GitHub Actions** on every push to `main`.

- Content is read at **build time** by a content loader that parses `courses/*/course.json` and `modules/*/manifest.json`, resolves each course's module list, and validates it (missing modules, missing lesson files, quizzes with no correct answer all fail the build).
- The content loader is a **deep, isolated module** covered by unit tests (Vitest); quiz grading is a pure, tested function reused by the client.
- Quizzes are **graded client-side** (no backend); optional progress would use `localStorage`.
- Ship style is **direct push to `main`** (no PR gate) so publishing is one step.

## Alternatives considered

- **Reuse the `forgood` Cloudflare R2 + D1 pipeline.** Rejected: not free-in-spirit, tied to another org's private workflow and account, more moving parts, and couples this project to infrastructure we don't control.
- **Client-side SPA that fetches JSON/Markdown at runtime.** Rejected in favour of build-time static generation: faster first paint, no runtime fetch/error handling, better for a content site, and trivially cacheable on a CDN.
- **Other static generators (Eleventy, Next.js static export).** Astro chosen for its first-class Markdown/content story and minimal shipped JavaScript.

## Consequences

**Positive**

- Free, fully static hosting; fast; no servers, secrets, or databases to run.
- Every push to `main` auto-builds, tests, and deploys; broken content fails the build loudly.
- Rendering is decoupled from content; the content model could be rendered by another tool later.
- The content loader is independently testable.

**Negative / trade-offs**

- **No server-side capability.** There is no backend, so features like an on-site "type a topic and it auto-generates a course" box, user accounts, or server-side progress are out of scope. Course generation is done by an agent in the editor, then committed. (This directly answers why there is no self-service generation box on the site.)
- Every content change requires a rebuild + redeploy (fast, tens of seconds).
- As a GitHub Pages **project site**, the app is served under a base path (`/mycourses`); links must be built through a base-aware helper.
- A custom domain (`mikefromnz.com`) is deferred; adopting it later means adding a `CNAME` and DNS records.
