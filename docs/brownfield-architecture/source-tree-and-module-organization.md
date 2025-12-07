# Source Tree and Module Organization

## Project Structure (Actual)

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

## Key Modules and Their Purpose

- **`src/App.jsx`**: The main application component. **CRITICAL:** This file currently contains the default Vite counter boilerplate and does not reflect the application's intended structure. This is the primary reason the application is not functional.
- **`src/services/apiRestaurant.js`**: Implemented service to communicate with the `react-fast-pizza-api`. Contains functions to get menu/order data.
- **`src/services/apiGeocoding.js`**: Implemented service to communicate with the `bigdatacloud.net` API for reverse geocoding.
- **`src/utils/userSlice.js`**: **Misnamed file.** This is not a Redux slice. It contains helper functions (`getPosition`, `fetchAddress`) for using the browser's Geolocation API and the `apiGeocoding` service.
- **`src/features/*/*.jsx`**: Component files like `Cart.jsx` exist but are not functional. They use hardcoded data (`fakeCart`) and are not connected to the API services or application state.
