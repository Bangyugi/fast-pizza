# Quick Reference - Key Files and Entry Points

## Critical Files for Understanding the System

- **Main Entry**: `src/main.jsx` (Renders `App.jsx`, which is currently boilerplate code)
- **Configuration**: `vite.config.js` (Standard Vite config)
- **Core Business Logic**: 
  - `src/services/apiRestaurant.js` (Handles fetching menu/order data from the backend)
  - `src/services/apiGeocoding.js` (Handles reverse geocoding for addresses)
- **API Definitions**: Not centralized; defined within the service files.
- **Database Models**: N/A (Handled by the external API)
