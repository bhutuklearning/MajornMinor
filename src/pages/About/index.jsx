import React from 'react';
import SEO from '../../components/common/SEO';
import PageBanner from '../../components/ui/PageBanner';
import StorySection from '../../components/sections/StorySection';
import MissionVision from '../../components/sections/MissionVision';
import CoreValues from '../../components/sections/CoreValues';
import ResearchPhilosophy from '../../components/sections/ResearchPhilosophy';
import FocusAreasPreview from '../../components/sections/FocusAreasPreview';
import CTA from '../../components/sections/CTA';
import { IMAGES } from '../../constants/images';

/**
 * The complete About Page compiling History, Mission & Vision, Core Values,
 * Research Philosophy, Focus Areas Preview, and CTA blocks.
 */
export default function About() {
  return (
    <>
      {/* SEO Metadata injection for About Page */}
      <SEO 
        title="About Our Story & Philosophy" 
        description="Learn about the origins of Pranava, our science-backed wellness mission, core values of compassion and simplicity, and autonomic nerve stimulation research — founded at IIT Kharagpur." 
        canonicalPath="/about"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' }
        ]}
      />

      {/* Hero Page Banner */}
      <PageBanner 
        image={IMAGES.about.hero} 
        alt={IMAGES.about.heroAlt}
        title="Our Story & Philosophy" 
        subtitle="About Us"
      />

      {/* Origin Story Section */}
      <StorySection />

      {/* Mission & Vision Cards */}
      <MissionVision />

      {/* Core Values Pillars */}
      <CoreValues />

      {/* Evidence-based Research Section */}
      <ResearchPhilosophy />

      {/* Reusable Focus Areas Grid */}
      <FocusAreasPreview />

      {/* Reusable final CTA Banner */}
      <CTA />
    </>
  );
}
