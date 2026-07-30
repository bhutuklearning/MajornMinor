import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../../components/common/SEO';
import PageBanner from '../../components/ui/PageBanner';
import Container from '../../components/ui/Container';
import CTA from '../../components/sections/CTA';
import { IMAGES } from '../../constants/images';

// Import team member photos (resourced from current placeholder assets matching original attachments)
import satyabrataPhoto from '../../assets/images/hero-home.jpg'; // photo_2026-07-15_20-57-34.jpg
import alakanandaPhoto from '../../assets/images/alokananda.jpg';
import kaberiPhoto from '../../assets/images/gallery-1.jpg';       // photo_2026-07-15_20-57-41.jpg
import debaratiPhoto from '../../assets/images/gallery-2.jpg';     // photo_2026-07-15_20-57-45.jpg
import somnathPhoto from '../../assets/images/gallery-3.jpg';      // photo_2026-07-15_20-57-47.jpg
import anandaroopPhoto from '../../assets/images/anandaroop.png';
import joysenPhoto from '../../assets/images/joysen.png';
import arnabroyPhoto from '../../assets/images/arnabroy.png';
import rajlakshmiPhoto from '../../assets/images/rajlakshmi.png';
import arindampatraPhoto from '../../assets/images/arindampatra.png';
import amiyangshudePhoto from '../../assets/images/amiyangshude.jpeg';
import vikashjhaPhoto from '../../assets/images/vikashjha.png';

/**
 * Our Team page showcasing project investigators, advisory members, and core staff,
 * organized into filterable segments using smooth tab transitions and authentic photos.
 */
