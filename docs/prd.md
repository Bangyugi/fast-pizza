# Fast React Pizza Co. Product Requirements Document (PRD)

## 1. Goals and Background Context

### 1.1. Goals

*   Provide a fast, convenient, and seamless online ordering experience for customers.
*   Allow users to order without the friction of mandatory account creation.
*   Increase online order volume and improve order accuracy.
*   Establish a modern, efficient digital storefront for the brand.
*   Enable users to track the status of their order using a unique ID.
*   Provide an option for a "Priority" order with an associated fee.

### 1.2. Background Context

Fast React Pizza Co. aims to address common friction points in online food ordering. Customers are often deterred by slow, complex interfaces and the requirement to create user accounts, leading to abandoned carts and a poor experience. This project will create a streamlined, single-page web application that aligns with the brand's promise of speed and quality, allowing users to quickly browse the menu, customize their cart, and place a cash-on-delivery order by providing only essential contact and delivery information.

### 1.3. Change Log

| Date | Version | Description | Author |
| :--- | :--- | :--- | :--- |
| 2025-12-07 | 1.0 | Initial PRD draft created from Project Brief. | John (PM) |

## 2. Requirements

This section outlines the core functional and non-functional requirements derived from the project's goals and scope.

### 2.1. Functional Requirements

*   **FR1: Guest Checkout:** Users must be able to place an order by providing only their name to start, without requiring account creation or login.
*   **FR2: Dynamic Menu Display:** The application shall fetch and display the current pizza menu from a remote API, including indicators for "Sold Out" items.
*   **FR3: Cart Management:** Users shall be able to add items to their cart, adjust item quantities, and remove items from the cart.
*   **FR4: Order Placement:** The application shall provide a form for users to input their name, phone number, and delivery address to place an order.
*   **FR5: GPS Location Auto-fill:** Users shall have the option to auto-fill their delivery address using the browser's geolocation API.
*   **FR6: Priority Order Option:** Users shall be able to mark their order as "Priority" during placement, incurring a 20% surcharge.
*   **FR7: Order Status Tracking:** Users shall be able to retrieve and view the status of their order using a unique order ID provided upon order confirmation.
*   **FR8: Post-Order Priority Update:** After an order has been placed, users shall be able to update its status to "Priority" (with the associated surcharge).

### 2.2. Non-Functional Requirements

*   **NFR1: Responsiveness:** The application shall be fully responsive and optimized for modern web browsers (Chrome, Firefox, Safari, Edge) across various device sizes.
*   **NFR2: Performance:** The application shall be fast and responsive, ensuring efficient data loading using React Router's "Render-as-you-fetch" pattern to minimize perceived latency.
*   **NFR3: Technology Stack Adherence:** The frontend shall be developed using React (with Vite), React Router v6 for routing, Redux for global UI state, and Tailwind CSS for styling.
*   **NFR4: Architecture:** The application shall be implemented as a Single Page Application (SPA) that consumes a REST API for all data operations.
*   **NFR5: API Integration:** The application must seamlessly integrate with the existing "Fast React Pizza Co." REST API for menu retrieval and order management.
*   **NFR6: Account-less Experience:** The application shall not require user accounts, logins, or user profile management.
*   **NFR7: Payment Method:** All orders placed through the application are assumed to be cash-on-delivery; online payment processing is out of scope for the MVP.

## 3. User Interface Design Goals

This section outlines the high-level vision and goals for the application's user interface and experience.

### 3.1. Overall UX Vision

The user experience will be defined by speed and simplicity. We envision a clean, intuitive, and linear journey that guides the user from menu browsing to order confirmation with minimal friction and zero ambiguity. The interface should feel modern, fast, and highly responsive, reinforcing the "Fast React Pizza" brand identity.

### 3.2. Key Interaction Paradigms

