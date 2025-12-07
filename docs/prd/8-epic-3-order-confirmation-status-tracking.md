# 8. Epic 3: Order Confirmation & Status Tracking

**Goal:** This epic focuses on the post-order experience, ensuring users have confidence their order was received and can track its status. Upon completion, the full end-to-end user journey will be complete, from browsing the menu to tracking a placed order.

## Story 3.1: Order Confirmation and Details Display

*   **As a** Customer,
*   **I want** to see a confirmation of my order with all its details immediately after placing it,
*   **so that** I am confident my order was received correctly and I know what to expect.

**Acceptance Criteria:**
1.  After a successful order submission, the user is redirected to a unique URL for their order (e.g., `/order/ABC123`).
2.  This order page uses a React Router `loader` to fetch and display the specific order's details using the ID from the URL.
3.  The page prominently displays the Order ID, estimated delivery time, final price, and a list of the items ordered.
4.  If the order ID is invalid or the order cannot be fetched, a user-friendly "Order Not Found" message is shown.

## Story 3.2: Order Status Lookup

*   **As a** Customer,
*   **I want** to look up my order status at any time using my order ID,
*   **so that** I can track the progress of my delivery.

**Acceptance Criteria:**
1.  A search input is available in the application's header allowing a user to enter an Order ID.
2.  Submitting the ID in the search input navigates the user to the corresponding order details page (`/order/:orderId`).
3.  The order page displays the current status of the order (e.g., "Preparing", "Out for delivery").

## Story 3.3: Post-Order Priority Update

*   **As a** Customer,
*   **I want** to be able to mark my existing order as "Priority" after I've already placed it,
*   **so that** I can speed up my delivery if my plans change.

**Acceptance Criteria:**
1.  On the order details page, if an order is not yet being prepared, a "Make Priority" button is visible.
2.  Clicking the button triggers an API call to update the order's priority status.
3.  The action is handled without a full page navigation (e.g., using `fetcher.Form` from React Router).
4.  Upon success, the order details on the page are re-validated and the UI updates to reflect the new priority status and adjusted final price.
5.  The "Make Priority" button is hidden if the order is already priority or has started preparation.