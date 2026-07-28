import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import Button from '../ui/Button';

/**
 * Editorial Call-To-Action component using the dark primary accent background.
 */
export default function CTA() {
  return (
    <section className="py-20 sm:py-24 bg-primary-accent text-surface w-full">
      <Container className="max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <span className="font-sans text-sm sm:text-base tracking-widest uppercase text-secondary-accent font-semibold block">
            Cultivate Calmness
          </span>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-surface font-normal leading-tight tracking-tight max-w-3xl mx-auto">
            Ready to experience the therapeutic power of music?
          </h2>
          
          <p className="font-sans text-xs sm:text-sm md:text-base text-surface/85 leading-relaxed max-w-xl mx-auto">
            Whether you want to join an upcoming sound workshop, read our clinical research papers, or integrate sound therapy into your personal routine—we welcome you.
          </p>
          
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Button
              to="/contact"
              className="bg-surface text-primary-text hover:bg-bg border-transparent active:scale-95"
            >
              Get in Touch
            </Button>
            <Button
              to="/events"
              variant="secondary"
              className="border-surface text-surface hover:bg-surface hover:text-primary-text"
            >
              View Workshops
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
