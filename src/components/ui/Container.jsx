import React from 'react';
import { cn } from '../../utils/cn';

/**
 * A layout component that sets consistent responsive horizontal margins and widths.
 */
export default function Container({ children, className, ...props }) {
  return (
    <div
      className={cn('max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full', className)}
      {...props}
    >
      {children}
    </div>
  );
}
