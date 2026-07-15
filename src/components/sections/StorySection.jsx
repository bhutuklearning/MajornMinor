import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';

/**
 * Editorial narrative columns presenting the initiative's history and core problem statements.
 */
export default function StorySection() {
  return (
    <section className="py-20 sm:py-28 bg-surface w-full">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Large Lead statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <span className="font-sans text-xs tracking-widest uppercase text-secondary-accent font-semibold block mb-3">
              Our Beginnings
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-primary-text font-normal leading-tight tracking-tight">
              Bridging the gap between auditory neuroscience and cultural wellness traditions.
            </h2>
          </motion.div>

          {/* Right Column - Descriptive copy */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-7 space-y-6 text-secondary-text font-sans text-xs sm:text-sm md:text-base leading-relaxed"
          >
            <p>
              Major &amp; Minor was founded under a singular premise: that music is not merely a tool for passive leisure, but a biological utility for neurological restoration. In a fast-paced world saturated with sensory noise, the mind struggles to return to its homeostatic state, leading to stress, chronic anxiety, and cognitive overload.
            </p>
            <p>
              Our journey began as a collaborative research inquiry between clinical music therapists, psychoacousticians, and mental health advocates. Observing how specific harmonic ratios, tempos, and ambient structures directly lower autonomic nervous system arousal, we sought to build something more than clinical treatment: a peaceful sanctuary open to all.
            </p>
            <p>
              By referencing both historical, ancient acoustic traditions and modern peer-reviewed findings, we configure auditory wellness programs that respect cultural heritage while answering to strict scientific standards. We believe that mental recovery shouldn't be isolated behind sterile laboratory doors, but shared openly within warm communal spaces.
            </p>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
