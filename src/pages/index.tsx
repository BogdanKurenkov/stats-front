import dynamic from "next/dynamic";

import { Hero as MainHero } from "@/widgets";

const OurTeam = dynamic(() => import("@/widgets").then((mod) => mod.OurTeam));
const ForecastsCreationSteps = dynamic(() =>
  import("@/widgets").then((mod) => mod.ForecastsCreationSteps),
);
const FAQ = dynamic(() => import("@/widgets").then((mod) => mod.FAQ));
const BestOdds = dynamic(() => import("@/widgets").then((mod) => mod.BestOdds));

import { loadMessages, Seo } from "@/shared";

export default function Home() {
  return (
    <>
      <Seo title="Главная" />
      <MainHero />
      {/* <FeaturedMatches /> */}
      <OurTeam />
      <ForecastsCreationSteps />
      <BestOdds />
      <FAQ />
    </>
  );
}

export async function getServerSideProps({ locale }: { locale: string }) {
  const messages = await loadMessages(locale);

  return {
    props: {
      messages,
    },
  };
}
