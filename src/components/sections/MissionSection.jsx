import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { IMAGES } from '../../constants/images';

/**
 * Editorial Mission / About Us section displaying philosophy, clinical context, 
 * and featured imagery as specified in the wireframe design.
 */
export default function MissionSection({ id }) {
  return (
    <section id={id} className="py-20 sm:py-28 bg-bg">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Featured Image matching wireframe layout */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            {/* Accent offset frame */}
            <div className="absolute inset-0 border border-primary-accent/40 translate-x-3 translate-y-3 pointer-events-none rounded-2xl"></div>
            
            {/* Image Wrapper */}
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-xl bg-surface aspect-[4/5] sm:aspect-[3/4]">
              <img
                src={IMAGES.home.aboutSection}
                alt={IMAGES.home.aboutSectionAlt}
                loading="lazy"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </motion.div>

          {/* Right Column - About Us Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-7 space-y-6"
          >
            <div>
              <span className="font-sans text-xs tracking-widest uppercase text-secondary-accent font-semibold block mb-3">
                About Us
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary-text font-normal leading-tight tracking-tight">
                A gentle resonance to restore emotional balance and calm.
              </h2>
            </div>

            <p className="font-sans text-xs sm:text-sm md:text-base text-secondary-text leading-relaxed">
              Pranava is a music-based mental wellness initiative founded at the Institute of Eminence, IIT Kharagpur. We bridge the scientific credibility of psychological research with the profound healing power of ancient acoustic traditions and sound therapies.
            </p>

            <div className="space-y-4 pt-2 border-t border-divider font-sans">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <h3 className="font-serif text-base text-primary-text font-medium">Auditory Neuroscience</h3>
                  <p className="text-xs text-secondary-text leading-relaxed">
                    Research-backed sound structures designed to slow heart rate and lower cortisol levels.
                  </p>
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-base text-primary-text font-medium">Restorative Sanctuaries</h3>
                  <p className="text-xs text-secondary-text leading-relaxed">
                    Warm ambient frequencies and organic acoustic instruments creating a haven for reflection.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button to="/about" variant="ghost">
                Know More
                <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1.5 inline-block">→</span>
              </Button>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
