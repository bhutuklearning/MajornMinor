# Pranava

Pranava is a modern React-based experience website for a music-driven mental wellness initiative. The project is built around a modular frontend architecture, a polished visual system, and a strong emphasis on storytelling, accessibility, and maintainability.

## Overview

This application presents the organization’s mission, values, programs, and contact experience through a refined single-page experience. The interface is structured to feel calm, intentional, and editorial while remaining responsive and easy to extend.

## What the experience includes

- A compelling home experience with hero content, mission storytelling, featured focus areas, a quote section, and a gallery preview.
- Dedicated pages for About, Focus Areas, Events, and Contact.
- Reusable UI and section components that keep the implementation consistent across the site.
- Responsive layouts and smooth navigation designed for a polished user experience.

## Core capabilities

- React 19 with Vite for a fast, modern development workflow.
- Client-side routing with React Router.
- Tailwind CSS for responsive, utility-first styling.
- Framer Motion for subtle animation and transition effects.
- React Hook Form and Zod for form validation.
- React Helmet Async for SEO metadata management.
- Lazy-loaded route pages and modular component composition for maintainability.

## Technology stack

- React
- Vite
- Tailwind CSS
- React Router DOM
- Framer Motion
- React Hook Form
- Zod
- React Helmet Async
- Axios
- React Icons

## Project structure

- src/main.jsx – application entry point.
- src/App.jsx – app-level providers and routing integration.
- src/routes/index.jsx – route configuration and lazy-loaded pages.
- src/layouts/RootLayout.jsx – shared shell for navigation, content, and footer.
- src/pages/ – route-based page components.
- src/components/ – shared UI and section-level components.
- src/constants/ – navigation and asset mapping.

## Getting started

### Prerequisites

- Node.js 18 or newer
- npm 10 or newer

### Install dependencies

From the project root, run:

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open the local URL shown in the terminal to view the site.

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

### Lint the project

```bash
npm run lint
```

## Notes

- The project uses a modular component structure intended for future growth and reuse.
- The contact experience includes client-side validation and a simulated submission flow.
- The design focuses on storytelling, clarity, and a calm, high-quality visual experience.
