import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

/**
 * A section providing a structured grid preview of our primary wellness focus areas.
 */
export default function FocusAreasPreview() {
  const focusAreas = [
    {
      title: "Stress Alleviation",
      subtitle: "Auditory Entrainment",
      description: "Using binaural pacing and organic acoustic tones to guide hyperactive brainwaves down to calm, meditative alpha and theta states.",
      path: "/focus-areas"
    },
    {
      title: "Anxiety Reduction",
      subtitle: "Vagal Stimulation",
      description: "Harnessing resonant low-frequency acoustic vibrations that trigger the parasympathetic system, reducing heart rate variability.",
      path: "/focus-areas"
    },
    {
      title: "Trauma Integration",
      subtitle: "Somatic Listening",
      description: "Creating secure, structured soundscapes that help individuals reprocess trauma triggers in a safe, grounding environment.",
      path: "/focus-areas"
    },
    {
      title: "Loneliness & Isolation",
      subtitle: "Communal Resonance",
      description: "Uniting people in group sound baths, drumming circles, and collective listening sessions to build a sense of belonging.",
      path: "/focus-areas"
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-bg w-full">
      <Container>
        <SectionTitle
          title="Focus Areas"
          subtitle="Explore our research-backed musical programs configured to target specific mental health challenges."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {focusAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-55px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="bg-surface border border-border p-8 flex flex-col justify-between group h-full transition-all duration-300 hover:border-primary-accent"
            >
              <div>
                <span className="font-sans text-xs tracking-widest text-secondary-accent uppercase block mb-2 font-medium">
                  {area.subtitle}
                </span>
                <h3 className="font-serif text-lg sm:text-xl text-primary-text font-normal mb-4 group-hover:text-primary-accent transition-colors duration-300">
                  {area.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-secondary-text leading-relaxed mb-8">
                  {area.description}
                </p>
              </div>
              <Button to={area.path} variant="tertiary" className="self-start text-xxs font-semibold">
                Learn More
              </Button>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
