# mycourses

A personal learning platform. Pick a topic, turn it into a course, publish it, with as little manual effort as possible.

The idea is simple: when I want to learn something (Python, first up), I add it as a course. The content lives in this repo as plain Markdown and JSON, and pushing to `main` publishes it to a free site. Adding and maintaining courses is meant to run largely unattended, so the effort is "decide what to learn," not "wire up a website."

> **Status: early.** The content model below is settled enough to author against, but the site that renders these courses is still being specced (see [Roadmap](#roadmap)). Nothing here depends on an external service yet.

## How it works

1. **Pick a topic** — e.g. "Learn Python."
2. **Author it as a course** — a course is an ordered set of modules; each module is a handful of content lessons plus a quiz. It's all folders + Markdown + JSON in this repo (see [Content model](#content-model)).
3. **Push to `main`** — that publishes the content to a free GitHub Pages site (planned, see [Roadmap](#roadmap)).

The heavier lifting, scaffolding folders, drafting lessons, running the deploy, is handled through an automated build workflow so that adding a new topic stays lightweight.

## Structure

```
courses/    # Course definitions (each references an ordered list of modules)
modules/    # Standalone learning modules (content lessons + a quiz)
widgets/    # Optional interactive HTML widgets
docs/       # Project and agent-workflow docs
```

Modules are standalone and reusable across courses; a course just lists the module IDs it includes, in order.

## Content model

The shape of the content, kept here as a self-contained reference.

### Module — `modules/<module-id>/manifest.json`

```json
{
  "id": "<module-id>",
  "title": "...",
  "description": "...",
  "lessons": [
    { "id": "intro", "title": "...", "type": "content", "markdownPath": "intro.md" },
    { "id": "quiz",  "title": "...", "type": "quiz",    "quizPath": "quiz.json" }
  ]
}
```

A `content` lesson points at a Markdown file in the same folder; a `quiz` lesson points at a quiz JSON file. A module folder holds its `manifest.json`, one Markdown file per content lesson, and a `quiz.json`.

### Course — `courses/<course-slug>/course.json`

```json
{
  "id": "<course-slug>",
  "title": "...",
  "description": "...",
  "coverImage": "cover.png",
  "estimatedDuration": "2-3 hours",
  "welcomePath": "welcome.md",
  "modules": ["<module-id>", "..."]
}
```

A course folder also holds a `welcome.md` and an `assets/` folder for images like the cover.

### Quiz — `quiz.json`

```json
{
  "title": "...",
  "type": "quiz",
  "passingScore": 70,
  "questions": [
    {
      "id": "q1",
      "questionNumber": 1,
      "type": "MULTIPLE_CHOICE",
      "question": "...",
      "answers": [
        { "id": "q1_a", "text": "...", "correct": true },
        { "id": "q1_b", "text": "...", "correct": false }
      ],
      "feedback": "..."
    }
  ]
}
```

Question types: `MULTIPLE_CHOICE` (exactly one correct) and `MULTIPLE_RESPONSE` (one or more correct).

## Hosting

Free GitHub Pages, served from this repo and redeployed when `main` changes. A custom domain (`mikefromnz.com`) is planned once the basics are proven.

## Roadmap

- [ ] Decide how courses render on Pages, static-site build vs. a client-side reader (the main open design question)
- [ ] Build the site and the deploy workflow
- [ ] First course: Python
- [ ] Custom domain

Out of scope for now: user accounts / multi-user, and anything from prior hosting pipelines.

## How this repo is built

The content and the platform are built through an automated engineering workflow (config in `docs/agents/`). Changes ship straight to `main`, there's no pull-request step, which keeps "add a topic" close to hands-free.
