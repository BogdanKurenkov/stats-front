import dynamic from 'next/dynamic';
import { BonusesHero, BonusesList } from '@/widgets';

import { SEO, NextPageWithLayout } from '@/shared';


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

export async function getServerSideProps({ locale }: { locale: string }) {
  const messages = await import(`../../../public/locales/${locale}/common.json`);

  return {
    props: {
      messages: messages.default,
    },
  };
}