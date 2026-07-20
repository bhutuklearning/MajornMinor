import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../../components/common/SEO';
import PageBanner from '../../components/ui/PageBanner';
import Container from '../../components/ui/Container';
import CTA from '../../components/sections/CTA';
import SectionDivider from '../../components/ui/SectionDivider';
import { IMAGES } from '../../constants/images';

/**
 * Focus Areas page detailing the 4 wellness pathways: Stress, Anxiety, Trauma, and Loneliness.
 */
export default function FocusAreas() {
  const sections = [
    {
      id: "stress",
      title: "Stress Alleviation",
      subtitle: "Auditory Entrainment & Alpha Pacing",
      image: IMAGES.gallery[0].src,
      alt: "Quiet nature scene symbolizing stress relief and sound resonance.",
      description: "Auditory entrainment works by introducing specific pacing frequencies that guide hyperactive brainwaves down to slower, resting states. During high stress, the brain operates primarily in rapid Beta waves (12–30 Hz). By designing soundscapes centered around a constant 8–12 Hz Alpha rhythm, we encourage neural networks to sync with these calming frequencies. Over a 20-minute listening cycle, autonomic arousal drops, cortisol levels decline, and cognitive strain gives way to deep mental decompression.",
      points: [
        "Tempos set around adult resting heart rates (60 BPM) to naturally slow pulse.",
        "Guides neural oscillations into restorative Alpha and Theta wave bands.",
        "Fosters somatic grounding, providing immediate relief from mental exhaustion."
      ]
    },
    {
      id: "anxiety",
      title: "Anxiety Reduction",
      subtitle: "Vagal Nerve Stimulation & Resonance",
      image: IMAGES.gallery[1].src,
      alt: "Clean ripples on sand, depicting calming sound waves.",
      description: "Resonant low-frequency acoustic vibrations possess the unique capability to physically engage body tissue and stimulate the vagus nerve. By utilizing organic acoustic instruments (such as gongs, cellos, and large singing bowls), we generate sound waves that trigger the parasympathetic nervous system. This activation decreases heart rate variability conflicts, relaxes muscular tension, and signals safety directly to the emotional processing centers of the brain.",
      points: [
        "Resonant frequencies between 40–110 Hz that somatic nerve receptors register.",
        "Triggers the release of endorphins and reduces fight-or-flight sympathetic states.",
        "Builds a reliable, drug-free auditory anchor to de-escalate anxiety spikes."
      ]
    },
    {
      id: "trauma",
      title: "Trauma Integration",
      subtitle: "Somatic Listening & Grounding Soundscapes",
      image: IMAGES.gallery[2].src,
      alt: "Piano keys in soft lighting, showing peace and classical beauty.",
      description: "For individuals carrying emotional trauma, traditional speaking therapies can sometimes re-trigger somatic stress responses. Sound healing offers a non-verbal backdoor to emotional regulation. We build highly structured, predictable soundscapes using repeating harmonic scales. This architectural predictability offers a safe, grounding environment where the patient's nervous system can release stored trauma without needing to articulate the underlying memory.",
      points: [
        "Uses predictable chord progressions to eliminate acoustic startle responses.",
        "Non-verbal sensory processing bypasses cognitive blocks to access somatic memories.",
        "Developed in cooperation with certified trauma-informed music therapists."
      ]
    },
    {
      id: "loneliness",
      title: "Loneliness & Isolation",
      subtitle: "Communal Resonance & Auditory Circles",
      image: IMAGES.home.hero,
      alt: "Warm lighting reflecting off musical instruments.",
      description: "Loneliness alters neurological threat perception, causing individuals to exist in a state of chronic social hyper-vigilance. Our Communal Resonance programs address this by uniting people in shared sound fields. Participating in group sound baths, vocal tone circles, or active rhythm making synchronizes physiological states (such as breathing and heart rate) across participants. This physical resonance breaks down feelings of isolation and fosters deep, non-verbal connection.",
      points: [
        "Shared physiological synchronization through collective auditory immersion.",
        "Vocal toning and active rhythm circles stimulate mirror neuron pathways.",
        "Encourages social connection within low-stress, quiet cultural environments."
      ]
    }
  ];

  return (
    <>
      <SEO 
        title="Therapeutic Focus Areas" 
        description="Discover the science of Auditory Entrainment, Vagal Stimulation, somatic soundscapes, and communal resonance in alleviating stress, anxiety, trauma, and loneliness." 
        canonicalPath="/focus-areas"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Focus Areas', path: '/focus-areas' }
        ]}
      />

      <PageBanner 
        image={IMAGES.gallery[0].src} 
        alt="Sound therapy focus areas banner"
        title="Therapeutic Focus Areas" 
        subtitle="Focus Areas"
      />

      <div className="py-12 bg-surface w-full">
        {sections.map((sec, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div key={sec.id}>
              <section id={sec.id} className={`py-16 sm:py-24 ${isEven ? 'bg-surface' : 'bg-bg border-y border-divider'}`}>
                <Container>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    
                    {/* Text Column */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8 }}
                      className={`lg:col-span-7 space-y-6 ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}
                    >
                      <span className="font-sans text-xs tracking-widest uppercase text-secondary-accent font-semibold block">
                        {sec.subtitle}
                      </span>
                      <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-primary-text font-normal leading-tight tracking-tight">
                        {sec.title}
                      </h2>
                      <p className="font-sans text-xs sm:text-sm md:text-base text-secondary-text leading-relaxed">
                        {sec.description}
                      </p>
                      <ul className="space-y-3 pt-2">
                        {sec.points.map((point, i) => (
                          <li key={i} className="flex items-start text-xs sm:text-sm text-secondary-text">
                            <span className="text-primary-accent mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-accent flex-shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* Image Column */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.98 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8, delay: 0.15 }}
                      className={`lg:col-span-5 relative ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}
                    >
                      {/* Offset accent border */}
                      <div className="absolute inset-0 border border-primary-accent translate-x-3 translate-y-3 pointer-events-none"></div>
                      <div className="relative border border-border bg-surface overflow-hidden aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]">
                        <img
                          src={sec.image}
                          alt={sec.alt}
                          loading="lazy"
                          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out"
                        />
                      </div>
                    </motion.div>

                  </div>
                </Container>
              </section>

              {isEven && idx < sections.length - 1 && (
                <SectionDivider className="my-0 py-0" />
              )}
            </div>
          );
        })}
      </div>

      <CTA />
    </>
  );
}
