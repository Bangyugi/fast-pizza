# 2. Requirements

This section outlines the core functional and non-functional requirements derived from the project's goals and scope.

## 2.1. Functional Requirements

*   **FR1: Guest Checkout:** Users must be able to place an order by providing only their name to start, without requiring account creation or login.
*   **FR2: Dynamic Menu Display:** The application shall fetch and display the current pizza menu from a remote API, including indicators for "Sold Out" items.
*   **FR3: Cart Management:** Users shall be able to add items to their cart, adjust item quantities, and remove items from the cart.
*   **FR4: Order Placement:** The application shall provide a form for users to input their name, phone number, and delivery address to place an order.
*   **FR5: GPS Location Auto-fill:** Users shall have the option to auto-fill their delivery address using the browser's geolocation API.
*   **FR6: Priority Order Option:** Users shall be able to mark their order as "Priority" during placement, incurring a 20% surcharge.
*   **FR7: Order Status Tracking:** Users shall be able to retrieve and view the status of their order using a unique order ID provided upon order confirmation.
*   **FR8: Post-Order Priority Update:** After an order has been placed, users shall be able to update its status to "Priority" (with the associated surcharge).

## 2.2. Non-Functional Requirements

*   **NFR1: Responsiveness:** The application shall be fully responsive and optimized for modern web browsers (Chrome, Firefox, Safari, Edge) across various device sizes.
*   **NFR2: Performance:** The application shall be fast and responsive, ensuring efficient data loading using React Router's "Render-as-you-fetch" pattern to minimize perceived latency.
*   **NFR3: Technology Stack Adherence:** The frontend shall be developed using React (with Vite), React Router v6 for routing, Redux for global UI state, and Tailwind CSS for styling.
*   **NFR4: Architecture:** The application shall be implemented as a Single Page Application (SPA) that consumes a REST API for all data operations.
*   **NFR5: API Integration:** The application must seamlessly integrate with the existing "Fast React Pizza Co." REST API for menu retrieval and order management.
*   **NFR6: Account-less Experience:** The application shall not require user accounts, logins, or user profile management.
*   **NFR7: Payment Method:** All orders placed through the application are assumed to be cash-on-delivery; online payment processing is out of scope for the MVP.
