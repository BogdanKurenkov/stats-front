import Head from 'next/head';
import type { FC } from 'react';

import { SITE_NAME, SITE_URL, SITE_DESCRIPTION, DEFAULT_OG_IMAGE } from '@/shared/config';

import type { SeoProps } from './Seo.types';

export const Seo: FC<SeoProps> = ({
  title = SITE_NAME,
  description = SITE_DESCRIPTION,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  noIndex = false,
  keywords,
  jsonLd,
}) => {
  const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;

  const defaultJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: fullTitle,
    url: canonical || SITE_URL,
    description,
  };

  const finalJsonLd = jsonLd || defaultJsonLd;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {canonical && <link rel="canonical" href={canonical} />}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      {canonical && <meta property="og:url" content={canonical} />}
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={SITE_NAME} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(finalJsonLd) }}
      />
    </Head>
  );
};