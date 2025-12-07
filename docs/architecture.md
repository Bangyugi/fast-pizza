# Fast Pizza Frontend Architecture Document

## Template and Framework Selection

Reviewing the current project structure, it appears this is a React project initialized with Vite, given the presence of `vite.config.js`, `index.html`, `main.jsx`, `App.jsx`, and `index.css` in the `src` directory. This indicates that the foundational framework is **React** and the build tool/starter template is **Vite**.

This aligns with a modern, fast development setup for React applications. Vite offers significantly faster cold start times and hot module replacement compared to older tools like Create React App.

**Rationale:**
*   **Vite as Build Tool/Starter:** The file structure strongly suggests Vite. This provides a pre-configured development environment with fast refresh and optimized builds.
*   **React as UI Library:** The use of `.jsx` files and standard React component patterns points to React as the primary UI library.

We will proceed with the understanding that this project is based on **React with Vite**. This will guide subsequent architectural decisions to align with Vite/React best practices.

### Change Log

| Date | Version | Description | Author |
| :--- | :------ | :---------- | :----- |
| 2025-12-08 | 1.0 | Initial draft, identified React with Vite as the base framework. | Winston (Architect) |

## Frontend Tech Stack

This section outlines the core technologies used in the frontend. Based on our current understanding that this project is built with **React and Vite**, here's an initial proposal for the technology stack. This table aims to align with common practices for a React/Vite application.

**Rationale for proposed choices:**

*   **Framework (React):** This is established from the project's existing files (`.jsx`, `App.jsx`, etc.). It's a widely adopted, component-based library known for its declarative UI and strong community support.
*   **UI Library (React):** While a separate UI library like Material UI or Ant Design could be chosen, for a new project, starting with React itself as the UI library is pragmatic. Specific UI component libraries can be integrated as needed.
*   **State Management (React Context/Redux Toolkit):** `userSlice.js` in `src/utils` suggests a Redux-like pattern, likely Redux Toolkit, which often uses React Context under the hood for providers. This is a robust solution for global state management, especially in larger applications.
*   **Routing (React Router):** This is the de-facto standard for client-side routing in React applications, offering declarative navigation and a rich API.
*   **Build Tool (Vite):** Already identified as the project's build tool. Its speed and modern features are a significant advantage.
*   **Styling (CSS Modules/Tailwind CSS):** The presence of `index.css` suggests a global CSS approach, but React projects often evolve to more encapsulated styling. Given modern trends, a combination of CSS Modules for component-specific styles and Tailwind CSS for utility-first styling is a strong, scalable approach.
*   **Testing (Vitest/React Testing Library):** Vitest is a fast, Vite-native test runner, while React Testing Library is the recommended tool for testing React components in a way that encourages good testing practices (testing user behavior, not implementation details).
*   **Component Library (None initially):** Similar to UI Library, a dedicated component library is not assumed initially but can be integrated.
*   **Form Handling (React Hook Form/Formik):** For complex forms, a dedicated library like React Hook Form or Formik simplifies state management, validation, and submission. React Hook Form is generally preferred for its performance and reduced re-renders.
*   **Animation (Framer Motion/React Spring):** These libraries provide powerful and performant animation capabilities for React applications.
*   **Dev Tools (React DevTools/Vite Inspector):** Essential browser extensions and built-in Vite tools for debugging and inspecting React components and application state.

---

### Technology Stack Table

| Category | Technology | Version | Purpose | Rationale |
| :------- | :--------- | :------ | :------ | :-------- |
| Framework | React | ^18.2.0 | Core UI Development | Established project framework, component-based, large ecosystem. |
| UI Library | React | ^18.2.0 | Foundational UI Components | Direct use of React for UI construction, flexible for future specialized libraries. |
| State Management | Redux Toolkit / React Context | ^1.x / (Built-in) | Application State Handling | Robust global state management; hinted by `userSlice.js`. |
| Routing | React Router | ^6.x | Client-Side Navigation | Standard and flexible routing for React SPAs. |
| Build Tool | Vite | ^5.x | Fast Development & Bundling | Current project setup; fast HMR and optimized builds. |
| Styling | CSS Modules / Tailwind CSS | (N/A) | Component-Scoped Styles & Utility-First CSS | Encapsulated styles and efficient utility classes for rapid UI development. |
| Testing | Vitest / React Testing Library | ^1.x / ^14.x | Unit/Integration Testing | Fast, Vite-native runner for component testing focused on user behavior. |
| Component Library | (To be determined) | (N/A) | Reusable UI Components | To be chosen based on specific design system needs (e.g., Material UI, Ant Design). |
| Form Handling | React Hook Form | ^7.x | Efficient Form Management | High-performance solution for complex forms and validation. |
| Animation | Framer Motion | ^11.x | Declarative Animations | Powerful, declarative animation library for smooth UI interactions. |
| Dev Tools | React DevTools / Vite Inspector | (Browser Ext) | Debugging & Inspection | Essential tools for development, debugging, and performance profiling. |

