import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Container from '../ui/Container';
import { IMAGES } from '../../constants/images';

/**
 * Premium "Moments of Resonance" gallery section featuring a full-bleed
 * asymmetric mosaic layout, animated reveals, hover captions, and a lightbox.
 */
export default function GalleryPreview() {
  const [index, setIndex] = useState(-1);

  const slides = IMAGES.gallery.map(img => ({
    src: img.src,
    alt: img.alt,
    title: img.caption
  }));

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.85, ease: 'easeOut', delay }
  });

  return (
    <section className="py-20 sm:py-28 bg-surface w-full overflow-hidden">
      <Container>

        {/* Section Header */}
        <motion.div
          {...fadeUp(0)}
          className="text-center mb-14 space-y-4"
        >
          <span className="font-sans text-xs tracking-widest uppercase text-secondary-accent font-semibold block">
            Visual Archive
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary-text font-normal tracking-tight leading-snug">
            Moments of Resonance
          </h2>
          <p className="font-sans text-sm text-secondary-text max-w-xl mx-auto leading-relaxed">
            Explore the visuals of our acoustic therapy workshops, healing circles, and research sanctuaries.
          </p>
          <div className="w-12 h-[2px] bg-secondary-accent mx-auto mt-2"></div>
        </motion.div>

        {/* Asymmetric Mosaic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-3 md:h-[600px]">

          {/* Main Feature Image — spans full left column across both rows */}
          <motion.div
            {...fadeUp(0.1)}
            onClick={() => setIndex(0)}
            className="md:col-span-7 md:row-span-2 cursor-pointer group relative overflow-hidden rounded-2xl bg-black"
            role="button"
            tabIndex={0}
            aria-label={`Open lightbox: ${IMAGES.gallery[0].caption}`}
            onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setIndex(0); }}
          >
            <img
              src={IMAGES.gallery[0].src}
              alt={IMAGES.gallery[0].alt}
              loading="lazy"
              className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
            {/* Gradient footer caption strip */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-7">
              <span className="font-sans text-[10px] tracking-widest uppercase text-secondary-accent font-semibold mb-1">
                Featured
              </span>
              <p className="text-white font-serif text-xl sm:text-2xl tracking-wide leading-snug">
                {IMAGES.gallery[0].caption}
              </p>
              <p className="text-white/60 font-sans text-xs mt-1">
                Click to view full screen
              </p>
            </div>

            {/* Always-visible corner label */}
            <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1">
              <span className="font-sans text-[10px] tracking-widest uppercase text-white/80">
                01
              </span>
            </div>
          </motion.div>

          {/* Upper Right Image */}
          <motion.div
            {...fadeUp(0.2)}
            onClick={() => setIndex(1)}
            className="md:col-span-5 md:row-span-1 cursor-pointer group relative overflow-hidden rounded-2xl bg-black aspect-[4/3] md:aspect-auto"
            role="button"
            tabIndex={0}
            aria-label={`Open lightbox: ${IMAGES.gallery[1].caption}`}
            onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setIndex(1); }}
          >
            <img
              src={IMAGES.gallery[1].src}
              alt={IMAGES.gallery[1].alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-5">
              <p className="text-white font-serif text-lg tracking-wide leading-snug">
                {IMAGES.gallery[1].caption}
              </p>
            </div>
            <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1">
              <span className="font-sans text-[10px] tracking-widest uppercase text-white/80">
                02
              </span>
            </div>
          </motion.div>

          {/* Lower Right Image */}
          <motion.div
            {...fadeUp(0.3)}
            onClick={() => setIndex(2)}
            className="md:col-span-5 md:row-span-1 cursor-pointer group relative overflow-hidden rounded-2xl bg-black aspect-[4/3] md:aspect-auto"
            role="button"
            tabIndex={0}
            aria-label={`Open lightbox: ${IMAGES.gallery[2].caption}`}
            onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setIndex(2); }}
          >
            <img
              src={IMAGES.gallery[2].src}
              alt={IMAGES.gallery[2].alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-5">
              <p className="text-white font-serif text-lg tracking-wide leading-snug">
                {IMAGES.gallery[2].caption}
              </p>
            </div>
            <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1">
              <span className="font-sans text-[10px] tracking-widest uppercase text-white/80">
                03
              </span>
            </div>
          </motion.div>

        </div>

        {/* Bottom note */}
        <motion.p
          {...fadeUp(0.4)}
          className="text-center font-sans text-xs text-secondary-text/60 tracking-widest uppercase mt-8"
        >
          Click any image to view full screen
        </motion.p>

      </Container>

      {/* Lightbox */}
      <Lightbox
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={slides}
      />
    </section>
  );
}
