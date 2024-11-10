# Task Manager Frontend

This is the frontend application for the Task Manager, built using **Vite**, **React**, **TypeScript**, **PNPM**, and **Node.js 22**.

## Table of Contents

- [Project Setup](#project-setup)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Development Server](#running-the-development-server)
- [Building for Production](#building-for-production)
- [Previewing the Production Build](#previewing-the-production-build)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

---
## Project Setup
### Prerequisites
Ensure you have the following installed:

- **Node.js 22**: Download and install the latest LTS version from [Node.js](https://nodejs.org/).
- **PNPM**: Install PNPM globally using the following command:

  ```bash
  npm install -g pnpm
  ```

## Installation

1. Clone the Repository:

```bash
git clone <repository-url>
cd task-manager-frontend
```

2. **Install Dependencies:** Install all project dependencies using PNPM:

```bash
pnpm install
```

## Running the Development Server

To start the development server with hot-reloading:

```bash
pnpm dev
```

The app will be available at http://localhost:5173.

Building for Production
To build the project for production:

```bash
pnpm build
```

This will generate a production-ready build in the `dist` folder.

Previewing the Production Build
To preview the production build locally:

```bash
pnpm preview
```

## Project Structure

Here’s a brief overview of the primary folders and files in the project:

```bash
task-manager-frontend/
├── public/                  # Static assets
├── src/                     # Application source code
│   ├── components/          # Reusable UI components
│   ├── pages/               # Page components for routing
│   ├── hooks/               # Custom React hooks
│   ├── utils/               # Utility functions and constants
│   ├── services/            # API and data fetching services
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Vite entry point
│   └── index.css            # Global styles
├── .env                     # Environment variables
├── vite.config.ts           # Vite configuration file
├── tsconfig.json            # TypeScript configuration
└── package.json             # Project metadata and scripts
```

## Environment Variables

Create a `.env` file in the root of the project to define environment variables (if needed).
**Example**:

```bash
VITE_API_BASE_URL=http://localhost:5000/api
```

## Scripts

The following scripts are available in `package.json`:

- pnpm dev: Start the development server
- pnpm build: Build for production
- pnpm preview: Preview the production build
- pnpm lint: Run code linter
- pnpm format: Format code using Prettier

## Technologies Used

- Vite - Next Generation Frontend Tooling
- React - JavaScript library for building user interfaces
- TypeScript - Superset of JavaScript providing static types
- PNPM - Fast, disk space-efficient package manager
- Tailwind CSS - Utility-first CSS framework (if used)
- Node.js 22 - JavaScript runtime

## Contributing

If you’d like to contribute, please fork the repository and create a pull request with a detailed description of your changes.

License
This project is licensed under the MIT License.

> **Note**: Replace `<repository-url>` with your actual repository link. This document includes setup, usage instructions, structure, environment variable configuration, and more, all in one markdown file.
