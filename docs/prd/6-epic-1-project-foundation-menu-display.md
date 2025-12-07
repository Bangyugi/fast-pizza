# 6. Epic 1: Project Foundation & Menu Display

**Goal:** This epic's objective is to establish the complete technical foundation of the React application and deliver the initial, core user value: a visually polished and functional menu. Upon completion, a user will be able to visit the website, be greeted by a home page, navigate to the menu, and see a full list of pizzas with their details, including which items are sold out.

## Story 1.1: Project Scaffolding

*   **As a** Developer,
*   **I want** to initialize a new React project using Vite and configure it with Tailwind CSS,
*   **so that** I have a foundational, styled project structure ready for development.

**Acceptance Criteria:**
1.  A new React project is successfully created using the Vite build tool.
2.  Tailwind CSS is installed and correctly configured within the Vite project.
3.  The application runs without errors, and the default home page demonstrates that Tailwind's utility classes are successfully applied (e.g., a styled heading).

## Story 1.2: Basic Application Layout & Routing

*   **As a** Customer,
*   **I want** to see a consistent application layout with a header and main content area,
*   **so that** I can easily understand the site structure and navigate my journey.

**Acceptance Criteria:**
1.  React Router is installed and configured to handle client-side navigation.
2.  A primary `AppLayout` component is created which renders a header and a main content area for pages.
3.  The header prominently displays the company name, "Fast React Pizza Co."
4.  A placeholder for a cart summary/link is present in the header.
5.  A basic home route (`/`) is configured to render content inside the `AppLayout`.

## Story 1.3: Menu Data Fetching & Display

*   **As a** Customer,
*   **I want** to view the full list of available pizzas fetched from the menu,
*   **so that** I can decide what I want to order.

**Acceptance Criteria:**
11. A service function is created to fetch menu data from the "Fast React Pizza Co." API.
2.  A new route (`/menu`) is created and linked from the home page.
3.  The `/menu` route uses a React Router `loader` to fetch the menu data before the page renders.
4.  The `Menu` component successfully receives and displays a list of `MenuItem` components, one for each pizza.
5.  If the API fetch fails, a user-friendly error message is displayed on the page instead of the menu.

## Story 1.4: Individual Pizza Item Display

*   **As a** Customer,
*   **I want** to see the details of each pizza, including its name, ingredients, price, and availability,
*   **so that** I can make an informed choice about my order.

**Acceptance Criteria:**
1.  The `MenuItem` component correctly renders the pizza's image, name, ingredients, and unit price.
2.  If a pizza is marked as "sold out," its appearance is visually distinct (e.g., greyed out) and the price is replaced with the text "Sold Out."
3.  A non-functional "Add to cart" button is displayed on all available pizza items. This button will have no action in this story.
