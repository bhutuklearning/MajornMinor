import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';

/**
 * Editorial Mission section displaying philosophy and clinical context.
 */
export default function MissionSection({ id }) {
  return (
    <section id={id} className="py-20 sm:py-28 bg-bg">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Core Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <span className="font-sans text-xs tracking-widest uppercase text-secondary-accent font-semibold block mb-3">
              Core Philosophy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary-text font-normal leading-tight tracking-tight">
              A gentle resonance to restore emotional balance and calm.
            </h2>
          </motion.div>

          {/* Right Column - Descriptive Blocks */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-7 space-y-8"
          >
            <div>
              <h3 className="font-serif text-lg sm:text-xl text-primary-text font-normal mb-3">
                Auditory Neuroscience
              </h3>
              <p className="font-sans text-xs sm:text-sm md:text-base text-secondary-text leading-relaxed">
                Sound waves carry frequencies that interact directly with our neurological pathways. By referencing clinical studies in music therapy and psychoacoustics, we curate auditory structures that help slow heart rates, lower cortisol, and trigger emotional release.
              </p>
            </div>
            
            <div>
              <h3 className="font-serif text-lg sm:text-xl text-primary-text font-normal mb-3">
                Restorative Sanctuaries
              </h3>
              <p className="font-sans text-xs sm:text-sm md:text-base text-secondary-text leading-relaxed">
                We design spaces that promote sound healing within peaceful cultural settings. By using warm ambient frequencies, organic acoustical instruments, and spatial silence, we establish a sanctuary of rest and reflection.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-lg sm:text-xl text-primary-text font-normal mb-3">
                Communal Harmony
              </h3>
              <p className="font-sans text-xs sm:text-sm md:text-base text-secondary-text leading-relaxed">
                Through local listening events, collaborative music circles, and research forums, Major &amp; Minor builds a compassionate environment. We believe that mental recovery thrives when shared in harmony with others.
              </p>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