*   **Single-Page Application (SPA) Model:** All interactions will occur within a single page-load, using modals or inline views for actions like viewing the cart or placing an order to maintain context and speed.
*   **Real-time Cart Updates:** The cart will update instantly without page reloads as users add, remove, or adjust item quantities.
*   **Direct Manipulation:** Users will directly interact with menu items to add them to the cart (e.g., a simple "+" button on each item).

### 3.3. Core Screens and Views

Conceptually, the user journey will be comprised of the following critical views:

*   **Menu View:** The primary screen displaying the full list of available pizzas and their status.
*   **Cart View:** A persistent but unobtrusive view of the current order (e.g., a sidebar or a modal) that can be accessed from anywhere.
*   **Checkout Form:** A simple, single-step form to collect the user's name, phone, and delivery address.
*   **Order Status/Confirmation View:** A final screen displaying the confirmed order details and the unique Order ID for tracking.

### 3.4. Accessibility: WCAG AA

To ensure broad usability, the application should adhere to Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards.

### 3.5. Branding

No specific branding elements or style guides have been provided. The design will be clean, modern, and focused on usability, using a color palette appropriate for a food service application until formal branding is supplied.

### 3.6. Target Device and Platforms: Web Responsive

The application must be fully responsive, providing a seamless experience on all modern web browsers across desktop, tablet, and mobile devices.

## 4. Technical Assumptions

This section details the foundational technical choices and assumptions for the project, forming critical constraints for the architecture and development teams.

### 4.1. Repository Structure: Single-Application Repository

The project will reside within a single repository, containing only the frontend React application files. This aligns with the "standard Vite/React project structure" mentioned in the brief, implicitly not requiring a monorepo or polyrepo approach for this specific application.

### 4.2. Service Architecture: Monolithic SPA with External REST API

The application itself will be a Single Page Application (SPA), acting as a monolithic frontend client. It will consume data and services exclusively from an existing, external REST API for all backend operations (menu, orders, etc.). The SPA handles all presentation logic and client-side routing.

### 4.3. Testing Requirements: Unit + Integration Testing

The project will implement a combination of unit tests for individual components and utility functions, along with integration tests to ensure the correct interaction between components and with the external API. This approach balances thoroughness with development velocity for the MVP.

### 4.4. Additional Technical Assumptions and Requests

*   **Frontend Framework & Build Tool:** React with Vite.
*   **Routing Library:** React Router v6.
*   **State Management:** Redux for application-wide UI state (e.g., user preferences, cart status) and React Router Loaders/Actions for efficient remote data handling (e.g., menu, order details).
*   **Styling Framework:** Tailwind CSS for utility-first styling.
*   **API Availability:** A stable, well-documented, and performant REST API for "Fast React Pizza Co." is assumed to be fully available for menu and order management.
*   **Deployment:** The application is expected to be deployed as a static Single Page Application (SPA) to a modern web hosting service capable of serving static assets (e.g., Netlify, Vercel, AWS S3/CloudFront).

## 5. Epic List

Here is the proposed list of epics for building the Fast React Pizza Co. application. Each epic represents a significant milestone that delivers a cohesive set of features and brings us closer to the final product.

*   **Epic 1: Project Foundation & Menu Display:** Establish the core project infrastructure, including the React application setup, routing, and styling, and deliver the ability for users to view the pizza menu fetched from the API.
*   **Epic 2: Core Ordering & Checkout:** Implement the complete ordering workflow, allowing users to add/manage items in their cart and successfully place an order through the guest checkout form.
*   **Epic 3: Order Confirmation & Status Tracking:** Complete the user journey by providing an order confirmation with a unique ID, and build the functionality for users to look up their order status.

## 6. Epic 1: Project Foundation & Menu Display

**Goal:** This epic's objective is to establish the complete technical foundation of the React application and deliver the initial, core user value: a visually polished and functional menu. Upon completion, a user will be able to visit the website, be greeted by a home page, navigate to the menu, and see a full list of pizzas with their details, including which items are sold out.

### Story 1.1: Project Scaffolding

*   **As a** Developer,
*   **I want** to initialize a new React project using Vite and configure it with Tailwind CSS,
*   **so that** I have a foundational, styled project structure ready for development.