export default function Team() {
  const [activeFilter, setActiveFilter] = useState('pi-copi');

  const filters = [
    { key: 'pi-copi', label: 'PI & Co-PI' },
    { key: 'advisory', label: 'Advisory Committee' },
    { key: 'team-members', label: 'Team Members' },
    { key: 'expert-team', label: 'Expert Team' }
  ];

  const teamMembers = [
    // PI & Co-PI
    {
      name: "Mr. Animesh Patra",
      role: "Principal Investigator (PI)",
      affiliation: "Department of Bioscience and Biotechnology, IIT Kharagpur",
      category: "pi-copi",
      photo: null
    },
    {
      name: "Prof. Anandaroop Bhattacharya",
      role: "Co-Principal Investigator",
      affiliation: "Department of Mechanical Engineering, IIT Kharagpur",
      category: "pi-copi",
      photo: anandaroopPhoto
    },
    // Advisory Committee
    {
      name: "Prof. Joy Sen",
      role: "Professor",
      affiliation: "Department of Architecture & Regional Planning, IIT Kharagpur",
      category: "advisory",
      photo: joysenPhoto
    },
    {
      name: "Prof. Arnab Roy",
      role: "Professor",
      affiliation: "Department of Aerospace Engineering, IIT Kharagpur",
      category: "advisory",
      photo: arnabroyPhoto
    },
    {
      name: "Prof. Rajlakshmi Guha",
      role: "Associate Professor",
      affiliation: "Rekhi Centre of Excellence for the Science of Happiness, IIT Kharagpur",
      category: "advisory",
      photo: rajlakshmiPhoto
    },
    {
      name: "Prof. Arindam Patra",
      role: "Assistant Professor",
      affiliation: "Department of Humanities, O.P. Jindal University",
      category: "advisory",
      photo: arindampatraPhoto,
      objectPosition: "object-top"
    },
    {
      name: "Prof. Amiyangshu De",
      role: "Associate Professor",
      affiliation: "School of Pharmacy, Seacom Skills University",
      category: "advisory",
      photo: amiyangshudePhoto,
      objectPosition: "object-top"
    },
    // Team Members
    {
      name: "Satyabrata Acharya",
      role: "Project Lead – Conceptual Design & Research Implementation",
      affiliation: "National Digital Library of India (NDLI), IIT Kharagpur",
      category: "team-members",
      photo: satyabrataPhoto
    },
    {
      name: "Somnath Maiti",
      role: "Program Coordinator & Technical Operations Lead",
      affiliation: "Academic Section, IIT Kharagpur",
      category: "team-members",
      photo: somnathPhoto
    },
    {
      name: "Alakananda Roy",
      role: "Indian Music Expert & Training Lead",
      affiliation: "Department of Aerospace Engineering, IIT Kharagpur",
      category: "team-members",
      photo: alakanandaPhoto,
      objectPosition: "object-top"
    },
    {
      name: "Kaberi Ganguly",
      role: "Community Engagement & Expressive Facilitation Coordinator",
      affiliation: "Independent Voice Artist (Recitation), IIT Kharagpur Campus Community",
      category: "team-members",
      photo: kaberiPhoto
    },
    {
      name: "Debarati Acharya",
      role: "Mental Health & Well-Being Specialist",
      affiliation: "SETU, IIT Kharagpur",
      category: "team-members",
      photo: debaratiPhoto
    },
    {
      name: "Vikash Ranjan Jha",
      role: "Clinical Psychologist and Senior Counsellor",
      affiliation: "SETU, IIT Kharagpur",
      category: "team-members",
      photo: vikashjhaPhoto
    },
    // Expert Team
    {
      name: "Amritanshu Goutam",
      role: "Technical & Research Support",
      affiliation: "",
      category: "expert-team",
      photo: null
    },
    {
      name: "Avoy Sasmal",
      role: "Technical & Research Support",
      affiliation: "",
      category: "expert-team",
      photo: null
    },
    {
      name: "Sayan Pal",
      role: "Researcher",
      affiliation: "",
      category: "expert-team",
      photo: null
    }
  ];

  // Filter members based on selected tab
  const filteredMembers = teamMembers.filter(member => member.category === activeFilter);

  // Helper to extract initials for placeholder avatars
  const getInitials = (name) => {
    const cleanName = name.replace(/^(Prof\.|Dr\.|Shri|Mr\.)\s+/i, '');
    const parts = cleanName.split(' ');
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
    }
    return cleanName.substring(0, 2).toUpperCase();
  };

  return (
    <>
      <SEO 
        title="Our Research & Project Team" 
        description="Meet the core team of Principal Investigators, advisory members, music experts, and coordinators driving Pranava-Music Therapy Lab's research at IIT Kharagpur." 
        canonicalPath="/team"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Team', path: '/team' }
        ]}
      />

      {/* Hero Page Banner */}
      <PageBanner 
        image={IMAGES.about.hero} 
        alt="Pranava-Music Therapy Lab project team banner"
        title="Our Team" 
        subtitle="About Us"
      />

      <section className="py-20 sm:py-28 bg-surface w-full">
        <Container>
          {/* Header Title Block */}
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="font-sans text-xs tracking-widest uppercase text-secondary-accent font-semibold block animate-pulse">
              Pranava Music Therapy Lab
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-primary-text font-normal">
              Meet the minds behind our music-based wellness initiative
            </h2>
            <div className="w-12 h-[2px] bg-secondary-accent mx-auto"></div>
          </div>

          {/* Filtering Tabs - styled precisely like the Events filtering */}
          <div className="flex flex-wrap justify-center gap-2 mb-16 border-b border-border pb-6">
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
                    layoutId="activeTeamFilterBorder"
                    className="absolute bottom-0 left-4 right-4 h-[1.5px] bg-primary-accent"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Grid Layout of Team Members with Exit/Enter animations */}
          <motion.div 
            layout 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center min-h-[400px]"
          >
            <AnimatePresence mode="popLayout">
              {filteredMembers.map((member, index) => (
                <motion.div
                  layout
                  key={member.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="bg-bg border border-border/65 p-6 flex flex-col items-center text-center group rounded-2xl hover:border-primary-accent hover:shadow-lg transition-all duration-300 h-full justify-between"
                >
                  <div className="w-full flex flex-col items-center">
                    {/* Avatar Container: Square aspect ratio */}
                    <div className="w-full aspect-square rounded-xl overflow-hidden bg-gradient-to-tr from-[#172b29] to-[#2d524e] border border-primary-accent/15 flex items-center justify-center relative shadow-inner group-hover:shadow-md transition-all duration-300">
                      {member.photo ? (
                        <img 
                          src={member.photo} 
                          alt={member.name} 
                          className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${member.objectPosition || 'object-center'}`} 
                          loading="lazy"
                        />
                      ) : (
                        <>
                          {/* Subtle vector background overlay */}
                          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#FACC15_1px,transparent_1px)] [background-size:16px_16px]"></div>
                          
                          {/* Elegant Initials in Serif */}
                          <span className="font-serif text-4xl sm:text-5xl text-secondary-accent tracking-wider font-light drop-shadow-sm transition-transform duration-500 group-hover:scale-110 select-none">
                            {getInitials(member.name)}
                          </span>
                        </>
                      )}
                      
                      {/* Glowing warm ambient overlay on hover */}
                      <div className="absolute inset-0 bg-secondary-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    </div>

                    {/* Team Details */}
                    <h3 className="font-serif text-lg text-primary-text font-normal mt-5 leading-tight group-hover:text-primary-accent transition-colors duration-300">
                      {member.name}
                    </h3>
                    
                    <span className="font-sans text-[10px] tracking-wider uppercase text-secondary-accent font-semibold mt-2 px-2.5 py-1 bg-surface border border-border rounded-full shadow-sm">
                      {member.role}
                    </span>
                  </div>
                  
                  {member.affiliation && (
                    <p className="font-sans text-xs text-secondary-text mt-4 leading-relaxed border-t border-border/40 pt-3.5 w-full">
                      {member.affiliation}
                    </p>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
