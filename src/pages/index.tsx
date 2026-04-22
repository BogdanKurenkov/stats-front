import { FAQ, FeaturedMatches, HowToChooseBookmaker, MainInfo, StepsToBet } from "@/widgets";

import { SEO } from "@/shared";

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
