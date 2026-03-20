import { NextPageWithLayout } from '@/shared/types';
import { BonusesHero, BonusesList, BonusesRules, BonusesTypes } from '@/widgets';

const BonusesPage: NextPageWithLayout = () => {
  return <>
    <BonusesHero />
    <BonusesList />
    <BonusesTypes />
    <BonusesRules />
  </>;
};

BonusesPage.layout = 'main';

export default BonusesPage;