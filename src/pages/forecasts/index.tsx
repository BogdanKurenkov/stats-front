import { SEO } from '@/shared';
import { NextPageWithLayout } from '@/shared/types';
import { FeaturedMatches, ForecastsAbout, ForecastsHero, ForecastsList } from '@/widgets';

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