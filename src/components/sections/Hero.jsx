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
    <section className="relative w-full min-h-screen flex items-center bg-black overflow-hidden w-full">
      {/* Background Image with optimized eager loading for LCP */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={IMAGES.home.hero}
          alt={IMAGES.home.heroAlt}
          loading="eager"
          className="w-full h-full object-cover object-center"
        />
        {/* Adjusted gradient overlay to keep background colors vivid while ensuring white text pops */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/30"></div>
      </div>

      <Container className="relative z-10 py-24 text-center flex flex-col items-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* Eyebrow tag */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="font-sans text-xs sm:text-sm font-semibold tracking-widest uppercase text-secondary-accent mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
          >
            A Music-Based Mental Wellness Initiative
          </motion.p>

          {/* Headings - explicitly text-white to override any global default overrides */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.15 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-tight tracking-tight mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.75)]"
          >
            Resonance for the Mind.<br />Music for the Soul.
          </motion.h1>

          {/* Paragraph copy - explicitly text-white/90 for legibility */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
            className="font-sans text-sm sm:text-base md:text-lg text-white/90 leading-relaxed mb-12 max-w-3xl drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]"
          >
            Major &amp; Minor bridges the scientific credibility of psychological research with the profound healing power of music. Discover a quiet space designed to soothe anxiety, stress, loneliness, and emotional trauma.
          </motion.p>

          {/* Centered Button actions - styled as a balanced white solid / outline combination */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.45 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-5 w-full"
          >
            <Button
              onClick={onExploreClick}
              className="rounded-full border-2 border-white bg-white text-[#172b29] hover:bg-transparent hover:text-white px-8 py-3.5 tracking-widest text-xs font-semibold active:scale-95 transition-all duration-300 w-full sm:w-auto"
            >
              Explore Our Approach
            </Button>
            <Button
              to="/about"
              className="rounded-full border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#172b29] px-8 py-3.5 tracking-widest text-xs font-semibold active:scale-95 transition-all duration-300 w-full sm:w-auto"
            >
              Our Story
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
