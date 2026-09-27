# Matheus Freire — Portfolio V2

Personal engineering portfolio focused on backend systems, infrastructure, Cloud/AWS, CI/CD, and observability.

## Stack

- React 19 and TypeScript
- Vite 8
- Hand-authored CSS and SVG visuals
- No runtime animation or icon library

## Commands

```bash
npm ci
npm run dev
```

Validate and create the production build:

```bash
npm run typecheck
npm run lint
npm run build
```

Preview the generated build locally:

```bash
npm run preview
```

## Content model

Interface copy and engineering-case content live in `src/i18n/translations.ts`. Project evidence is stored in `public/projects` and comes from the respective public repositories.

Theme and locale selections are persisted in local storage. The initial theme script runs before React to prevent an incorrect-theme flash.
