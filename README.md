# Major & Minor

Major & Minor is a React-based experience website built for a music-driven mental wellness initiative. The application is structured with a responsive design system, modular page components, and navigation that supports a polished, accessible presentation.

## Overview

The site includes the following key sections:

- Home page with hero content, mission overview, featured focus areas, quote section, and gallery preview.
- About page with origin story, mission and vision, core values, research philosophy, and narrative content.
- Focus Areas page outlining therapeutic pathways for stress, anxiety, trauma, and loneliness.
- Events page with category filtering, event listings, and registration navigation.
- Contact page with a validated inquiry form, contact details, and responsive layout.

## Key Features

- React 19 single-page application with client-side routing.
- Vite-powered development and production workflow.
- Tailwind CSS for responsive layout and utility-first styling.
- Code splitting using React lazy and Suspense.
- Form validation using React Hook Form and Zod.
- Animated interactions with Framer Motion.
- SEO metadata management with react-helmet-async.

## Technology Stack

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

## Project Structure

- `src/main.jsx` - Application entry point.
- `src/App.jsx` - Root providers, toast notifications, and router integration.
- `src/routes/index.jsx` - Route configuration with lazy-loaded pages.
- `src/layouts/RootLayout.jsx` - Shared layout containing navigation, content outlet, and footer.
- `src/pages/` - Route page components.
- `src/components/` - Shared UI and page section components.
- `src/constants/` - Navigation and image asset mappings.

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm 10 or later (or Yarn/PNPM equivalent)

### Installation

Install dependencies from the project root:

```bash
npm install
```

### Development

Start the local development server:

```bash
npm run dev
```

Open the local URL shown in the terminal to preview the site.

### Production Build

Build the production bundle:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

### Linting

Validate the project using ESLint:

```bash
npm run lint
```

## Notes

- The project uses Tailwind CSS plugins for aspect ratio, forms, and typography.
- Pages and sections are designed for reuse and consistent visual hierarchy.
- The contact form includes front-end validation and a simulated submit workflow.
- The routing configuration is optimized for clean page transitions and error handling.
