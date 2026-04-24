import dynamic from 'next/dynamic';
import { SEO } from '@/shared';
import { NextPageWithLayout } from '@/shared/types';

import { BonusesHero, BonusesList } from '@/widgets';

const BonusesTypes = dynamic(() => import('@/widgets').then(mod => mod.BonusesTypes));
const BonusesRules = dynamic(() => import('@/widgets').then(mod => mod.BonusesRules));

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