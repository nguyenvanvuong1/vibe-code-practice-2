# Project Guidelines

AI Vibe Coding mini project: a Survey + Dashboard website students build by prompting an AI coding agent. See [docs/student-guide.md](../docs/student-guide.md) for the full requirements and [docs/teacher-rubric.md](../docs/teacher-rubric.md) for grading criteria.

## Architecture

- Vanilla HTML/CSS/JavaScript only — no backend, no database, no API, no npm/build step.
- No chart libraries — dashboard visualizations are built with plain DOM/CSS so students learn the basics.
- All data persists client-side in `localStorage` under the `surveyResponses` key (see [localstorage.instructions.md](./instructions/localstorage.instructions.md)).

## Conventions

- Follow the DEFINE → PLAN → BUILD SMALL → RUN → VERIFY → DEBUG → REFACTOR → REFLECT loop described in [vibe-workflow.instructions.md](./instructions/vibe-workflow.instructions.md) when prompting or implementing features.
- Reusable task prompts (requirements, build survey, build dashboard, debug/review, data insight) live in [.github/prompts](./prompts/).
- Never store sensitive personal data (passwords, tokens, PII) in `localStorage`.

## Deliverables

Student submissions must include: `index.html`, `css/styles.css`, `js/app.js`, `PROMPTS.md`, `TESTING.md`, `REFLECTION.md`. See `sample-solution/` for a reference implementation.
