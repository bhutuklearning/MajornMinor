import React from 'react';
import { cn } from '../../utils/cn';

/**
 * Editorial title component with headings in Playfair Display (Serif)
 * and body/subtitles in Inter (Sans).
 */
export default function SectionTitle({
  title,
  subtitle,
  centered = true,
  className,
  titleClassName,
  subtitleClassName
}) {
  return (
    <div className={cn("mb-12 sm:mb-16", centered ? "text-center" : "text-left", className)}>
      <h2 className={cn(
        "font-serif text-3xl sm:text-4xl lg:text-5xl text-primary-text font-normal leading-tight tracking-tight",
        titleClassName
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "mt-4 text-sm sm:text-base text-secondary-text font-sans max-w-2xl leading-relaxed",
          centered ? "mx-auto" : "mr-auto",
          subtitleClassName
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