**Acceptance Criteria:**
1.  A new React project is successfully created using the Vite build tool.
2.  Tailwind CSS is installed and correctly configured within the Vite project.
3.  The application runs without errors, and the default home page demonstrates that Tailwind's utility classes are successfully applied (e.g., a styled heading).

### Story 1.2: Basic Application Layout & Routing

*   **As a** Customer,
*   **I want** to see a consistent application layout with a header and main content area,
*   **so that** I can easily understand the site structure and navigate my journey.

**Acceptance Criteria:**
1.  React Router is installed and configured to handle client-side navigation.
2.  A primary `AppLayout` component is created which renders a header and a main content area for pages.
3.  The header prominently displays the company name, "Fast React Pizza Co."
4.  A placeholder for a cart summary/link is present in the header.
5.  A basic home route (`/`) is configured to render content inside the `AppLayout`.

### Story 1.3: Menu Data Fetching & Display

*   **As a** Customer,
*   **I want** to view the full list of available pizzas fetched from the menu,
*   **so that** I can decide what I want to order.

**Acceptance Criteria:**
11. A service function is created to fetch menu data from the "Fast React Pizza Co." API.
2.  A new route (`/menu`) is created and linked from the home page.
3.  The `/menu` route uses a React Router `loader` to fetch the menu data before the page renders.
4.  The `Menu` component successfully receives and displays a list of `MenuItem` components, one for each pizza.
5.  If the API fetch fails, a user-friendly error message is displayed on the page instead of the menu.

### Story 1.4: Individual Pizza Item Display

*   **As a** Customer,
*   **I want** to see the details of each pizza, including its name, ingredients, price, and availability,
*   **so that** I can make an informed choice about my order.

**Acceptance Criteria:**
1.  The `MenuItem` component correctly renders the pizza's image, name, ingredients, and unit price.
2.  If a pizza is marked as "sold out," its appearance is visually distinct (e.g., greyed out) and the price is replaced with the text "Sold Out."
3.  A non-functional "Add to cart" button is displayed on all available pizza items. This button will have no action in this story.

## 7. Epic 2: Core Ordering & Checkout

**Goal:** The primary objective of this epic is to transform the browsable menu into a fully transactional ordering system. Upon completion, a user will be able to add items to a shopping cart, manage the cart's contents, and successfully place a cash-on-delivery order by providing their details.

### Story 2.1: User and Cart State Management

*   **As a** Developer,
*   **I want** to set up centralized state management for user and cart data using Redux,
*   **so that** this data is consistently handled and accessible throughout the application.

**Acceptance Criteria:**
1.  Redux Toolkit is integrated into the project.
2.  A `userSlice` is created to store the customer's name. On the Home page, an input for the name is captured and stored in Redux.
3.  A `cartSlice` is created with actions to add items, remove items, adjust quantities, and clear the cart.
4.  The Redux store is correctly configured and provided to the React component tree.

### Story 2.2: Add Items to Cart Functionality

*   **As a** Customer,
*   **I want** to be able to add a pizza to my shopping cart directly from the menu,
*   **so that** I can easily select the items I wish to purchase.

**Acceptance Criteria:**
1.  The "Add to cart" button on the `MenuItem` component is now functional.
2.  Clicking the button dispatches an action to the `cartSlice`, adding the correct pizza to the cart state.
3.  The `CartOverview` component in the header updates immediately to reflect the new cart total and item count.
4.  If a user adds an item that is already in the cart, the quantity is increased, and controls for quantity adjustment appear on the `MenuItem`.

### Story 2.3: Cart View and Management

*   **As a** Customer,
*   **I want** to view the contents of my cart and be able to change item quantities or remove them,
*   **so that** I can review and finalize my selections before checking out.

