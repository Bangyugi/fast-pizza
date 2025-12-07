# Fast React Pizza Co. Brownfield Architecture Document

## Introduction

This document captures the CURRENT STATE of the Fast React Pizza Co. codebase, including technical debt, workarounds, and real-world patterns. It serves as a reference for AI agents working on enhancements.

### Document Scope

This is a comprehensive documentation of the entire existing system, which is in a partially implemented state.

### Change Log

| Date   | Version | Description                 | Author    |
| ------ | ------- | --------------------------- | --------- |
| 2025-12-07 | 1.0     | Initial brownfield analysis | Winston (Architect) |

## Quick Reference - Key Files and Entry Points

### Critical Files for Understanding the System

- **Main Entry**: `src/main.jsx` (Renders `App.jsx`, which is currently boilerplate code)
- **Configuration**: `vite.config.js` (Standard Vite config)
- **Core Business Logic**: 
  - `src/services/apiRestaurant.js` (Handles fetching menu/order data from the backend)
  - `src/services/apiGeocoding.js` (Handles reverse geocoding for addresses)
- **API Definitions**: Not centralized; defined within the service files.
- **Database Models**: N/A (Handled by the external API)

## High Level Architecture

### Technical Summary

The project is a partially implemented React Single Page Application (SPA) built with Vite. The current codebase consists of a disconnected set of UI components, some implemented API services, and a boilerplate entry point. The features described in the PRD are largely unimplemented, and the existing code is not yet integrated into a functional application.

### Actual Tech Stack (from package.json)

| Category  | Technology | Version | Notes                      |
| --------- | ---------- | ------- | -------------------------- |
| Runtime   | Node.js    | (implicit) | From `package.json` usage |
| Library   | React      | ^19.2.0 |                           |
| Build Tool| Vite       | ^7.2.4  | Configured in `vite.config.js` |
| Linter    | ESLint     | ^9.39.1 | Configured in `eslint.config.js`|

### Repository Structure Reality Check

- Type: Single-Application Repository
- Package Manager: npm (inferred from `package-lock.json`)
- Notable: A full feature-based directory structure (`src/features`, `src/services`, `src/ui`) exists, but the components within are mostly placeholders and are not wired together.

## Source Tree and Module Organization

### Project Structure (Actual)

```text
fast-pizza/
├── src/
│   ├── features/        # Feature-based components (mostly placeholders)
│   │   ├── Cart/
│   │   ├── Menu/
│   │   ├── Order/
│   │   └── User/
│   ├── services/        # API integration logic - THIS IS IMPLEMENTED
│   │   ├── apiGeocoding.js
│   │   └── apiRestaurant.js
│   ├── ui/              # Shared UI components (e.g., Home.jsx)
│   └── utils/           # Utility files (currently contains a misnamed geolocation helper)
│   ├── App.jsx          # CRITICAL: Default Vite boilerplate, not the real app layout
│   ├── main.jsx         # Application entry point
│   └── index.css
├── docs/                # Contains PRD and Project Brief
├── package.json         # Defines dependencies and scripts
└── vite.config.js       # Vite build configuration
```

### Key Modules and Their Purpose

- **`src/App.jsx`**: The main application component. **CRITICAL:** This file currently contains the default Vite counter boilerplate and does not reflect the application's intended structure. This is the primary reason the application is not functional.
- **`src/services/apiRestaurant.js`**: Implemented service to communicate with the `react-fast-pizza-api`. Contains functions to get menu/order data.
- **`src/services/apiGeocoding.js`**: Implemented service to communicate with the `bigdatacloud.net` API for reverse geocoding.
- **`src/utils/userSlice.js`**: **Misnamed file.** This is not a Redux slice. It contains helper functions (`getPosition`, `fetchAddress`) for using the browser's Geolocation API and the `apiGeocoding` service.
- **`src/features/*/*.jsx`**: Component files like `Cart.jsx` exist but are not functional. They use hardcoded data (`fakeCart`) and are not connected to the API services or application state.

## Data Models and APIs

### Data Models

There are no client-side data models. Data structures are implicitly defined by the responses from the external APIs.

### API Specifications

The application consumes two external REST APIs:

1.  **Fast React Pizza API**:
    - **Endpoint**: `https://react-fast-pizza-api.jonas.io/api`
    - **Usage**: Fetching menu, creating/fetching/updating orders.
    - **Implementation**: See `src/services/apiRestaurant.js`.

2.  **BigDataCloud Geocoding API**:
    - **Endpoint**: `https://api.bigdatacloud.net/data/reverse-geocode-client`
    - **Usage**: Converting latitude/longitude to a human-readable address.
    - **Implementation**: See `src/services/apiGeocoding.js`.

## Technical Debt and Known Issues

### Critical Technical Debt

1.  **Disconnected Entry Point**: `src/App.jsx` is the default Vite boilerplate. It does not contain any routing or layout structure, effectively preventing any of the implemented features from being displayed. This is the most critical issue.
2.  **Missing Dependencies**:
    - The code in `src/features/Cart/Cart.jsx` uses `<Link>`, which requires `react-router-dom`, but this package is **not** in `package.json`.
    - The PRD and file naming (`userSlice.js`) suggest an intent to use Redux, but `redux` and `@reduxjs/toolkit` are **not** in `package.json`.
3.  **Misleading File Name**: `src/utils/userSlice.js` is incorrectly named. It contains geolocation logic, not a Redux user slice. This will cause confusion for future developers.
4.  **Placeholder Components**: Most components in `src/features` are non-functional, using hardcoded data instead of fetching from the implemented services.

### Workarounds and Gotchas

- The application is not runnable in its current state beyond the boilerplate counter. A developer's first task would be to implement React Router and a proper `App.jsx` layout to begin rendering the feature components.

## Integration Points and External Dependencies

### External Services

| Service               | Purpose             | Integration Type | Key Files                               |
| --------------------- | ------------------- | ---------------- | --------------------------------------- |
| Fast React Pizza API  | Menu & Orders       | REST API         | `src/services/apiRestaurant.js`         |
| BigDataCloud API      | Reverse Geocoding   | REST API         | `src/services/apiGeocoding.js`          |

## Development and Deployment

### Local Development Setup

1.  Run `npm install` to install dependencies.
2.  Run `npm run dev` to start the development server.
3.  **Note**: This will only display the Vite boilerplate counter application found in `src/App.jsx`.

### Build and Deployment Process

- **Build Command**: `npm run build`
- **Deployment**: No deployment process is configured.

## Testing Reality

### Current Test Coverage

- There are no tests of any kind in the project.

### Running Tests

- No test runner is configured. The `package.json` does not contain a test script.

## Appendix - Useful Commands and Scripts

### Frequently Used Commands

```bash
npm run dev         # Start development server
npm run build       # Production build
npm run lint        # Run ESLint
```
