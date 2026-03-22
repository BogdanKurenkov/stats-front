import { NextPageWithLayout } from '@/shared/types';
import { FeaturedMatches, ForecastsAbout, ForecastsHero, ForecastsList } from '@/widgets';

const ForecastsPage: NextPageWithLayout = () => {
  return <>
    <ForecastsHero />
    <FeaturedMatches />
    <ForecastsList />
    <ForecastsAbout />
  </>;
};

ForecastsPage.layout = 'main';

export default ForecastsPage;