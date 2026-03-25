import { SEO } from "@/shared";
import { FAQ, FeaturedMatches, HowToChooseBookmaker, MainInfo, StepsToBet } from "@/widgets";

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
