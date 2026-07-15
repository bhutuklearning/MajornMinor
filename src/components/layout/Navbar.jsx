import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import Container from '../ui/Container';
import { NAV_LINKS } from '../../constants/navigation';

/**
 * Sticky Navigation Bar with elegant scroll blur effects and responsive mobile drawer.
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-close mobile drawer on route transition
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-surface/85 backdrop-blur-md border-b border-border py-1'
          : 'bg-transparent border-b border-transparent py-3'
      }`}
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Brand Name */}
          <Link
            to="/"
            className="flex items-baseline space-x-1 focus-visible:outline-none"
            aria-label="Major and Minor Home"
          >
            <span className="font-serif text-2xl font-normal tracking-wide text-primary-text hover:text-primary-accent transition-colors duration-300">
              Major <span className="font-sans text-lg font-light text-secondary-accent">&amp;</span> Minor
            </span>
          </Link>

          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative font-sans text-xs tracking-widest uppercase transition-colors duration-300 py-1.5 ${
                    isActive
                      ? 'text-primary-accent font-semibold'
                      : 'text-secondary-text hover:text-primary-text'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBorder"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-primary-accent"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Drawer Burger Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 -mr-2 text-primary-text hover:text-primary-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-accent"
            aria-expanded={isOpen}
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden w-full bg-surface border-b border-border shadow-sm overflow-hidden"
          >
            <nav className="px-6 py-8 space-y-4 flex flex-col">
              {NAV_LINKS.map((link) => {
                const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`font-sans text-xs tracking-widest uppercase py-2 transition-colors ${
                      isActive
                        ? 'text-primary-accent font-medium pl-3 border-l-[2px] border-primary-accent'
                        : 'text-secondary-text hover:text-primary-text pl-3'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