## Project Structure

A well-organized project structure is critical for maintainability and scalability. Based on the existing `src/features` directory, I propose we adopt and formalize a "feature-sliced" design. This approach groups code by business domain (feature) rather than by file type (e.g., all components in one folder, all hooks in another).

**Rationale for Feature-Sliced Structure:**

*   **High Cohesion:** All files related to a single feature (e.g., `Cart`, `Order`) are located together, making the feature self-contained and easier to understand.
*   **Low Coupling:** Features are isolated from each other, reducing the risk that a change in one feature will break another.
*   **Scalability:** It's easy to add or remove features without disturbing the rest of the application.
*   **Developer Experience:** Finding files is intuitive; you look in the folder for the feature you're working on.

---

### Proposed Project Structure:

```plaintext
/src
├── assets/         # Static assets like images, fonts, etc.
│
├── components/     # Shared, reusable, "dumb" UI components (e.g., Button, Input, Modal)
│   ├── Button.jsx
│   └── Input.jsx
│
├── config/         # Project-level configuration (e.g., Firebase config, i18n setup)
│   └── index.js
│
├── features/       # Feature-sliced modules, each representing a business domain
│   ├── cart/
│   │   ├── Cart.jsx            # Main view component for the cart feature
│   │   ├── CartItem.jsx        # Component for a single item in the cart
│   │   ├── cartSlice.js        # Redux Toolkit slice for cart state management
│   │   └── index.js            # Entry point for the cart feature, exports Cart component
│   │
│   ├── order/
│   │   ├── CreateOrder.jsx     # View component for creating an order
│   │   ├── Order.jsx           # View component for displaying an order
│   │   ├── orderAPI.js         # API service functions related to orders
│   │   └── orderSlice.js       # Redux Toolkit slice for order state
│   │
│   └── ... (other features like 'menu', 'user', etc.)
│
├── hooks/          # Custom, reusable React hooks (e.g., useLocalStorage, useDebounce)
│   └── useDebounce.js
│
├── lib/            # External library configurations or wrappers (e.g., axios instance)
│   └── axios.js
│
├── pages/          # Top-level page components, composed of feature components
│   ├── HomePage.jsx
│   ├── CartPage.jsx
│   └── OrderPage.jsx
│
├── services/       # Generic API services not tied to a specific feature
│   └── apiGeocoding.js
│
├── store/          # Global Redux store configuration
│   └── store.js            # Global store configuration, combines all slices
│
├── styles/         # Global styles, variables, and themes
│   ├── main.css
│   └── _variables.css
│
├── types/          # Shared TypeScript type definitions
│   └── index.ts
│
├── utils/          # Utility functions, helpers that are pure and reusable
│   └── helpers.js
│
├── App.jsx         # Main application component, handles routing
├── main.jsx        # Application entry point
└── index.css       # Global styles entry point (often imports from styles/)
```

## Component Standards

Defining clear standards for creating and naming components is essential for a clean and maintainable codebase. These rules ensure that any developer can quickly understand a component's purpose and how to use it.

**Rationale for these standards:**

*   **Consistency:** A uniform component structure and naming scheme make the codebase predictable and easier to navigate.
*   **Readability:** The template encourages clear prop definition and separation of concerns, making the component's API and rendering logic easy to grasp.
*   **Maintainability:** PascalCase for components and camelCase for files and functions are established conventions in the React ecosystem, reducing cognitive load. Grouping related files (component, styles, tests) with the same base name makes them easy to locate and manage.

---

### Component Template

Here is a minimal but complete template for a new React component. It uses modern functional component syntax with hooks and JSDoc for prop-typing, which provides editor support without requiring a full TypeScript setup.

