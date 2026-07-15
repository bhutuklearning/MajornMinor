import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';

/**
 * Double card presentation highlighting the initiative's Mission and Vision statements.
 */
export default function MissionVision() {
  return (
    <section className="py-20 bg-bg border-y border-divider w-full">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-4 p-8 sm:p-10 bg-surface border border-border"
          >
            <span className="font-sans text-xs tracking-widest uppercase text-primary-accent font-semibold block">
              Our Mission
            </span>
            <h3 className="font-serif text-xl sm:text-2xl text-primary-text font-normal leading-snug">
              To integrate music and neuroscience into accessible mental health practices, offering a sanctuary of sound for all in need.
            </h3>
            <p className="font-sans text-xs sm:text-sm text-secondary-text leading-relaxed">
              We translate scientific insights into auditory experiences, hosting local gatherings, group listening sessions, and providing open-source tools designed to help minds decompress and recover.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="space-y-4 p-8 sm:p-10 bg-surface border border-border"
          >
            <span className="font-sans text-xs tracking-widest uppercase text-secondary-accent font-semibold block">
              Our Vision
            </span>
            <h3 className="font-serif text-xl sm:text-2xl text-primary-text font-normal leading-snug">
              A society where emotional healing is demystified, communal, and grounded in the calming cadence of music.
            </h3>
            <p className="font-sans text-xs sm:text-sm text-secondary-text leading-relaxed">
              We look forward to a future where cultural centers, universities, and health clinics incorporate sonic wellness programs, treating auditory recovery as a fundamental right of modern daily life.
            </p>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
