import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';

/**
 * Editorial Quote section with large serif blockquotes, subtle secondary accents,
 * and academic citations.
 */
export default function QuoteSection({ quote, author, title }) {
  const defaultQuote = "Music is a moral law. It gives soul to the universe, wings to the mind, flight to the imagination, and charm and gaiety to life and to everything.";
  const defaultAuthor = "Plato";
  const defaultTitle = "The Republic";

  return (
    <section className="py-20 sm:py-24 bg-surface border-y border-divider w-full">
      <Container className="max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Subtle open-quote icon marker */}
          <span className="font-serif text-5xl sm:text-6xl text-secondary-accent opacity-35 leading-none block select-none">
            &ldquo;
          </span>
          
          <blockquote className="font-serif text-lg sm:text-xl md:text-2xl lg:text-3xl text-primary-text font-normal leading-relaxed italic max-w-3xl mx-auto">
            {quote || defaultQuote}
          </blockquote>
          
          <div className="pt-4 space-y-1">
            <cite className="font-sans text-xs sm:text-sm font-semibold tracking-wider uppercase text-primary-accent not-italic">
              {author || defaultAuthor}
            </cite>
            <p className="font-sans text-xxs sm:text-xs text-secondary-text tracking-wide">
              {title || defaultTitle}
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
