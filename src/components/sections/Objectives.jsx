import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { IMAGES } from '../../constants/images';

/**
 * Editorial 'Objectives' section featuring key checklist objectives
 * and thematic artwork, aligned with the IKS IIT Delhi aesthetic.
 */
export default function Objectives() {
  const listItems = [
    "Conduct fundamental and applied research, including thought frameworks for civilizational musicology and sound therapy designs, as well as applications in relevant domains to address challenges and leverage opportunities for both the present and the future.",
    "Disseminate this knowledge through summits, conferences, workshops & study circles, courses, exhibitions, and content development in multiple modes.",
    "Facilitate mentorship by Gurus and experts, as well as strategic consultations and engagements of appropriate kinds.",
    "Perform global outreach to enable audiences across the world to benefit from the project's ideas.",
    "Become a platform for dialogue, exchange of thoughts, production, publication, and dissemination of ideas."
  ];

  return (
    <section className="py-20 sm:py-28 bg-bg w-full">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Title, Subtitle, Objectives List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Title Block */}
            <div className="space-y-4">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary-text font-normal tracking-[0.1em] sm:tracking-[0.15em] uppercase leading-none">
                Objectives
              </h2>
              {/* Gold/Secondary Accent underline */}
              <div className="w-16 h-[3px] bg-secondary-accent"></div>
              
              <p className="font-sans text-xs sm:text-sm text-secondary-text">
                The main objectives of Major &amp; Minor - IIT Kharagpur are stated below:
              </p>
            </div>

            {/* List Block */}
            <ul className="space-y-4 font-sans text-xs sm:text-sm text-secondary-text">
              {listItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-surface border border-border/40 rounded-xl hover:border-secondary-accent/40 transition-colors duration-300 shadow-sm"
                >
                  {/* Gold Checkmark */}
                  <span className="text-secondary-accent mt-0.5 flex-shrink-0">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="pt-4">
              <Button to="/focus-areas" variant="ghost">
                Focus Areas
                <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1.5 inline-block">→</span>
              </Button>
            </div>
          </motion.div>

          {/* Right Column - Hand-drawn Classical Painting */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-5 relative"
          >
            {/* Ambient shadow glow */}
            <div className="absolute inset-0 bg-primary-accent/5 blur-3xl rounded-full translate-y-8 -z-10"></div>
            
            {/* The Image Wrapper with offset frame matching our About Us style */}
            <div className="absolute inset-0 border border-primary-accent/40 translate-x-3 translate-y-3 pointer-events-none rounded-2xl"></div>
            
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-xl bg-surface aspect-[4/5] sm:aspect-[3/4]">
              <img
                src={IMAGES.home.objectivesImage || IMAGES.gallery[1].src}
                alt="Radha and Lord Krishna Playing Flute and Classical Instruments Painting"
                loading="lazy"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
