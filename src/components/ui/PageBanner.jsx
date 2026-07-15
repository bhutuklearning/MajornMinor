import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from './Container';

/**
 * Reusable header banner for inner pages featuring breadcrumb indicators
 * and visual backdrop scaling.
 */
export default function PageBanner({ image, alt, title, subtitle }) {
  return (
    <section className="relative w-full h-[40vh] sm:h-[48vh] flex items-center bg-black overflow-hidden w-full">
      {/* Background Image with slow zoom transition on render */}
      <div className="absolute inset-0 w-full h-full">
        <motion.img
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: 'easeOut' }}
          src={image}
          alt={alt}
          className="w-full h-full object-cover object-center opacity-55"
        />
        {/* Dark screen overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/30 to-black/40"></div>
      </div>

      <Container className="relative z-10 text-surface">
        <div className="max-w-3xl space-y-3">
          {/* Breadcrumbs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-sans text-xs tracking-widest uppercase text-secondary-accent flex items-center space-x-2"
          >
            <Link to="/" className="hover:text-surface transition-colors duration-200">
              Home
            </Link>
            <span className="text-surface/40">/</span>
            <span className="text-surface/85">{subtitle || "About"}</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.15 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-tight tracking-tight"
          >
            {title}
          </motion.h1>
        </div>
      </Container>
    </section>
  );
}
