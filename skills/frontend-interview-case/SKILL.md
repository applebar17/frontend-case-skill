---
name: frontend-interview-case
description: Prepare frontend technical interview cases from candidate CVs or resumes. Use when Codex needs to read a CV, infer role-relevant frontend signals, create a tailored HTML technical assignment, attach interviewer guidance and scoring criteria, and render a PDF-ready case document.
---

# Frontend Interview Case

## Overview

Use this skill to turn a CV or candidate profile into a realistic frontend technical assignment with a printable HTML/PDF deliverable. Keep the case tailored to role-relevant technical signals, but do not expose private CV details or make automated hiring decisions.

## Workflow

1. Confirm that the user provided a CV, resume, or candidate profile. If not, ask for it before generating a case.
2. Extract only job-relevant technical signals: frontend frameworks, TypeScript or JavaScript depth, architecture exposure, testing, accessibility, design systems, performance work, API integration, state management, delivery ownership, and mentoring.
3. Ignore protected or irrelevant personal attributes. Do not infer age, gender, nationality, ethnicity, disability, family status, religion, political views, health, or similar traits.
4. Read `references/role-levels.md` to select or validate the case level: junior, mid, senior, lead, or architect. If the role level is ambiguous, state the assumption briefly.
5. Read `references/case-guidelines.md` before drafting the assignment structure.
6. Read `references/scoring-rubric.md` before writing interviewer notes or evaluation criteria.
7. Create a candidate-neutral case. Do not copy the candidate's exact projects, employer context, domain, or confidential details from the CV.
8. Use `assets/case-template.html` and `assets/case-styles.css` as the output baseline when producing HTML.
9. Generate a complete HTML file with:
   - candidate-neutral title
   - target level and duration
   - scenario
   - requirements
   - constraints
   - deliverables
   - evaluation rubric
   - interviewer notes
   - optional follow-up discussion prompts
10. Render the HTML to PDF with `scripts/render_pdf.js` when Node.js and Playwright are available.
11. Return the generated HTML and PDF paths. If PDF rendering cannot run, return the HTML path and the exact setup command needed.

## Output Convention

Create generated work in the current project, not inside the installed skill folder. Prefer:

```text
generated-cases/<case-slug>/
  case.html
  case-styles.css
  case.pdf
```

Copy `assets/case-styles.css` next to the generated HTML unless the HTML is fully self-contained.

## PDF Rendering

Run:

```bash
node path/to/frontend-interview-case/scripts/render_pdf.js generated-cases/<case-slug>/case.html generated-cases/<case-slug>/case.pdf
```

If Playwright is not installed for the skill, install dependencies in the skill's `scripts` folder:

```bash
npm install
npx playwright install chromium
```

## Quality Rules

- Prefer practical frontend work over trivia.
- Include accessibility, testing, maintainability, and tradeoff discussion.
- Keep requirements realistic for the target level and expected duration.
- Make assumptions visible but brief.
- Keep scoring human-led; do not rank, accept, reject, or make employment decisions.
- Produce clean, printable HTML that works in A4 PDF format.
