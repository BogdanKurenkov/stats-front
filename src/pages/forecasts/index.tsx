import { FeaturedMatches, ForecastsAbout, ForecastsHero, ForecastsList } from '@/widgets';

import { SEO } from '@/shared';
import { NextPageWithLayout } from '@/shared/types';

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