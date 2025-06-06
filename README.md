# Backend Boilerplate Express Backend

Express Backend Application for company wide use in Algoirthm.io.
Tech Stack:

- Node.js `(18.x or above)`
- Express `(5.x)`
- PostgreSQL `(16.x or above)`
- Sequelize `(6.x)`

## Setup

1. Install dependencies: `npm install`
2. Configure environment variables from .env.example
3. Run migrations: `npm run migrate`
4. Start server: `npm start`

## Project Structure

- `/logs` - Application logs
- `/src`
  - `/config` - Configuration files
  - `/controllers` - Request handlers
  - `/database` - Database-related files
  - `/enums` - Enumeration definitions
  - `/errors` - Custom error definitions
  - `/middleware` - Express middleware
  - `/models` - Database models
  - `/routes` - API route definitions
  - `/services` - Business logic
  - `/utils` - Utility functions
  - `/validations` - Request validation schemas
