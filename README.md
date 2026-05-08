# Frontend Interview Case Skill

This repository contains a baseline Codex skill for generating tailored frontend technical interview cases from candidate CVs.

## Repository Layout

```text
skills/
  frontend-interview-case/
    SKILL.md
    agents/openai.yaml
    assets/case-template.html
    assets/case-styles.css
    references/case-guidelines.md
    references/role-levels.md
    references/scoring-rubric.md
    scripts/render_pdf.js
    scripts/package.json
```

## Install For The Team

From Codex, after this repo is pushed to GitHub:

```text
Install the Codex skill from GitHub repo applebar17/frontend-case-skill path skills/frontend-interview-case.
```

For private repos, normal GitHub credentials, `GH_TOKEN`, or `GITHUB_TOKEN` can be used by the installer.

Manual Windows install:

```powershell
Copy-Item -Recurse .\skills\frontend-interview-case "$env:USERPROFILE\.codex\skills\"
```

Manual macOS/Linux install:

```bash
mkdir -p ~/.codex/skills
cp -R ./skills/frontend-interview-case ~/.codex/skills/
```

Restart Codex after installing so the skill is discovered.

## Invoke The Skill

```text
Use $frontend-interview-case to create a senior React interview case from this CV.
```

Codex can also invoke it implicitly when the request asks to generate a frontend technical case from a CV or resume.

## PDF Renderer Setup

The skill includes a deterministic HTML to PDF renderer using Playwright.

```bash
cd skills/frontend-interview-case/scripts
npm install
npx playwright install chromium
```

The generated case workflow will call:

```bash
node skills/frontend-interview-case/scripts/render_pdf.js generated-cases/<case-slug>/case.html generated-cases/<case-slug>/case.pdf
```
