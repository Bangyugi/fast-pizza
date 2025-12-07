# Technical Debt and Known Issues

## Critical Technical Debt

1.  **Disconnected Entry Point**: `src/App.jsx` is the default Vite boilerplate. It does not contain any routing or layout structure, effectively preventing any of the implemented features from being displayed. This is the most critical issue.
2.  **Missing Dependencies**:
    - The code in `src/features/Cart/Cart.jsx` uses `<Link>`, which requires `react-router-dom`, but this package is **not** in `package.json`.
    - The PRD and file naming (`userSlice.js`) suggest an intent to use Redux, but `redux` and `@reduxjs/toolkit` are **not** in `package.json`.
3.  **Misleading File Name**: `src/utils/userSlice.js` is incorrectly named. It contains geolocation logic, not a Redux user slice. This will cause confusion for future developers.
4.  **Placeholder Components**: Most components in `src/features` are non-functional, using hardcoded data instead of fetching from the implemented services.

## Workarounds and Gotchas

- The application is not runnable in its current state beyond the boilerplate counter. A developer's first task would be to implement React Router and a proper `App.jsx` layout to begin rendering the feature components.
