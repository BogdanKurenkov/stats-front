import Head from 'next/head';
import { useRouter } from 'next/router';
import type { FC } from 'react';

import { SITE_NAME, SITE_URL, SITE_DESCRIPTION, DEFAULT_OG_IMAGE } from '@/shared/config';

import type { SeoProps } from './Seo.types';

const LOCALES = ['pt', 'en', 'es', 'ru'] as const;
const DEFAULT_LOCALE = 'pt';

const withLocale = (cleanPath: string, locale: string) => {
  const clean = cleanPath === '/' ? '' : cleanPath;
  if (locale === DEFAULT_LOCALE) return clean || '';
  return `/${locale}${clean}`;
};

const toCleanPath = (input: string): string => {
  let path = input;

  if (/^https?:\/\//i.test(path)) {
    try {
      path = new URL(path).pathname;
    } catch {
    }
  }

  path = path.split('?')[0].split('#')[0];

  const parts = path.split('/').filter(Boolean);
  if (parts.length && (LOCALES as readonly string[]).includes(parts[0]) && parts[0] !== DEFAULT_LOCALE) {
    parts.shift();
  }

  const joined = '/' + parts.join('/');
  return joined === '/' ? '/' : joined.replace(/\/$/, '');
};

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
  const router = useRouter();

  const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;

  const defaultJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: fullTitle,
    url: canonical || SITE_URL,
    description,
  };

  const finalJsonLd = jsonLd || defaultJsonLd;

  const cleanPath = toCleanPath(canonical || router.asPath);

  const hreflangs = LOCALES.map((locale) => ({
    locale,
    href: `${SITE_URL}${withLocale(cleanPath, locale)}`,
  }));

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {canonical && <link rel="canonical" href={canonical} />}

      {hreflangs.map(({ locale, href }) => (
        <link key={locale} rel="alternate" hrefLang={locale} href={href} />
      ))}
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`${SITE_URL}${withLocale(cleanPath, DEFAULT_LOCALE)}`}
      />

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