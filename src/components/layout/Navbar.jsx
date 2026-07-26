import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import Container from '../ui/Container';
import { NAV_LINKS } from '../../constants/navigation';
import { IMAGES } from '../../constants/images';

/**
 * Sticky Navigation Bar with elegant scroll blur effects and responsive mobile drawer.
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Run once on load to catch current scroll
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-close mobile drawer on route transition
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-surface/90 backdrop-blur-md border-b border-border py-2 shadow-sm'
          : 'bg-transparent border-b border-transparent py-3'
      }`}
    >
      <Container>
        <div className="flex h-20 md:h-24 items-center justify-between">
          {/* Logo / Brand Name — top-left, sized for the full emblem + wordmark */}
          <Link
            to="/"
            className="flex shrink-0 items-center focus-visible:outline-none"
            aria-label="Pranava Home"
          >
            <img
              src={IMAGES.logo.src}
              alt={IMAGES.logo.alt}
              className={`h-[4.5rem] sm:h-20 md:h-24 w-auto max-w-[220px] sm:max-w-[260px] object-contain object-left transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-95'}`}
            />
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
                    isScrolled
                      ? isActive
                        ? 'text-primary-accent font-semibold'
                        : 'text-secondary-text hover:text-primary-text'
                      : isActive
                        ? 'text-white font-semibold'
                        : 'text-white/75 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBorder"
                      className={`absolute bottom-0 left-0 right-0 h-[1.5px] ${
                        isScrolled ? 'bg-primary-accent' : 'bg-white'
                      }`}
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
            className={`md:hidden p-2 -mr-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-accent ${
              isScrolled ? 'text-primary-text hover:text-primary-accent' : 'text-white hover:text-secondary-accent'
            }`}
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
            className={`md:hidden w-full border-b border-border shadow-sm overflow-hidden ${
              isScrolled ? 'bg-surface' : 'bg-[#172b29] text-white border-t border-[#234542]'
            }`}
          >
            <nav className="px-6 py-8 space-y-4 flex flex-col">
              {NAV_LINKS.map((link) => {
                const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`font-sans text-xs tracking-widest uppercase py-2 transition-colors ${
                      isScrolled
                        ? isActive
                          ? 'text-primary-accent font-medium pl-3 border-l-2 border-primary-accent'
                          : 'text-secondary-text hover:text-primary-text pl-3'
                        : isActive
                          ? 'text-secondary-accent font-medium pl-3 border-l-2 border-secondary-accent'
                          : 'text-white/80 hover:text-white pl-3'
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
