import React from 'react';
import { useRouteError, Link } from 'react-router-dom';
import Container from '../ui/Container';
import Button from '../ui/Button';

/**
 * Custom Error Boundary page designed to preserve the calming aesthetic 
 * while providing error summaries and recovery options.
 */
export default function ErrorElement() {
  const error = useRouteError();
  
  // Log locally for debugging
  console.error('Route error caught:', error);

  return (
    <div className="min-h-screen bg-bg flex items-center justify-center py-20 px-6 w-full">
      <Container className="max-w-lg text-center space-y-6 bg-surface border border-border p-8 sm:p-12 shadow-sm">
        <span className="font-sans text-xs tracking-widest uppercase text-secondary-accent font-semibold block">
          System Notice
        </span>
        
        <h1 className="font-serif text-2xl sm:text-3xl text-primary-text font-normal leading-tight">
          An unexpected echo occurred.
        </h1>
        
        <p className="font-sans text-xs sm:text-sm text-secondary-text leading-relaxed">
          We encountered an issue rendering this section. Our research team has logged the discrepancy.
        </p>

        {/* Development or Detailed Error summary */}
        {error && (
          <pre className="p-4 bg-bg border border-border text-left text-xxs sm:text-xs font-mono text-red-600 overflow-auto max-h-40 max-w-full">
            {error.statusText || error.message || 'Unknown error caught in boundary'}
          </pre>
        )}
        
        <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
          <Button to="/" className="w-full sm:w-auto text-xxs uppercase tracking-wider">
            Return Home
          </Button>
          <Button
            onClick={() => window.location.reload()}
            variant="secondary"
            className="w-full sm:w-auto text-xxs uppercase tracking-wider border-primary-accent text-primary-accent hover:bg-primary-accent hover:text-surface"
          >
            Reload Page
          </Button>
        </div>
      </Container>
    </div>
  );
}
