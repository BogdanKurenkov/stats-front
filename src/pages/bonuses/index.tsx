import { BonusesHero, BonusesList, BonusesRules, BonusesTypes } from '@/widgets';

import { SEO } from '@/shared';
import { NextPageWithLayout } from '@/shared/types';

const BonusesPage: NextPageWithLayout = () => {
  return <>
    <SEO title="Бонусы" />
    <BonusesHero />
    <BonusesList />
    <BonusesTypes />
    <BonusesRules />
  </>;
};

BonusesPage.layout = 'main';

export default BonusesPage;