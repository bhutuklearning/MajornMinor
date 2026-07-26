import React, { useRef } from 'react';
import SEO from '../../components/common/SEO';
import Hero from '../../components/sections/Hero';
import MissionSection from '../../components/sections/MissionSection';
import QuoteSection from '../../components/sections/QuoteSection';
import WhatWeDo from '../../components/sections/WhatWeDo';
import Objectives from '../../components/sections/Objectives';
import FocusAreasPreview from '../../components/sections/FocusAreasPreview';
import GalleryPreview from '../../components/sections/GalleryPreview';
import CTA from '../../components/sections/CTA';
import SectionDivider from '../../components/ui/SectionDivider';

/**
 * The complete Home Page compiling Hero, Mission Statement, Quote, Focus Areas Preview,
 * Interactive Gallery, and CTA segments.
 */
export default function Home() {
  const missionRef = useRef(null);

  const handleExploreClick = () => {
    // Elegant smooth scroll to the core mission section
    missionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      {/* SEO Metadata injection for Home Page */}
      <SEO 
        title="Music-Based Mental Wellness" 
        description="Major & Minor is a music-based mental wellness initiative founded at IIT Kharagpur. We guide recovery from anxiety, stress, loneliness, and trauma using research-backed sound therapies." 
        canonicalPath="/"
        breadcrumbs={[{ name: 'Home', path: '/' }]}
      />
      
      {/* Hero Section */}
      <Hero onExploreClick={handleExploreClick} />
      
      {/* Mission Section Wrapper for scroll-anchoring */}
      <div ref={missionRef} className="scroll-mt-16">
        <MissionSection id="philosophy" />
      </div>

      {/* Plato Quote Segment */}
      <QuoteSection 
        quote="Music is a moral law. It gives soul to the universe, wings to the mind, flight to the imagination, and charm and gaiety to life and to everything."
        author="Plato"
        title="The Republic"
      />

      {/* What We Do Segment (IKS IIT Delhi inspired) */}
      <WhatWeDo />

      {/* Objectives Segment (IKS IIT Delhi inspired) */}
      <Objectives />

      {/* Focus Areas Preview Cards */}
      <FocusAreasPreview />

      <SectionDivider />

      {/* Editorial Lightbox Gallery */}
      <GalleryPreview />

      {/* Final Action CTA Block */}
      <CTA />
    </>
  );
}
