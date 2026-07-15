import React from 'react';

/**
 * A beautiful, minimal loader spinner matching the music-based, research-credibility aesthetic.
 */
export default function Loader() {
  return (
    <div className="w-full flex-grow flex items-center justify-center min-h-[50vh] bg-bg">
      <div className="flex flex-col items-center space-y-4">
        {/* Calm concentric animation */}
        <div className="relative w-10 h-10">
          <div className="absolute inset-0 rounded-full border-[1.5px] border-divider"></div>
          <div className="absolute inset-0 rounded-full border-[1.5px] border-transparent border-t-primary-accent animate-spin"></div>
        </div>
        <span className="font-serif text-xs italic tracking-widest text-secondary-accent animate-pulse">
          Resonating
        </span>
      </div>
    </div>
  );
}
