import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import SEO from '../../components/common/SEO';
import PageBanner from '../../components/ui/PageBanner';
import Container from '../../components/ui/Container';
import Button from '../../components/ui/Button';
import CTA from '../../components/sections/CTA';
import { IMAGES } from '../../constants/images';

/**
 * Restructured Events and Workshops page showcasing only official upcoming
 * campus events and workshops at IIT Kharagpur, eliminating all placeholder data.
 */
export default function Events() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { key: 'all', label: 'All Events' },
    { key: 'sound-workshops', label: 'Workshops' },
    { key: 'academic-seminars', label: 'Seminars' }
  ];

  const eventsList = [
    {
      id: 1,
      title: "Pranava Raga-Chikitsa Workshop",
      category: "sound-workshops",
      categoryLabel: "Sound Workshops",
      date: "Upcoming Event",
      time: "To be notified later",
      venue: "Academy of Classical and Folk Arts, IIT Kharagpur (To be notified later)",
      registration: "To be notified later (via Google Form)",
      description: "An experiential research-backed workshop exploring civilizational musicology and raga-based sound therapy. Participants will experience structured therapeutic soundscapes utilizing classical Indian instruments designed to regulate physiological stress markers."
    }
  ];

  // Filter items
  const filteredEvents = activeFilter === 'all' 
    ? eventsList 
    : eventsList.filter(e => e.category === activeFilter);

  const handleRegister = (eventTitle) => {
    toast.success(`Thank you for your interest! We will notify you once registrations open for the ${eventTitle}.`);
    // Also navigate to contact after a slight delay
    setTimeout(() => {
      navigate(`/contact?subject=booking&event=${encodeURIComponent(eventTitle)}`);
    }, 1500);
  };

  return (
    <>
      <SEO 
        title="Events & Workshops" 
        description="Join us for restorative Sound Workshops and academic psychoacoustic Seminars at IIT Kharagpur. Register interest for upcoming events today." 
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

          {/* Events Listings Container */}
          <div className="max-w-3xl mx-auto">
            <AnimatePresence mode="popLayout">
              {filteredEvents.length > 0 ? (
                filteredEvents.map(event => (
                  <motion.div
                    layout
                    key={event.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.5 }}
                    className="bg-bg border border-primary-accent/15 hover:border-primary-accent/30 rounded-2xl p-8 sm:p-10 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 relative group"
                  >
                    {/* Glowing highlight edge */}
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary-accent via-secondary-accent to-primary-accent rounded-t-2xl opacity-75"></div>

                    <div className="space-y-6">
                      <div className="flex flex-wrap justify-between items-center gap-4">
                        <span className="px-3 py-1 bg-secondary-accent/10 border border-secondary-accent/20 rounded-full font-sans text-[10px] tracking-widest text-secondary-accent uppercase font-semibold">
                          {event.categoryLabel}
                        </span>
                        
                        {/* Upcoming Event Banner */}
                        <span className="px-3 py-1 bg-primary-accent/10 border border-primary-accent/30 rounded-full font-sans text-[10px] tracking-widest text-primary-accent uppercase font-bold shadow-sm">
                          {event.date}
                        </span>
                      </div>

                      <h3 className="font-serif text-2xl sm:text-3xl text-primary-text font-normal leading-tight group-hover:text-primary-accent transition-colors duration-300">
                        {event.title}
                      </h3>
                      
                      <p className="font-sans text-xs sm:text-sm text-secondary-text leading-relaxed">
                        {event.description}
                      </p>

                      <div className="pt-5 border-t border-divider/60 font-sans text-xs sm:text-sm text-secondary-text space-y-3">
                        <div className="flex items-start">
                          <span className="font-semibold text-primary-text uppercase tracking-wider text-[10px] w-28 shrink-0 mt-0.5">Time:</span>
                          <span className="text-secondary-text font-medium">{event.time}</span>
                        </div>
                        <div className="flex items-start">
                          <span className="font-semibold text-primary-text uppercase tracking-wider text-[10px] w-28 shrink-0 mt-0.5">Venue:</span>
                          <span className="text-secondary-text font-medium">{event.venue}</span>
                        </div>
                        <div className="flex items-start">
                          <span className="font-semibold text-primary-text uppercase tracking-wider text-[10px] w-28 shrink-0 mt-0.5">Registration:</span>
                          <span className="text-primary-accent italic font-semibold">{event.registration}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-8 flex flex-col sm:flex-row gap-4 items-center">
                      <Button 
                        onClick={() => handleRegister(event.title)}
                        className="w-full sm:w-auto px-8"
                      >
                        Notify Me
                      </Button>
                      <span className="text-[11px] font-sans text-secondary-text/80 italic text-center sm:text-left">
                        Click to register interest and be notified once Google Form is released.
                      </span>
                    </div>
                  </motion.div>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-16 bg-bg/50 border border-dashed border-border rounded-2xl p-8"
                >
                  <p className="font-serif text-lg text-primary-text mb-2">No Scheduled Events</p>
                  <p className="font-sans text-xs text-secondary-text max-w-sm mx-auto">
                    There are no upcoming events in this category at the moment. Please select another tab or register interest to be notified of future dates.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
