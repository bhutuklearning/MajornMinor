import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges class names safely, resolving conflicts with Tailwind CSS.
 * 
 * @param {...ClassValue} inputs - Array of classes or conditional structures
 * @returns {string} Combined and merged class string
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