**Acceptance Criteria:**
1.  A new `/cart` route and `Cart` component are created, accessible from the `CartOverview` header link.
2.  The `Cart` component lists all items, showing their name, quantity, and price.
3.  Each item in the list has functional buttons to increase, decrease, or remove it.
4.  A "Clear Cart" button is available to empty the entire cart with a single click.
5.  A "Proceed to order" link navigates the user to the checkout form.

### Story 2.4: Checkout Form and Order Placement

*   **As a** Customer,
*   **I want** to enter my delivery details and submit my order,
*   **so that** the restaurant can prepare and deliver my food.

**Acceptance Criteria:**
1.  A `/order/new` route and `CreateOrder` component display a checkout form.
2.  The form includes validated fields for Name, Phone Number, and Address. The Name field is pre-filled from Redux.
3.  The form uses a React Router `action` to handle the submission process.
4.  On submission, a `createOrder` service function is called with all required customer and cart data.
5.  While submitting, the form is disabled and a loading state is shown. Upon success, the Redux cart is cleared, and the user is redirected to their new order's status page.

### Story 2.5: GPS Address Population

*   **As a** Customer,
*   **I want** to press a button to automatically fill in my address using my device's location,
*   **so that** I can save time and avoid typing errors during checkout.

**Acceptance Criteria:**
1.  A "Get my position" button is present on the `CreateOrder` form.
2.  Clicking the button successfully prompts the user for location permission.
3.  If permission is granted, a service function is called to reverse-geocode the coordinates into a readable address.
4.  The "Address" field in the form is populated with the resulting address.
5.  If permission is denied or the lookup fails, a user-friendly error message is displayed.

### Story 2.6: Priority Order Surcharge

*   **As a** Customer,
*   **I want** to have the option to mark my order as "Priority" for faster delivery,
*   **so that** I can get my food more quickly if I'm in a hurry.

**Acceptance Criteria:**
1.  A checkbox or toggle is present on the checkout form to mark the order as "Priority."
2.  Checking this option displays the calculated priority fee (20% of the cart total).
3.  The final order payload sent to the API includes the priority status and the final price including the surcharge.

## 8. Epic 3: Order Confirmation & Status Tracking

**Goal:** This epic focuses on the post-order experience, ensuring users have confidence their order was received and can track its status. Upon completion, the full end-to-end user journey will be complete, from browsing the menu to tracking a placed order.

### Story 3.1: Order Confirmation and Details Display

*   **As a** Customer,
*   **I want** to see a confirmation of my order with all its details immediately after placing it,
*   **so that** I am confident my order was received correctly and I know what to expect.

**Acceptance Criteria:**
1.  After a successful order submission, the user is redirected to a unique URL for their order (e.g., `/order/ABC123`).
2.  This order page uses a React Router `loader` to fetch and display the specific order's details using the ID from the URL.
3.  The page prominently displays the Order ID, estimated delivery time, final price, and a list of the items ordered.
4.  If the order ID is invalid or the order cannot be fetched, a user-friendly "Order Not Found" message is shown.

### Story 3.2: Order Status Lookup

*   **As a** Customer,
*   **I want** to look up my order status at any time using my order ID,
*   **so that** I can track the progress of my delivery.

**Acceptance Criteria:**
1.  A search input is available in the application's header allowing a user to enter an Order ID.
2.  Submitting the ID in the search input navigates the user to the corresponding order details page (`/order/:orderId`).
3.  The order page displays the current status of the order (e.g., "Preparing", "Out for delivery").

### Story 3.3: Post-Order Priority Update

*   **As a** Customer,
*   **I want** to be able to mark my existing order as "Priority" after I've already placed it,
*   **so that** I can speed up my delivery if my plans change.

**Acceptance Criteria:**
1.  On the order details page, if an order is not yet being prepared, a "Make Priority" button is visible.
2.  Clicking the button triggers an API call to update the order's priority status.
3.  The action is handled without a full page navigation (e.g., using `fetcher.Form` from React Router).
4.  Upon success, the order details on the page are re-validated and the UI updates to reflect the new priority status and adjusted final price.
5.  The "Make Priority" button is hidden if the order is already priority or has started preparation.