```typescript
// src/components/MyComponent.jsx

import React from 'react';
import PropTypes from 'prop-types';
import './MyComponent.css'; // Optional: Component-specific stylesheet

/**
 * A brief description of what this component does.
 * It can span multiple lines.
 *
 * @param {object} props - The props for the component.
 * @param {string} props.title - The title to display in the component.
 * @param {() => void} props.onClick - The function to call when the button is clicked.
 * @param {React.ReactNode} props.children - The content to render inside the component.
 */
function MyComponent({ title, onClick, children }) {
  // State and hooks can be defined here
  // const [count, setCount] = useState(0);

  // Memoized values or functions
  // const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

  return (
    <div className="my-component">
      <h2>{title}</h2>
      {children}
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}

// Define the prop types for the component for runtime validation
MyComponent.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
};

// Optional: Define default props
MyComponent.defaultProps = {
  children: null,
};

export default MyComponent;
```

### Naming Conventions

| Element Type | Convention | Example | Notes |
| :--- | :--- | :--- | :--- |
| **Component File** | PascalCase | `MyComponent.jsx` | File name matches the component name. |
| **Component Name** | PascalCase | `function MyComponent() {}` | Standard React convention. |
| **Hook File/Function** | camelCase, `use` prefix | `useDebounce.js` | Standard for custom hooks. |
| **Context** | PascalCase, `Context` suffix | `AuthContext.js` | Clearly identifies it as React Context. |
| **Service/API File** | camelCase, `API` or `Service` suffix | `orderAPI.js` | Groups API-related functions. |
| **Redux Slice** | camelCase, `Slice` suffix | `cartSlice.js` | Convention for Redux Toolkit slices. |
| **Test File** | Same as source, `.test.` infix | `MyComponent.test.jsx` | Colocates tests with the component. |
| **Style Sheet** | Same as source, `.css` suffix | `MyComponent.css` | For component-specific styles. |

## State Management

Effective state management is crucial for an application's predictability and scalability. Based on the presence of `userSlice.js` and our chosen tech stack, we will standardize on **Redux Toolkit** as our global state management solution. For local or component-level state, we will use React's built-in hooks (`useState`, `useReducer`).

**Rationale for this approach:**

*   **Redux Toolkit:** It is the official, recommended way to write Redux logic. It simplifies store setup, eliminates boilerplate code for writing reducers, and has built-in support for asynchronous logic with `createAsyncThunk`.
*   **Feature-Sliced Slices:** Placing each state slice within its corresponding feature folder (`src/features/cart/cartSlice.js`) keeps state logic colocated with the UI and business logic that uses it. This reinforces the modularity of our feature-sliced architecture.
*   **Centralized Store:** A single, global store configured in `src/store/store.js` provides a single source of truth for the entire application, which simplifies debugging and data flow.

---

### Store Structure

This structure separates the global store configuration from the feature-specific state logic.

```plaintext
/src
├── features/
│   ├── cart/
│   │   ├── cartSlice.js    # State logic for the cart
│   │   └── ...
│   │
│   └── user/
│       ├── userSlice.js    # State logic for the user
│       └── ...
│
└── store/
    └── store.js            # Global store configuration, combines all slices
```

### State Management Template (Redux Toolkit Slice)

Here is a template for a typical Redux Toolkit slice. It includes an initial state, a synchronous reducer, and an asynchronous thunk for fetching data.

```typescript
// src/features/cart/cartSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiFetchCartItems } from './cartAPI'; // Assumes an API service file

/**
 * Async thunk for fetching cart items from the server.
 * A thunk is a function that can contain async logic and dispatch other actions.
 */
export const fetchCartItems = createAsyncThunk(
  'cart/fetchItems',
  async (userId, { rejectWithValue }) => {
    try {
      const items = await apiFetchCartItems(userId);
      return items;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

/**
 * The initial state for the cart slice.
 */
const initialState = {
  items: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  // Reducers for synchronous actions
  reducers: {
    addItem(state, action) {
      // Redux Toolkit allows us to write "mutating" logic in reducers.
      // It doesn't actually mutate the state because it uses Immer under the hood.
      state.items.push(action.payload);
    },
    removeItem(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    clearCart(state) {
      state.items = [];
    },
  },
  // Extra reducers for handling actions from async thunks or other slices
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItems.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

// Export the actions for use in components
export const { addItem, removeItem, clearCart } = cartSlice.actions;

// Export the reducer to be added to the store
export default cartSlice.reducer;
```

