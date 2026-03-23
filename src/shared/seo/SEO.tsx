import Head from 'next/head';
import { FC } from 'react';
import { SEOProps } from './SEO.types';

export const SEO: FC<SEOProps> = ({
  title = 'Stats',
  description = 'Актуальные прогнозы и аналитика спортивных событий',
  canonical,
  ogImage = '/og-image.png',
  ogType = 'website',
  noIndex = false,
  keywords,
}) => {
  const fullTitle = title === 'Stats' ? title : `${title} | Stats`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />

      {canonical && <link rel="canonical" href={canonical} />}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      {canonical && <meta property="og:url" content={canonical} />}
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  );
};