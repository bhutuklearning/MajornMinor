import React, { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import ErrorElement from '../components/common/ErrorElement';

// Dynamic page imports (Code Splitting)
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const FocusAreas = lazy(() => import('../pages/FocusAreas'));
const Events = lazy(() => import('../pages/Events'));
const Contact = lazy(() => import('../pages/Contact'));

/**
 * Centrally managed route configurations utilizing RootLayout as the structural shell.
 */
export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorElement />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'focus-areas',
        element: <FocusAreas />
      },
      {
        path: 'events',
        element: <Events />
      },
      {
        path: 'contact',
        element: <Contact />
      }
    ]
  }
]);
