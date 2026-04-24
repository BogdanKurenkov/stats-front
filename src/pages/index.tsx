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