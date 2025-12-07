# 7. Epic 2: Core Ordering & Checkout

**Goal:** The primary objective of this epic is to transform the browsable menu into a fully transactional ordering system. Upon completion, a user will be able to add items to a shopping cart, manage the cart's contents, and successfully place a cash-on-delivery order by providing their details.

## Story 2.1: User and Cart State Management

*   **As a** Developer,
*   **I want** to set up centralized state management for user and cart data using Redux,
*   **so that** this data is consistently handled and accessible throughout the application.

**Acceptance Criteria:**
1.  Redux Toolkit is integrated into the project.
2.  A `userSlice` is created to store the customer's name. On the Home page, an input for the name is captured and stored in Redux.
3.  A `cartSlice` is created with actions to add items, remove items, adjust quantities, and clear the cart.
4.  The Redux store is correctly configured and provided to the React component tree.

## Story 2.2: Add Items to Cart Functionality

*   **As a** Customer,
*   **I want** to be able to add a pizza to my shopping cart directly from the menu,
*   **so that** I can easily select the items I wish to purchase.

**Acceptance Criteria:**
1.  The "Add to cart" button on the `MenuItem` component is now functional.
2.  Clicking the button dispatches an action to the `cartSlice`, adding the correct pizza to the cart state.
3.  The `CartOverview` component in the header updates immediately to reflect the new cart total and item count.
4.  If a user adds an item that is already in the cart, the quantity is increased, and controls for quantity adjustment appear on the `MenuItem`.

## Story 2.3: Cart View and Management

*   **As a** Customer,
*   **I want** to view the contents of my cart and be able to change item quantities or remove them,
*   **so that** I can review and finalize my selections before checking out.

**Acceptance Criteria:**
1.  A new `/cart` route and `Cart` component are created, accessible from the `CartOverview` header link.
2.  The `Cart` component lists all items, showing their name, quantity, and price.
3.  Each item in the list has functional buttons to increase, decrease, or remove it.
4.  A "Clear Cart" button is available to empty the entire cart with a single click.
5.  A "Proceed to order" link navigates the user to the checkout form.

## Story 2.4: Checkout Form and Order Placement

*   **As a** Customer,
*   **I want** to enter my delivery details and submit my order,
*   **so that** the restaurant can prepare and deliver my food.

**Acceptance Criteria:**
1.  A `/order/new` route and `CreateOrder` component display a checkout form.
2.  The form includes validated fields for Name, Phone Number, and Address. The Name field is pre-filled from Redux.
3.  The form uses a React Router `action` to handle the submission process.
4.  On submission, a `createOrder` service function is called with all required customer and cart data.
5.  While submitting, the form is disabled and a loading state is shown. Upon success, the Redux cart is cleared, and the user is redirected to their new order's status page.

## Story 2.5: GPS Address Population

*   **As a** Customer,
*   **I want** to press a button to automatically fill in my address using my device's location,
*   **so that** I can save time and avoid typing errors during checkout.

**Acceptance Criteria:**
1.  A "Get my position" button is present on the `CreateOrder` form.
2.  Clicking the button successfully prompts the user for location permission.
3.  If permission is granted, a service function is called to reverse-geocode the coordinates into a readable address.
4.  The "Address" field in the form is populated with the resulting address.
5.  If permission is denied or the lookup fails, a user-friendly error message is displayed.

## Story 2.6: Priority Order Surcharge

*   **As a** Customer,
*   **I want** to have the option to mark my order as "Priority" for faster delivery,
*   **so that** I can get my food more quickly if I'm in a hurry.

**Acceptance Criteria:**
1.  A checkbox or toggle is present on the checkout form to mark the order as "Priority."
2.  Checking this option displays the calculated priority fee (20% of the cart total).
3.  The final order payload sent to the API includes the priority status and the final price including the surcharge.