## API Integration

A clean and consistent approach to API communication is vital for separating data-fetching logic from UI components. We will define a pattern for API services that handle all HTTP communication, error handling, and data transformation.

**Rationale for this approach:**

*   **Separation of Concerns:** API services abstract away the details of network requests, endpoints, and data shaping. Components remain clean and focused on rendering UI.
*   **Reusability:** A single function to fetch user data (`getUser`) can be created once in the user service and reused across multiple components.
*   **Centralized Configuration:** Using a configured client instance (like Axios) allows us to centrally manage base URLs, headers (e.g., for authentication tokens), and global error handling (e.g., logging or redirecting on a 401 Unauthorized response). This is much more efficient than repeating this configuration for every `fetch` call.

---

### Service Template (using `fetch`)

For simple applications or features, using the browser's native `fetch` API within a service module is sufficient. This template includes robust error handling.

```typescript
// src/features/order/orderAPI.js

const API_URL = 'https://api.example.com';

/**
 * A generic helper function to handle fetch responses and errors.
 * @param {Response} response - The response from a fetch call.
 */
async function handleResponse(response) {
  if (response.ok) {
    // If the response is a 204 No Content, return null
    if (response.status === 204) {
      return null;
    }
    return response.json();
  } else {
    // Handle HTTP errors
    const errorData = await response.json().catch(() => ({ message: 'An unknown error occurred' }));
    const error = new Error(errorData.message || 'Something went wrong');
    error.status = response.status;
    throw error;
  }
}

/**
 * Fetches an order by its ID.
 * @param {string} orderId - The ID of the order to fetch.
 * @returns {Promise<object>} The order data.
 */
export async function getOrder(orderId) {
  const response = await fetch(`${API_URL}/orders/${orderId}`);
  return handleResponse(response);
}

/**
 * Creates a new order.
 * @param {object} orderData - The data for the new order.
 * @returns {Promise<object>} The newly created order data.
 */
export async function createOrder(orderData) {
  const response = await fetch(`${API_URL}/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // 'Authorization': `Bearer ${token}` // Example for auth
    },
    body: JSON.stringify(orderData),
  });
  return handleResponse(response);
}
```

### API Client Configuration (using `axios`)

For more complex applications, using a library like `axios` is highly recommended. It simplifies adding interceptors for handling authentication and errors globally.

**1. Create a configured client instance:**

```typescript
// src/lib/apiClient.js

