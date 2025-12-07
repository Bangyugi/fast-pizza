# 4. Technical Assumptions

This section details the foundational technical choices and assumptions for the project, forming critical constraints for the architecture and development teams.

## 4.1. Repository Structure: Single-Application Repository

The project will reside within a single repository, containing only the frontend React application files. This aligns with the "standard Vite/React project structure" mentioned in the brief, implicitly not requiring a monorepo or polyrepo approach for this specific application.

## 4.2. Service Architecture: Monolithic SPA with External REST API

The application itself will be a Single Page Application (SPA), acting as a monolithic frontend client. It will consume data and services exclusively from an existing, external REST API for all backend operations (menu, orders, etc.). The SPA handles all presentation logic and client-side routing.

## 4.3. Testing Requirements: Unit + Integration Testing

The project will implement a combination of unit tests for individual components and utility functions, along with integration tests to ensure the correct interaction between components and with the external API. This approach balances thoroughness with development velocity for the MVP.

## 4.4. Additional Technical Assumptions and Requests

*   **Frontend Framework & Build Tool:** React with Vite.
*   **Routing Library:** React Router v6.
*   **State Management:** Redux for application-wide UI state (e.g., user preferences, cart status) and React Router Loaders/Actions for efficient remote data handling (e.g., menu, order details).
*   **Styling Framework:** Tailwind CSS for utility-first styling.
*   **API Availability:** A stable, well-documented, and performant REST API for "Fast React Pizza Co." is assumed to be fully available for menu and order management.
*   **Deployment:** The application is expected to be deployed as a static Single Page Application (SPA) to a modern web hosting service capable of serving static assets (e.g., Netlify, Vercel, AWS S3/CloudFront).
