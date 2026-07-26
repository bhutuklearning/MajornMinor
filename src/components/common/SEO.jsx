import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://major-and-minor.vercel.app';
const SITE_NAME = 'Pranava-Music Therapy Lab';
const DEFAULT_OG_IMAGE = `${SITE_URL}/P_logo.png`;

/**
 * Reusable SEO manager utilizing react-helmet-async to update document heads dynamically.
 * Injects primary meta tags, Open Graph, Twitter Card, canonical URL,
 * and per-page BreadcrumbList structured data for rich search results.
 */
export default function SEO({
  title,
  description,
  canonicalPath,       // e.g. "/about" — relative path for this page
  ogType = 'website',
  ogImage,
  twitterCard = 'summary_large_image',
  breadcrumbs = []     // [{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }]
}) {
  // Browser tab always shows the brand name.
  const titleTag = SITE_NAME;

  const defaultDesc =
    'Pranava is a music-based mental wellness initiative founded at IIT Kharagpur. We use research-backed sound therapies to alleviate anxiety, stress, trauma, and loneliness.';
  const metaDescription = description || defaultDesc;

  // Build absolute canonical URL from optional relative path
  const canonicalUrl = canonicalPath
    ? `${SITE_URL}${canonicalPath}`
    : typeof window !== 'undefined'
    ? window.location.origin + window.location.pathname
    : SITE_URL;

  const imageUrl = ogImage || DEFAULT_OG_IMAGE;

  // Build BreadcrumbList JSON-LD only when breadcrumbs are provided
  const breadcrumbSchema =
    breadcrumbs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: breadcrumbs.map((crumb, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            name: crumb.name,
            item: `${SITE_URL}${crumb.path}`
          }))
        }
      : null;

  return (
    <Helmet>
      {/* Primary HTML Meta Tags */}
      <title>{titleTag}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={titleTag} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={titleTag} />

      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={titleTag} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:site" content="@pranavamusictherapylab" />

      {/* BreadcrumbList Structured Data */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  );
}
