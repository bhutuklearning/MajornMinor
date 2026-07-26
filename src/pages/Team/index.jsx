import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../../components/common/SEO';
import PageBanner from '../../components/ui/PageBanner';
import Container from '../../components/ui/Container';
import CTA from '../../components/sections/CTA';
import { IMAGES } from '../../constants/images';

/**
 * Our Team page detailing project members, PIs, and coordinators,
 * with elegant fallback placeholders since photos are currently unavailable.
 */
export default function Team() {
  const teamMembers = [
    {
      name: "Animesh Patra",
      role: "Principal Investigator (PI)",
      affiliation: "Department of Bioscience and Biotechnology, IIT Kharagpur"
    },
    {
      name: "Prof. Anandaroop Bhattacharya",
      role: "Co-Principal Investigator",
      affiliation: "Department of Mechanical Engineering, IIT Kharagpur"
    },
    {
      name: "Satyabrata Acharya",
      role: "Project Lead – Conceptual Design & Research",
      affiliation: "National Digital Library of India (NDLI), IIT Kharagpur"
    },
    {
      name: "Alakananda Roy",
      role: "Indian Music Expert & Training Lead",
      affiliation: "Department of Aerospace Engineering, IIT Kharagpur"
    },
    {
      name: "Kaberi Ganguly",
      role: "Community Engagement & Facilitation",
      affiliation: "Independent Voice Artist (Recitation), IIT Kharagpur Campus Community"
    },
    {
      name: "Debarati Acharya",
      role: "Mental Health & Well-Being Specialist",
      affiliation: "SETU, IIT Kharagpur"
    },
    {
      name: "Somnath Maiti",
      role: "Program Coordinator & Tech Ops Lead",
      affiliation: "Academic Section, IIT Kharagpur"
    }
  ];

  // Helper to extract initials for placeholder avatars
  const getInitials = (name) => {
    // Strip prefixes like 'Prof.' or 'Dr.' for cleaner initials
    const cleanName = name.replace(/^(Prof\.|Dr\.|Shri)\s+/i, '');
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
        description="Meet the core team of Principal Investigators, music experts, and coordinators driving Pranava-Music Therapy Lab's music therapy initiative at IIT Kharagpur." 
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
            <span className="font-sans text-xs tracking-widest uppercase text-secondary-accent font-semibold block">
              Pranava Music Therapy Lab
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-primary-text font-normal">
              Meet the minds behind our music-based wellness initiative
            </h2>
            <div className="w-12 h-[2px] bg-secondary-accent mx-auto"></div>
          </div>

          {/* Grid Layout of Team Members */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="bg-bg border border-border/65 p-6 flex flex-col items-center text-center group rounded-2xl hover:border-primary-accent hover:shadow-lg transition-all duration-300"
              >
                {/* Placeholders: Square aspect ratio similar to IKS site */}
                <div className="w-full aspect-square rounded-xl overflow-hidden bg-gradient-to-tr from-[#172b29] to-[#2d524e] border border-primary-accent/15 flex items-center justify-center relative shadow-inner group-hover:shadow-md transition-all duration-300">
                  {/* Subtle vector background overlay */}
                  <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#FACC15_1px,transparent_1px)] [background-size:16px_16px]"></div>
                  
                  {/* Elegant Initials in Serif */}
                  <span className="font-serif text-4xl sm:text-5xl text-secondary-accent tracking-wider font-light drop-shadow-sm transition-transform duration-500 group-hover:scale-110 select-none">
                    {getInitials(member.name)}
                  </span>
                  
                  {/* Glowing warm ambient overlay on hover */}
                  <div className="absolute inset-0 bg-secondary-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>

                {/* Team Details */}
                <h3 className="font-serif text-lg text-primary-text font-normal mt-5 leading-tight group-hover:text-primary-accent transition-colors duration-300">
                  {member.name}
                </h3>
                
                <span className="font-sans text-xxs tracking-wider uppercase text-secondary-accent font-semibold mt-2 px-2.5 py-1 bg-surface border border-border rounded-full shadow-sm">
                  {member.role}
                </span>
                
                <p className="font-sans text-xs text-secondary-text mt-3.5 leading-relaxed">
                  {member.affiliation}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
