import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../ui/Container';
import { IMAGES } from '../../constants/images';

/**
 * Editorial 'What We Do' section featuring interactive accordion items
 * and thematic artwork, aligned with the IKS IIT Delhi aesthetic.
 */
export default function WhatWeDo() {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      title: "Research",
      content: "Conduct fundamental and applied research on civilizational musicology and acoustic therapies to address current and future cognitive and psychological wellness challenges."
    },
    {
      title: "Dissemination",
      content: "Disseminate therapeutic knowledge through community workshops, public sound baths, academic publications, and structured training courses."
    },
    {
      title: "Mentorship",
      content: "Provide mentorship and academic resources to students, clinical researchers, and musicologists designing evidence-based sound healing methodologies."
    },
    {
      title: "Outreach",
      content: "Collaborate with healthcare organizations, academic institutions, and local communities to deploy music-based therapy programs to vulnerable populations."
    },
    {
      title: "Dialogue",
      content: "Facilitate open dialogue and knowledge sharing between modern cognitive neuroscientists, mental health practitioners, and traditional Indian classical musicians."
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-surface w-full">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Beautiful Hand-drawn Artwork */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            {/* Ambient Shadow glow */}
            <div className="absolute inset-0 bg-primary-accent/5 blur-3xl rounded-full translate-y-8 -z-10"></div>
            
            {/* The Image Wrapper with editorial frame */}
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-lg bg-bg aspect-[16/10] sm:aspect-[4/3] lg:aspect-[1.5/1]">
              <img
                src={IMAGES.home.whatWeDoImage || IMAGES.gallery[0].src}
                alt="Indian Classical Music Instruments and Heritage Artwork"
                loading="lazy"
                className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </motion.div>

          {/* Right Column - Title & Accordion items */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-6 space-y-8"
          >
            {/* Section Heading & Subtitle */}
            <div className="space-y-4">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary-text font-normal tracking-[0.1em] sm:tracking-[0.15em] uppercase leading-none">
                What We Do
              </h2>
              {/* Gold/Secondary Accent underline */}
              <div className="w-16 h-[3px] bg-secondary-accent"></div>
              
              <p className="font-sans text-xs sm:text-sm md:text-base text-secondary-text leading-relaxed pt-2">
                The Major &amp; Minor initiative at IIT Kharagpur aims to harness the therapeutic potential of Indian classical music and traditional knowledge systems to address contemporary mental wellness challenges through research, education, and global outreach.
              </p>
            </div>

            {/* Accordion Component */}
            <div className="space-y-0 border-t border-divider">
              {items.map((item, index) => {
                const isActive = activeIndex === index;
                return (
                  <div 
                    key={item.title} 
                    className={`transition-colors duration-500 border-b ${
                      isActive ? 'border-secondary-accent' : 'border-divider'
                    }`}
                  >
                    <button
                      onClick={() => setActiveIndex(isActive ? -1 : index)}
                      className="w-full py-5 flex justify-between items-center text-left font-sans text-base sm:text-lg transition-all duration-300 focus:outline-none group"
                    >
                      <span
                        className={`transition-colors duration-300 font-sans tracking-widest uppercase text-sm ${
                          isActive 
                            ? 'text-secondary-accent font-semibold' 
                            : 'text-primary-text group-hover:text-primary-accent'
                        }`}
                      >
                        {item.title}
                      </span>
                      
                      {/* Arrow Icon */}
                      <svg
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isActive 
                            ? 'transform rotate-180 text-secondary-accent' 
                            : 'text-secondary-text group-hover:text-primary-accent'
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {/* Accordion content with smooth collapse/expand */}
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="pb-5 font-sans text-xs sm:text-sm text-secondary-text leading-relaxed">
                            {item.content}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
