import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SEOProps } from '../../types';

const SEOHead: React.FC<SEOProps> = ({
  title = 'Dharmil Shah - Full-Stack Developer Portfolio',
  description = 'Passionate full-stack developer specializing in React, TypeScript, Node.js, and cloud technologies. View my portfolio, projects, and resume.',
  keywords = 'Dharmil Shah, Full-Stack Developer, React, TypeScript, Node.js, AWS, Cloud, Portfolio, Web Development',
  image = '/og-image.jpg',
  url = 'https://dharmilshah.dev'
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Dharmil Shah" />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Dharmil Shah Portfolio" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={url} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Dharmil Shah",
          "jobTitle": "Full-Stack Developer",
          "url": url,
          "sameAs": [
            "https://linkedin.com/in/dharmil4602",
            "https://github.com/Dharmil4602"
          ],
          "worksFor": {
            "@type": "Organization",
            "name": "PRGC Group|Live"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;