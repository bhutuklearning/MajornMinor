import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import { IMAGES } from '../../constants/images';

/**
 * Technical section outlining psychoacoustics research, supported by
 * a stylized double-bordered image frame.
 */
export default function ResearchPhilosophy() {
  return (
    <section className="py-20 sm:py-28 bg-bg border-t border-divider w-full">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Research Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <span className="font-sans text-xs tracking-widest uppercase text-secondary-accent font-semibold block">
              Methodology
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-primary-text font-normal leading-tight tracking-tight">
              An evidence-based approach to auditory relaxation.
            </h2>
            <p className="font-sans text-xs sm:text-sm md:text-base text-secondary-text leading-relaxed">
              We focus on the science of psychoacoustics—studying how the brain perceives and registers sound waves. Through controlled testing, we have observed that auditory pacing with slow tempo profiles (around 60 BPM) matches the resting heart rate of a healthy adult, facilitating autonomic shifting from fight-or-flight sympathetic modes into deep parasympathetic relaxation.
            </p>
            <p className="font-sans text-xs sm:text-sm md:text-base text-secondary-text leading-relaxed">
              Furthermore, we integrate somatic sound therapies which apply low-frequency resonance directly to body tissue. These harmonic frequencies work in tandem with cognitive behavioral pacing, creating a full mind-body circuit of somatic stress release.
            </p>
            
            <div className="pt-2 border-l-2 border-primary-accent pl-4 space-y-2">
              <p className="font-sans italic text-xs sm:text-sm text-primary-text">
                "Our designs ensure that auditory therapies are clinical in grounding, yet traditional in artistic delivery."
              </p>
              <span className="font-sans text-xxs uppercase tracking-wider text-secondary-text font-medium block">
                — Clinical Research Director, Pranava
              </span>
            </div>
          </motion.div>

          {/* Right Column - Supporting Image with offset background outline */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-5 relative"
          >
            {/* Styled offset background border */}
            <div className="absolute inset-0 border border-primary-accent translate-x-3 translate-y-3 pointer-events-none"></div>
            
            <div className="relative border border-border bg-surface overflow-hidden aspect-square">
              <img
                src={IMAGES.about.methodology}
                alt="A supportive musical therapeutic space representing sound waves reflection"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
              />
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
