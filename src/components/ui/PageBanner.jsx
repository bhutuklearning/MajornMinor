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
          className="w-full h-full object-cover object-center"
        />
        {/* Light gradient overlay to preserve background image colors while offering text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/35"></div>
      </div>

      <Container className="relative z-10 text-surface text-center flex flex-col items-center">
        <div className="max-w-3xl mx-auto space-y-3 flex flex-col items-center">
          {/* Breadcrumbs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-sans text-xs tracking-widest uppercase text-white/60 flex items-center space-x-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)]"
          >
            <Link to="/" className="text-white/80 hover:text-secondary-accent transition-colors duration-200">
              Home
            </Link>
            <span className="text-white/40">/</span>
            <span className="text-white/90">{subtitle || "About"}</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.15 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-normal leading-tight tracking-tight drop-shadow-[0_3px_10px_rgba(0,0,0,0.95)]"
          >
            {title}
          </motion.h1>
        </div>
      </Container>
    </section>
  );
}
