# High Level Architecture

## Technical Summary

The project is a partially implemented React Single Page Application (SPA) built with Vite. The current codebase consists of a disconnected set of UI components, some implemented API services, and a boilerplate entry point. The features described in the PRD are largely unimplemented, and the existing code is not yet integrated into a functional application.

## Actual Tech Stack (from package.json)

| Category  | Technology | Version | Notes                      |
| --------- | ---------- | ------- | -------------------------- |
| Runtime   | Node.js    | (implicit) | From `package.json` usage |
| Library   | React      | ^19.2.0 |                           |
| Build Tool| Vite       | ^7.2.4  | Configured in `vite.config.js` |
| Linter    | ESLint     | ^9.39.1 | Configured in `eslint.config.js`|

## Repository Structure Reality Check

- Type: Single-Application Repository
- Package Manager: npm (inferred from `package-lock.json`)
- Notable: A full feature-based directory structure (`src/features`, `src/services`, `src/ui`) exists, but the components within are mostly placeholders and are not wired together.
