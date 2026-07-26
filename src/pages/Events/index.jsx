import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import SEO from '../../components/common/SEO';
import PageBanner from '../../components/ui/PageBanner';
import Container from '../../components/ui/Container';
import Button from '../../components/ui/Button';
import CTA from '../../components/sections/CTA';
import { IMAGES } from '../../constants/images';

/**
 * Events and Workshops page featuring category filters, clean list cards,
 * and responsive details.
 */
export default function Events() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { key: 'all', label: 'All Events' },
    { key: 'sound-baths', label: 'Sound Baths' },
    { key: 'academic-seminars', label: 'Seminars' },
    { key: 'community-circles', label: 'Communal Circles' }
  ];

  const eventsList = [
    {
      id: 1,
      title: "Sonic Sanctuary Bath",
      category: "sound-baths",
      categoryLabel: "Sound Baths",
      date: "August 12, 2026",
      time: "7:00 PM - 8:30 PM",
      venue: "Metropolitan Calm Center, NY",
      description: "An immersive evening of auditory meditation. Relax your autonomic nervous system with quartz singing bowls, gongs, and ambient cello resonance."
    },
    {
      id: 2,
      title: "Acoustic Neuroscience Symposium",
      category: "academic-seminars",
      categoryLabel: "Academic Seminars",
      date: "August 24, 2026",
      time: "2:00 PM - 5:00 PM",
      venue: "Manhattan Science & Art Institute, NY",
      description: "A panel discussion exploring current clinical findings in auditory entrainment, vagal nerve stimulation, and psychoacoustic recovery pathways."
    },
    {
      id: 3,
      title: "Communal Vocal Toning Circle",
      category: "community-circles",
      categoryLabel: "Community Circles",
      date: "September 08, 2026",
      time: "6:30 PM - 8:00 PM",
      venue: "Harmony Community Hall, Brooklyn",
      description: "A collective vocal pacing session using organic drone humming and group rhythm circles to de-escalate anxiety and bridge social isolation."
    },
    {
      id: 4,
      title: "Evening Reflection Sound Meditation",
      category: "sound-baths",
      categoryLabel: "Sound Baths",
      date: "September 15, 2026",
      time: "8:00 PM - 9:15 PM",
      venue: "Metropolitan Calm Center, NY",
      description: "A quiet, slow-tempo acoustic pacing meditation designed to support sleep preparation and alleviate high stress levels."
    }
  ];

  // Filter items
  const filteredEvents = activeFilter === 'all' 
    ? eventsList 
    : eventsList.filter(e => e.category === activeFilter);

  const handleRegister = (eventTitle) => {
    // Navigate to contact with pre-filled state
    navigate(`/contact?subject=booking&event=${encodeURIComponent(eventTitle)}`);
  };

  return (
    <>
      <SEO 
        title="Events & Workshops" 
        description="Join us for restorative Sound Baths, academic psychoacoustic Seminars, and group Communal Listening Circles. Book your place at a Pranava event today." 
        canonicalPath="/events"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Events', path: '/events' }
        ]}
      />

      <PageBanner 
        image={IMAGES.gallery[2].src} 
        alt="Events and workshops header banner"
        title="Events &amp; Workshops" 
        subtitle="Events"
      />

      <section className="py-20 bg-surface w-full">
        <Container>
          {/* Filtering Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-16 border-b border-divider pb-6">
            {filters.map(filter => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-5 py-2 font-sans text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 relative ${
                  activeFilter === filter.key
                    ? 'text-primary-accent font-semibold'
                    : 'text-secondary-text hover:text-primary-text'
                }`}
              >
                {filter.label}
                {activeFilter === filter.key && (
                  <motion.div
                    layoutId="activeFilterBorder"
                    className="absolute bottom-0 left-4 right-4 h-[1.5px] bg-primary-accent"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Events Listings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <AnimatePresence mode="popLayout">
              {filteredEvents.map(event => (
                <motion.div
                  layout
                  key={event.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  className="bg-bg border border-border p-8 flex flex-col justify-between h-full"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-start gap-4">
                      <span className="font-sans text-xs tracking-widest text-secondary-accent uppercase font-medium">
                        {event.categoryLabel}
                      </span>
                      <span className="font-sans text-xs text-secondary-text">
                        {event.date}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl text-primary-text font-normal">
                      {event.title}
                    </h3>
                    
                    <p className="font-sans text-xs sm:text-sm text-secondary-text leading-relaxed">
                      {event.description}
                    </p>

                    <div className="pt-2 font-sans text-xs text-secondary-text space-y-1">
                      <p><span className="font-medium text-primary-text">Time:</span> {event.time}</p>
                      <p><span className="font-medium text-primary-text">Venue:</span> {event.venue}</p>
                    </div>
                  </div>

                  <div className="pt-8">
                    <Button 
                      onClick={() => handleRegister(event.title)}
                      className="w-full sm:w-auto"
                    >
                      Register Info
                    </Button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
