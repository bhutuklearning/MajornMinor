import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * Reusable SEO manager utilizing react-helmet-async to update document heads dynamically.
 */
export default function SEO({
  title,
  description,
  canonicalUrl,
  ogType = 'website',
  ogImage,
  twitterCard = 'summary_large_image'
}) {
  const siteTitle = "Major & Minor";
  const titleTag = title ? `${title} | ${siteTitle}` : `${siteTitle} | Music & Mental Wellness`;
  const defaultDesc = "Major & Minor is a music-based mental wellness initiative, utilizing the healing power of music to alleviate anxiety, stress, depression, and trauma.";
  const metaDescription = description || defaultDesc;
  
  // Use current window location as fallback for canonical link
  const currentUrl = canonicalUrl || (typeof window !== 'undefined' ? window.location.href : '');

  return (
    <Helmet>
      {/* Primary HTML Meta Tags */}
      <title>{titleTag}</title>
      <meta name="description" content={metaDescription} />
      {currentUrl && <link rel="canonical" href={currentUrl} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={titleTag} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content="Major & Minor" />
      {ogImage && <meta property="og:image" content={ogImage} />}

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={titleTag} />
      <meta name="twitter:description" content={metaDescription} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
    </Helmet>
  );
}
