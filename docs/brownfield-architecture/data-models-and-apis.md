# Data Models and APIs

## Data Models

There are no client-side data models. Data structures are implicitly defined by the responses from the external APIs.

## API Specifications

The application consumes two external REST APIs:

1.  **Fast React Pizza API**:
    - **Endpoint**: `https://react-fast-pizza-api.jonas.io/api`
    - **Usage**: Fetching menu, creating/fetching/updating orders.
    - **Implementation**: See `src/services/apiRestaurant.js`.

2.  **BigDataCloud Geocoding API**:
    - **Endpoint**: `https://api.bigdatacloud.net/data/reverse-geocode-client`
    - **Usage**: Converting latitude/longitude to a human-readable address.
    - **Implementation**: See `src/services/apiGeocoding.js`.
