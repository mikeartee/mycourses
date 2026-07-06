# mycourses

A personal learning platform: pick any topic, author it as a course, and publish it.

> **Status: early setup.** The product itself is being specced with the Arc workflow
> (PRD → issues → build). This README captures the *starting structure* and the
> *content-model reference* borrowed from a prior project (`forgood`), with all of that
> project's actual content removed. Everything here is a starting point, not a final
> design — it can and will change during speccing.

## Structure

```
courses/    # Course definitions (each course references an ordered list of modules)
modules/    # Standalone learning modules (content lessons + a quiz)
widgets/    # Optional interactive HTML widgets
```

Content lives in git as folders + Markdown + JSON. There is intentionally **no hosting
or deploy pipeline yet** — how this gets published (free GitHub Pages is the current
intent) is a decision for the spec. The reference project's Cloudflare pipeline was
deliberately *not* carried over.

## Content model reference

The shape of the content, kept here so we never have to go re-read the reference
project. This will be formalised (and may change) during speccing.

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

A `content` lesson points at a Markdown file in the same folder; a `quiz` lesson points
at a quiz JSON file.

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

A course folder also has a `welcome.md` and an `assets/` folder for images.

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

Question types in the reference: `MULTIPLE_CHOICE` (one correct) and `MULTIPLE_RESPONSE`
(one or more correct).
