# Next 14, StyleX, Radix UI, Next Auth, Upstash Redis Starter

## Overview

This repository contains a **Next.js 14** project that uses **StyleX** for styling, **Radix UI** for accessible and customizable components, **Next Auth** for authentication, and **Upstash Redis** for managing caching and session storage. The project aims to deliver a modular and scalable application architecture that is easy to maintain.

## Table of Contents

- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Dependencies](#dependencies)
- [Authentication](#authentication)
- [UI Components](#ui-components)
- [Data Persistence](#data-persistence)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v16+)
- **Yarn** or **npm**
- **Redis** (for Upstash)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ugurkellecioglu/redis-auth.git
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Set up environment variables. Create a `.env.local` file and include the following:

   ```
   UPSTASH_REDIS_URL="YOUR_UPSTASH_REDIS_URL"
   UPSTASH_REDIS_TOKEN="YOUR_UPSTASH_REDIS_TOKEN"
   SECRET_KEY="YOUR_SECRET"
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

   ```bash
   yarn dev
   ```

The app will be available at [http://localhost:3000](http://localhost:3000).

## Folder Structure

The project follows a clear and logical folder structure:

```
/actions
  authActions.ts       # Action logic for authentication
/app
/components
  Button.tsx           # Reusable button component
  Container.tsx        # Layout container
  LoginForm.tsx        # Login form using Next Auth
  RegisterForm.tsx     # Register form using Next Auth
/data
  userRepository.ts    # Manages user data interactions with Redis
/lib
  auth.ts              # Handles Next Auth configuration and session management
  redis.ts             # Upstash Redis connection and queries
/services
  authService
    index.ts           # Service layer for user authentication
    types.ts           # Types for authentication service
/types
  next-auth.d.ts       # Next Auth types extensions
/utils
  hash.ts              # Utility functions for hashing (bcryptjs)
```

- **actions/**: Contains actions such as user authentication actions.
- **app/**: Next.js 14 uses the `/app` directory for routing and server-side rendering.
- **components/**: Holds reusable React components like `Button`, `LoginForm`, and `RegisterForm`.
- **data/**: Responsible for data persistence and fetching logic. Here, `userRepository.ts` connects to Upstash Redis.
- **lib/**: Handles shared libraries, such as Next Auth and Redis setup.
- **services/**: Business logic layer. It abstracts authentication logic to a dedicated service.
- **types/**: Contains TypeScript type definitions, especially extending `Next Auth` types.
- **utils/**: Utility functions, like password hashing.

### Key Files

- `auth.ts`: This file manages authentication via Next Auth, including configurations like providers and session handling.
- `redis.ts`: Manages connection to Upstash Redis for session storage and other caching mechanisms.

## Dependencies

The key dependencies used in this project are:

- **Next.js 14**: Framework for building server-rendered React applications.
- **StyleX**: Used for styling the application with clean CSS-in-JS utility classes.
- **Radix UI**: A set of accessible and customizable UI components.
- **Next Auth**: Provides authentication using JWT and session management.
- **Upstash Redis**: Serverless Redis service used for session caching and data persistence.

### Installing Dependencies

Run the following command to install all necessary packages:

```bash
yarn install
```

```bash
npm install
```

## Authentication

The project uses **Next Auth v5 (Auth JS)** for handling authentication:

- **Providers**: The project can use email/password, OAuth providers like Google, and more. But currently, it uses email/password.
- **Session Management**: Sessions are stored in Redis via Upstash to ensure scalability and high availability.

Authentication logic is abstracted into the `authService` in the `/services/authService` folder, with all Next Auth configurations handled in `lib/auth.ts`.

### Adding Providers

To add new providers to Next Auth, modify the `auth.ts` file under `lib/auth.ts` and add new providers as shown below:

```ts
providers: [
  Providers.Google({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  }),
  // Add more providers here
]
```

## UI Components

The UI components are built using **Radix UI** for accessibility and customization, and **StyleX** for styling.

Key components include:

- **Button.tsx**: Reusable button component.
- **LoginForm.tsx**: Handles user login using Next Auth.
- **RegisterForm.tsx**: Handles user registration.

All components are styled using **StyleX**, a utility-first styling approach similar to Tailwind CSS.

## Data Persistence

Data persistence is handled via **Upstash Redis**, providing a scalable, serverless Redis solution for storing user session data and cache.

The `userRepository.ts` file is responsible for interactions with Redis, including saving and retrieving user session data.

## Contributing

We welcome contributions from the developer community. Please follow these steps to contribute:

1. Fork the repository.
2. Create a new feature branch: `git checkout -b feature/your-feature`.
3. Commit your changes: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
