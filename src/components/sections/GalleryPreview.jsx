import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import { IMAGES } from '../../constants/images';

/**
 * Editorial Gallery grid that showcases sample photography and triggers
 * a full screen lightbox on click.
 */
export default function GalleryPreview() {
  const [index, setIndex] = useState(-1);

  // Format slides for Yet Another React Lightbox
  const slides = IMAGES.gallery.map(img => ({
    src: img.src,
    alt: img.alt,
    title: img.caption
  }));

  return (
    <section className="py-20 sm:py-28 bg-surface w-full">
      <Container>
        <SectionTitle
          title="Moments of Resonance"
          subtitle="Explore the visuals of our acoustic therapy workshops, healing circles, and research sanctuaries."
        />
        
        {/* Editorial asymmetry collage */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Main Left Image (Col-span-7) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            onClick={() => setIndex(0)}
            className="md:col-span-7 cursor-pointer group overflow-hidden relative aspect-[4/3] md:aspect-auto bg-bg border border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-accent"
            role="button"
            tabIndex={0}
            aria-label="View large photography of Resonance in Nature"
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIndex(0); }}
          >
            <img
              src={IMAGES.gallery[0].src}
              alt={IMAGES.gallery[0].alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
            />
            {/* Subtle overlay caption on hover */}
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <p className="text-surface font-serif text-lg tracking-wide">{IMAGES.gallery[0].caption}</p>
            </div>
          </motion.div>

          {/* Right Column Stack (Col-span-5) */}
          <div className="md:col-span-5 flex flex-col gap-6 justify-between">
            {/* Upper Right Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.15 }}
              onClick={() => setIndex(1)}
              className="cursor-pointer group overflow-hidden relative aspect-[4/3] md:aspect-auto md:flex-1 bg-bg border border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-accent"
              role="button"
              tabIndex={0}
              aria-label="View photography of Visualizing Rhythm"
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIndex(1); }}
            >
              <img
                src={IMAGES.gallery[1].src}
                alt={IMAGES.gallery[1].alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-surface font-serif text-lg tracking-wide">{IMAGES.gallery[1].caption}</p>
              </div>
            </motion.div>

            {/* Lower Right Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              onClick={() => setIndex(2)}
              className="cursor-pointer group overflow-hidden relative aspect-[4/3] md:aspect-auto md:flex-1 bg-bg border border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-accent"
              role="button"
              tabIndex={0}
              aria-label="View photography of Evening Reflection"
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIndex(2); }}
            >
              <img
                src={IMAGES.gallery[2].src}
                alt={IMAGES.gallery[2].alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-surface font-serif text-lg tracking-wide">{IMAGES.gallery[2].caption}</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Lightbox Overlay */}
        <Lightbox
          index={index}
          open={index >= 0}
          close={() => setIndex(-1)}
          slides={slides}
        />
      </Container>
    </section>
  );
}
