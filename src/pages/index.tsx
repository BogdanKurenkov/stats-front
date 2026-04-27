import dynamic from 'next/dynamic';

import { MainInfo, FeaturedMatches } from "@/widgets";

import { SEO } from "@/shared";

const HowToChooseBookmaker = dynamic(() => import("@/widgets").then(mod => mod.HowToChooseBookmaker));
const StepsToBet = dynamic(() => import("@/widgets").then(mod => mod.StepsToBet));
const FAQ = dynamic(() => import("@/widgets").then(mod => mod.FAQ));

export default function Home() {
  return (
    <>
      <SEO title="Главная" />
      <MainInfo />
      <FeaturedMatches />
      <HowToChooseBookmaker />
      <StepsToBet />
      <FAQ />
    </>
  );
}

export async function getServerSideProps({ locale }: { locale: string }) {
  const messages = await import(`../../public/locales/${locale}/common.json`);

  return {
    props: {
      messages: messages.default,
    },
  };
}