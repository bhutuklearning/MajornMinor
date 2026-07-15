import React, { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { router } from './routes';
import Loader from './components/common/Loader';

/**
 * Root App component that injects global Context Providers,
 * suspense fallbacks, and the central routing tree.
 */
export default function App() {
  return (
    <HelmetProvider>
      {/* Toast Alert Provider with custom styling matching accent palettes */}
      <Toaster
        position="bottom-right"
        toastOptions={{
          className: 'font-sans text-sm',
          duration: 4000,
          style: {
            background: 'var(--color-surface)',
            color: 'var(--color-primary-text)',
            border: '1px solid var(--color-border)',
            borderRadius: '0px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
          },
          success: {
            iconTheme: {
              primary: 'var(--color-primary-accent)',
              secondary: 'var(--color-surface)',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: 'var(--color-surface)',
            },
          },
        }}
      />

      {/* Code Splitting Suspense Wrapper */}
      <Suspense fallback={<Loader />}>
        <RouterProvider router={router} />
      </Suspense>
    </HelmetProvider>
  );
}