import axios from 'axios';
import { store } from '../store/store'; // To access global state if needed

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // Use environment variables
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor: Injects the auth token into every outgoing request
apiClient.interceptors.request.use(
  (config) => {
    // const token = store.getState().auth.token; // Example of getting token from Redux
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor: Handles global errors, like 401 for re-authentication
apiClient.interceptors.response.use(
  (response) => {
    return response.data; // Return data directly
  },
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access, e.g., redirect to login
      console.error('Unauthorized, redirecting to login...');
      // window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default apiClient;
```

**2. Use the client in a service file:**

```typescript
// src/features/order/orderAPI.js (axios version)
import apiClient from '../../lib/apiClient';

export const getOrder = (orderId) => {
  return apiClient.get(`/orders/${orderId}`);
};

export const createOrder = (orderData) => {
  return apiClient.post('/orders', orderData);
};
```

## Routing

A clear and scalable routing setup is the backbone of a single-page application (SPA). We will use **React Router v6**, the standard for routing in React, leveraging its latest data-centric features for a modern and efficient configuration.

**Rationale for this approach:**

*   **`createBrowserRouter`:** This is the recommended router for all new web projects using React Router. It enables modern features like data loading, error handling, and more.
*   **Lazy Loading:** Wrapping page components with `React.lazy()` and a `Suspense` fallback is a critical performance optimization. It splits the code by route, so users only download the code for the page they are visiting, resulting in faster initial load times.
*   **Protected Routes:** A dedicated `<ProtectedRoute>` component provides a reusable and declarative way to secure parts of the application that require authentication, redirecting unauthorized users to a login page. This centralizes access control logic.
*   **Error Handling:** By defining an `errorElement` on our routes, we can gracefully handle unexpected errors during rendering or data loading, preventing the user from seeing a blank white screen.

---

### Route Configuration

We will define the routes in `App.jsx` using `createBrowserRouter` and the `RouterProvider`.

**1. Main Router Configuration (`App.jsx`)**

This file will contain the top-level routing structure, including lazy-loaded pages and protected routes.

```typescript
// src/App.jsx

import React, { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AppLayout from './ui/AppLayout'; // A layout component with header, footer, etc.
import Loader from './ui/Loader'; // A simple loading spinner component
import Error from './ui/Error'; // A generic error component

// Import protected route utility
import ProtectedRoute from './ui/ProtectedRoute';

// Lazily load page components for code-splitting
const HomePage = React.lazy(() => import('./pages/HomePage'));
const MenuPage = React.lazy(() => import('./pages/MenuPage'));
const CartPage = React.lazy(() => import('./pages/CartPage'));
const CreateOrderPage = React.lazy(() => import('./pages/CreateOrderPage'));
const OrderPage = React.lazy(() => import('./pages/OrderPage'));
const LoginPage = React.lazy(() => import('./pages/LoginPage'));

const router = createBrowserRouter([
  {
    element: <AppLayout />, // A layout component wraps all pages
    errorElement: <Error />, // Global error boundary for routing errors
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/menu',
        element: <MenuPage />,
      },
      {
        path: '/cart',
        element: <CartPage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      // --- Protected Routes ---
      {
        path: '/order/new',
        element: (
          <ProtectedRoute>
            <CreateOrderPage />
          </ProtectedRoute>
        ),
      },
      {
        path: '/order/:orderId',
        element: (
          <ProtectedRoute>
            <OrderPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
```

**2. Protected Route Component (`ProtectedRoute.jsx`)**

This component checks for an authenticated user and redirects if they are not logged in.

```typescript
// src/ui/ProtectedRoute.jsx

import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getUser } from '../features/user/userSlice'; // Example selector

function ProtectedRoute({ children }) {
  // const user = useSelector(getUser); // Example: Get user from Redux state
  const isAuthenticated = true; // Replace with actual auth logic
  const location = useLocation();

  if (!isAuthenticated) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to. This allows us to send them along to that page after they login.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default ProtectedRoute;
```

## Styling Guidelines

A consistent and scalable styling strategy is key to building a beautiful and maintainable UI. We will adopt a hybrid approach that combines the rapid development of a utility-first framework with the power of standard CSS for custom components and global theme management.

**Rationale for this approach:**

*   **Tailwind CSS (Utility-First):** Tailwind provides a comprehensive set of pre-built utility classes (like `flex`, `pt-4`, `text-center`) that can be composed directly in your markup. This dramatically speeds up UI development, enforces design system consistency, and avoids the need to write custom CSS for every small style change.
*   **CSS Custom Properties (Variables):** Using CSS variables for our core design tokens (colors, spacing, fonts) provides a single source of truth. It's framework-agnostic, works perfectly with Tailwind's theme configuration, and makes implementing features like dark mode trivial.
*   **Plain CSS for Custom Components:** For complex components or styles that can't be expressed with utility classes, we will fall back to standard CSS files (e.g., `MyComponent.css`). This gives us the full power of CSS when we need it without cluttering our main stylesheets.

---

### Styling Approach

1.  **Primary Method: Tailwind CSS**
    *   Use Tailwind utility classes for all layout, color, spacing, and typography needs directly in your JSX.
    *   **Example:** `<div className="flex items-center p-4 bg-blue-500 rounded-lg">...</div>`

2.  **Configuration: `tailwind.config.js`**
    *   Configure Tailwind to use our CSS theme variables, ensuring it aligns with our design system.
    *   **Example:**
        ```javascript
        // tailwind.config.js
        module.exports = {
          theme: {
            extend: {
              colors: {
                primary: 'var(--color-primary)',
                'primary-hover': 'var(--color-primary-hover)',
              },
              spacing: {
                sm: 'var(--spacing-sm)',
              }
            },
          },
        };
        ```

3.  **Secondary Method: Custom CSS**
    *   For bespoke component styles that can't be achieved with utilities, create a separate CSS file and import it into the component.
    *   **Example:**
        ```css
        /* src/components/ComplexChart.css */
        .chart-container {
          /* Custom styles here */
        }
        ```

### Global Theme Variables

This file (`src/styles/theme.css` or similar) will be the single source of truth for all design tokens and will be imported into our main `index.css`.

```css
/* src/styles/theme.css */

:root {
  /* --- Colors (Light Mode) --- */
  --color-primary: #3b82f6; /* blue-500 */
  --color-primary-hover: #2563eb; /* blue-600 */
  --color-secondary: #6b7280; /* gray-500 */
  --color-text: #1f2937; /* gray-800 */
  --color-background: #ffffff;
  --color-surface: #f9fafb; /* gray-50 */
  --color-error: #ef4444; /* red-500 */
  --color-success: #22c55e; /* green-500 */

  /* --- Typography --- */
  --font-family-sans: 'Inter', sans-serif;
  --font-size-base: 16px;
  --line-height-base: 1.5;

  /* --- Spacing --- */
  /* Following a 4px grid system */
  --spacing-xs: 4px;   /* 0.25rem */
  --spacing-sm: 8px;   /* 0.5rem */
  --spacing-md: 16px;  /* 1rem */
  --spacing-lg: 24px;  /* 1.5rem */
  --spacing-xl: 32px;  /* 2rem */
  --spacing-2xl: 48px; /* 3rem */

  /* --- Borders & Shadows --- */
  --border-radius: 8px; /* 0.5rem */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
}

/* --- Dark Mode --- */
/*
  Can be activated with a class on the `html` tag, e.g., <html class="dark">
  Or with a media query: @media (prefers-color-scheme: dark) { :root { ... } }
*/
.dark {
  --color-primary: #60a5fa; /* blue-400 */
  --color-primary-hover: #93c5fd; /* blue-300 */
  --color-text: #f9fafb; /* gray-50 */
  --color-background: #1f2937; /* gray-800 */
  --color-surface: #374151; /* gray-700 */
}
```

## Testing Requirements

A solid testing strategy ensures our application is reliable, and robust, and prevents regressions. We will use **Vitest** as our test runner for its speed and seamless integration with Vite, and **React Testing Library** to write tests that resemble how users interact with our application.

**Rationale for this approach:**

*   **Vitest:** It's a modern, fast, and Vite-native test framework. Its watch mode is incredibly fast, and it shares a similar API to Jest, making it familiar to many developers.
*   **React Testing Library (RTL):** RTL encourages testing application behavior rather than implementation details. This leads to more resilient tests that don't break when you refactor a component's internal logic. The guiding principle is: "The more your tests resemble the way your software is used, the more confidence they can give you."
*   **User Event Library:** Paired with RTL, `@testing-library/user-event` provides a more realistic way to simulate user interactions like typing, clicking, and hovering.

---

### Component Test Template

This template demonstrates how to test a React component's rendering, user interaction, and props. The test file should be colocated with the component it's testing.

```typescript
// src/components/MyComponent.test.jsx

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';

import MyComponent from './MyComponent';

// Test suite for MyComponent
describe('MyComponent', () => {
  // Test case 1: It should render the title and children correctly
  it('should render the title and children', () => {
    const titleText = 'Test Title';
    const childText = 'Hello World';

    render(
      <MyComponent title={titleText} onClick={() => {}}>
        <p>{childText}</p>
      </MyComponent>
    );

    // Assert: Check if the title is in the document
    expect(screen.getByRole('heading', { name: titleText })).toBeInTheDocument();

    // Assert: Check if the children are rendered
    expect(screen.getByText(childText)).toBeInTheDocument();
  });

  // Test case 2: It should call the onClick handler when the button is clicked
  it('should call onClick when the button is clicked', async () => {
    const user = userEvent.setup();
    const mockOnClick = vi.fn(); // Create a mock function (spy)

    render(<MyComponent title="Click Test" onClick={mockOnClick} />);

    // Arrange: Get the button
    const button = screen.getByRole('button', { name: /click me/i });

    // Act: Simulate a user click
    await user.click(button);

    // Assert: Check if the mock function was called exactly once
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
```

### Testing Best Practices

1.  **Unit Tests**: Test individual components, hooks, and utility functions in isolation.
2.  **Integration Tests**: Test how multiple components interact with each other. This is the sweet spot for React Testing Library.
3.  **E2E Tests**: Test critical user flows from end-to-end in a real browser (using a tool like Cypress or Playwright).
4.  **Coverage Goals**: Aim for a reasonable code coverage goal (e.g., 80%), but focus on testing critical paths rather than just the number.
5.  **Test Structure**: Follow the "Arrange, Act, Assert" pattern for clear and readable tests.
6.  **Mock External Dependencies**: Isolate your tests by mocking API calls, routing, and global state where appropriate.

## Environment Configuration

Managing environment variables correctly is essential for security and for allowing the application to behave differently across various environments (development, staging, production). Since this project uses Vite, we will follow its conventions for handling environment variables.

**Rationale for this approach:**

*   **Security:** Vite, by default, only exposes environment variables prefixed with `VITE_` to your client-side code. This is a crucial security feature that prevents accidentally leaking sensitive keys (like server-side API keys) to the browser.
*   **Vite Convention:** Using `.env` files is a standard way to manage environment-specific variables. Vite has built-in support for loading these files (`.env`, `.env.local`, `.env.production`).
*   **Developer Experience:** A `.env.example` file serves as a template, immediately showing other developers what variables are required to run the project. They can copy this file to `.env` and fill in their own values without committing sensitive information to the repository.
*   **Accessibility:** Vite makes these variables available on the special `import.meta.env` object, which is a modern and standard way to access them.

---

### Environment Variable Files

1.  **`.env`**: (This file **should be in `.gitignore`** and NOT committed)
    *   This is where developers store their local, private keys and variables.

    ```ini
    # .env - Local and private variables. DO NOT COMMIT.
    VITE_API_BASE_URL=http://localhost:3000/api
    VITE_GOOGLE_MAPS_API_KEY=AIzaSy... (Your personal key)
    ```

2.  **`.env.example`**: (This file **should be committed** to the repository)
    *   This file serves as a template for other developers. It shows which variables are needed but contains no secret values.

    ```ini
    # .env.example - Copy this to .env and fill in your values.
    VITE_API_BASE_URL=
    VITE_GOOGLE_MAPS_API_KEY=
    ```

### Naming and Usage

*   **Prefix:** All variables that you want to be accessible in the client-side code **MUST** be prefixed with `VITE_`.
*   **Access in Code:** You can access these variables anywhere in your `src` code using the `import.meta.env` object.

**Example of common variables:**

| Variable Name | Example Value | Purpose |
| :--- | :--- | :--- |
| `VITE_API_BASE_URL` | `https://api.pizzashop.com` | The base URL for all API requests. |
| `VITE_SENTRY_DSN` | `https://o....@....sentry.io/...` | Public key for an error tracking service like Sentry. |
| `VITE_GOOGLE_MAPS_API_KEY`| `AIzaSy...` | Public API key for Google Maps JavaScript API. |

**Example of accessing in code:**

```javascript
// src/lib/apiClient.js
import axios from 'axios';

const apiClient = axios.create({
  // Access the environment variable here
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export default apiClient;
```

## Frontend Developer Standards

### Critical Coding Rules

These are non-negotiable rules for all frontend code. They are designed to prevent common bugs, improve performance, and ensure the codebase remains maintainable as it grows.

**Rationale for these rules:**

*   **Predictability & Stability:** Rules like "No direct DOM manipulation" and "Data flow is one-way" are core principles of React. Adhering to them ensures the application behaves predictably.
*   **Performance:** The "Keys must be stable and unique" rule is critical for React's rendering performance. Incorrect key usage can lead to slow updates and bizarre UI bugs.
*   **Maintainability:** Following these rules makes the code easier for any developer on the team to read, understand, and modify with confidence. For example, keeping components pure makes them easier to test and reason about.
*   **Scalability:** Centralizing side effects in `useEffect` and using a structured approach for API calls ensures the application can grow in complexity without becoming a tangled mess.

---

**Critical Coding Rules List:**

1.  **One-Way Data Flow:** State should always flow down from parent to child components. Child components should communicate with parents via callback functions passed as props. *Never* have a child component directly modify its parent's state.

2.  **No Direct DOM Manipulation:** Never use `document.getElementById`, `querySelector`, or other direct DOM APIs to change the UI. Always modify the state, and let React re-render the component. Use `useRef` only as an escape hatch for managing focus or integrating with third-party libraries.

3.  **Keys Must Be Stable and Unique:** When rendering a list of items, the `key` prop must be a unique and stable identifier from your data (e.g., `item.id`), not the array index. Using an index can lead to incorrect rendering and state management bugs.

4.  **Keep Components Pure:** A component should always return the same JSX for the same set of props. Avoid side effects (like API calls or subscriptions) directly in the component's render body.

5.  **Side Effects Belong in `useEffect`:** All interactions with the "outside world" (API calls, setting up subscriptions, manual DOM mutations) must be placed inside a `useEffect` hook. Always specify a dependency array to control when the effect runs.

6.  **Do Not Mutate State or Props:** State and props in React should be treated as immutable. When updating state (especially objects or arrays), always create a new object or array instead of modifying the existing one.
    *   **Bad:** `user.name = 'new'; setUser(user);`
    *   **Good:** `setUser({ ...user, name: 'new' });`

7.  **Hook Rules Must Be Followed:**
    *   Only call Hooks at the top level of your functional components.
    *   Do not call Hooks inside loops, conditions, or nested functions.
    *   Only call Hooks from React function components or custom Hooks.

8.  **Abstract API Logic:** Components should not contain raw `fetch` or `axios` calls. All data-fetching logic must be abstracted into a dedicated service file (e.g., `orderAPI.js`) or a Redux Toolkit thunk.

### Quick Reference

This section provides a concise cheat sheet for developers working on the frontend, summarizing common commands, key patterns, and conventions. It serves as a handy guide to quickly get up to speed or recall specific project guidelines.

**Rationale for this quick reference:**

*   **Onboarding:** Helps new team members quickly understand the project's development workflow and coding standards.
*   **Efficiency:** Provides a single, easy-to-access place for frequently needed information, reducing the time spent searching documentation or asking teammates.
*   **Consistency:** Reinforces the established patterns and conventions, promoting a uniform codebase.

---

**Frontend Developer Cheat Sheet:**

**1. Common Commands:**

*   **Start Development Server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    (Runs Vite development server with Hot Module Replacement.)

*   **Build for Production:**
    ```bash
    npm run build
    # or
    yarn build
    ```
    (Compiles and optimizes the application for deployment.)

*   **Run Tests:**
    ```bash
    npm run test
    # or
    yarn test
    ```
    (Executes Vitest tests.)

*   **Run Linting/Formatting (if configured):**
    ```bash
    npm run lint
    # or
    yarn lint
    ```
    (Checks code for style and potential errors.)

**2. Key Import Patterns:**

*   **Relative Imports (for colocated files):**
    ```javascript
    import MyComponent from './MyComponent';
    import { someUtil } from '../utils/someUtil';
    ```
*   **Absolute Imports (if configured in `vite.config.js`):**
    ```javascript
    // Example: assuming an alias `@/` for `src/`
    import { Button } from '@/components/Button';
    import { cartSlice } from '@/features/cart/cartSlice';
    ```
*   **External Library Imports:**
    ```javascript
    import React from 'react';
    import { useSelector } from 'react-redux';
    ```

**3. File Naming Conventions:**

*   **Components/Views:** `PascalCase.jsx` (e.g., `Button.jsx`, `HomePage.jsx`)
*   **Hooks:** `useCamelCase.js` (e.g., `useDebounce.js`)
*   **Redux Slices:** `camelCaseSlice.js` (e.g., `cartSlice.js`)
*   **API Services:** `camelCaseAPI.js` (e.g., `orderAPI.js`)
*   **Utility Files:** `camelCase.js` (e.g., `helpers.js`)
*   **Test Files:** `ComponentName.test.jsx` or `utilityName.test.js`

**4. Project-Specific Patterns & Utilities:**

*   **State Management:**
    *   Use Redux Toolkit `createSlice` for feature-specific state.
    *   Redux slices are typically found in `src/features/[featureName]/[featureName]Slice.js`.
    *   Access state with `useSelector` and dispatch actions with `useDispatch`.
*   **API Communication:**
    *   Use `src/lib/apiClient.js` for configured `axios` instances.
    *   Feature-specific API calls are in `src/features/[featureName]/[featureName]API.js`.
*   **Environment Variables:**
    *   Accessed via `import.meta.env.VITE_YOUR_VARIABLE`.
    *   All client-side variables must be prefixed with `VITE_`.
    *   Refer to `.env.example` for required variables.
*   **Styling:**
    *   Primarily use Tailwind CSS utility classes.
    *   Global theme managed via CSS Custom Properties in `src/styles/theme.css`.
    *   Custom component styles can be in `Component.css` or `Component.module.css`.
