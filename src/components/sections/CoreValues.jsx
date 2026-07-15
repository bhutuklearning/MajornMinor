import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';

/**
 * Editorial values display utilizing vertical borders on desktop and horizontal dividers on mobile.
 */
export default function CoreValues() {
  const values = [
    {
      title: "Compassion First",
      tag: "Emotional Warmth",
      description: "Approaching trauma, depression, and anxiety with absolute gentleness. We craft environments that feel safe, supportive, and non-judgmental."
    },
    {
      title: "Research Credibility",
      tag: "Scientific Rigor",
      description: "Decoupling sound healing from mystical exaggerations. Every pitch, amplitude, and timing ratio we release is backed by cognitive clinical studies."
    },
    {
      title: "Cultural Integrity",
      tag: "Deep Roots",
      description: "Honoring historical music traditions and classical systems (like ragas or ancient ambient hums) while configuring modern translations."
    },
    {
      title: "Radical Simplicity",
      tag: "Quiet Design",
      description: "Restricting digital noise, flashing dashboards, and sensory clutter. We believe healing starts with peaceful layouts and spaces."
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-surface w-full">
      <Container>
        <SectionTitle
          title="Core Values"
          subtitle="Our pillars outline how we approach mental health, scientific validation, and communal responsibility."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {values.map((val, index) => (
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="space-y-3 p-6 md:p-8 lg:border-r border-divider last:border-r-0 border-b md:border-b-0 md:even:border-r-0 lg:even:border-r border-divider"
            >
              <span className="font-sans text-xs tracking-widest text-secondary-accent uppercase block font-medium">
                {val.tag}
              </span>
              <h3 className="font-serif text-lg text-primary-text font-normal">
                {val.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-secondary-text leading-relaxed">
                {val.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
