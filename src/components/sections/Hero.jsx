import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import Container from '../ui/Container';
import { IMAGES } from '../../constants/images';

/**
 * Full-width Hero section with a background image, calm tint overlays,
 * and academic editorial alignment.
 */
export default function Hero({ onExploreClick }) {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center bg-black overflow-hidden">
      {/* Background Image with optimized eager loading for LCP */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={IMAGES.home.hero}
          alt={IMAGES.home.heroAlt}
          loading="eager"
          className="w-full h-full object-cover object-center opacity-60"
        />
        {/* Editorial overlay mask */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/35 to-black/40"></div>
      </div>

      <Container className="relative z-10 py-24 text-surface">
        <div className="max-w-3xl">
          {/* Eyebrow tag */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="font-sans text-xs sm:text-sm font-medium tracking-widest uppercase text-secondary-accent mb-4"
          >
            A Music-Based Mental Wellness Initiative
          </motion.p>

          {/* Headings */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.15 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight tracking-tight mb-6"
          >
            Resonance for the Mind.<br />Music for the Soul.
          </motion.h1>

          {/* Paragraph copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
            className="font-sans text-sm sm:text-base md:text-lg text-surface/85 leading-relaxed mb-10 max-w-2xl"
          >
            Major &amp; Minor bridges the scientific credibility of psychological research with the profound healing power of music. Discover a quiet space designed to soothe anxiety, stress, loneliness, and emotional trauma.
          </motion.p>

          {/* Button actions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.45 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              onClick={onExploreClick}
              className="bg-surface text-primary-text hover:bg-bg border-transparent active:scale-95"
            >
              Explore Our Approach
            </Button>
            <Button
              to="/about"
              variant="secondary"
              className="border-surface text-surface hover:bg-surface hover:text-primary-text"
            >
              Our Story
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
