import dynamic from 'next/dynamic';

import { ForecastsHero } from '@/widgets';

import { SEO } from '@/shared';
import { NextPageWithLayout } from '@/shared/types';

const FeaturedMatches = dynamic(() => import('@/widgets').then(mod => mod.FeaturedMatches));
const ForecastsList = dynamic(() => import('@/widgets').then(mod => mod.ForecastsList));
const ForecastsAbout = dynamic(() => import('@/widgets').then(mod => mod.ForecastsAbout));

const ForecastsPage: NextPageWithLayout = () => {
  return <>
    <SEO title="Прогнозы" />
    <ForecastsHero />
    <FeaturedMatches />
    <ForecastsList />
    <ForecastsAbout />
  </>;
};

ForecastsPage.layout = 'main';

export default ForecastsPage;