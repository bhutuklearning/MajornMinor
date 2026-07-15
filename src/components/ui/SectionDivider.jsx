import React from 'react';
import { cn } from '../../utils/cn';

/**
 * An elegant editorial section divider with a fine divider line and a centered amber dot.
 */
export default function SectionDivider({ className }) {
  return (
    <div className={cn("w-full flex items-center justify-center my-16 sm:my-24", className)}>
      <div className="w-24 h-[1px] bg-divider"></div>
      <div className="mx-4 w-1.5 h-1.5 rounded-full bg-secondary-accent opacity-50"></div>
      <div className="w-24 h-[1px] bg-divider"></div>
    </div>
  );
}
