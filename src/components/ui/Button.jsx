import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

/**
 * Reusable Button component that handles Router Links, Anchors, and Standard buttons
 * with consistent Framer Motion animations for hover and tap states.
 */
export default function Button({
  children,
  to,
  href,
  onClick,
  type = 'button',
  variant = 'primary', // 'primary' | 'secondary' | 'tertiary' | 'ghost'
  className,
  disabled,
  ...props
}) {
  const baseClasses = "inline-flex items-center justify-center font-sans font-medium text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-accent focus-visible:ring-offset-2";
  
  const variants = {
    primary: "bg-primary-accent text-surface hover:bg-hover-accent px-6 py-3.5 rounded-none shadow-sm",
    secondary: "border border-primary-accent text-primary-accent hover:bg-primary-accent hover:text-surface px-6 py-3.5 rounded-none",
    tertiary: "text-secondary-accent hover:text-primary-accent py-2 border-b border-transparent hover:border-primary-accent tracking-widest text-xs uppercase",
    ghost: "border-[1.5px] border-primary-text text-primary-text bg-transparent hover:bg-primary-text hover:text-surface px-7 py-3.5 rounded-none tracking-[0.15em] group"
  };

  // If using an internal React Router path
  if (to) {
    const MotionLink = motion.create(Link);
    return (
      <MotionLink
        to={to}
        whileHover={disabled ? {} : { y: -2, scale: 1.01 }}
        whileTap={disabled ? {} : { scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        className={cn(baseClasses, variants[variant], className)}
        {...props}
      >
        {children}
      </MotionLink>
    );
  }

  // If using an external hyperlink
  if (href) {
    const MotionAnchor = motion.a;
    return (
      <MotionAnchor
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={disabled ? {} : { y: -2, scale: 1.01 }}
        whileTap={disabled ? {} : { scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        className={cn(baseClasses, variants[variant], className)}
        {...props}
      >
        {children}
      </MotionAnchor>
    );
  }

  // Fallback to standard HTML button
  const MotionButton = motion.button;
  return (
    <MotionButton
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? {} : { y: -2, scale: 1.01 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className={cn(
        baseClasses, 
        variants[variant], 
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      {...props}
    >
      {children}
    </MotionButton>
  );
}
