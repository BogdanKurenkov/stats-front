import dynamic from "next/dynamic";

import { ForecastsHero } from "@/widgets";

const FeaturedMatches = dynamic(() =>
  import("@/widgets").then((mod) => mod.FeaturedMatches),
);
const ForecastsList = dynamic(() =>
  import("@/widgets").then((mod) => mod.ForecastsList),
);
const ForecastsAbout = dynamic(() =>
  import("@/widgets").then((mod) => mod.ForecastsAbout),
);

import { Seo, type NextPageWithLayout, loadMessages } from "@/shared";

const ForecastsPage: NextPageWithLayout = () => {
  return (
    <>
      <Seo title="Прогнозы" />
      <ForecastsHero />
      <FeaturedMatches />
      <ForecastsList />
      <ForecastsAbout />
    </>
  );
};

ForecastsPage.layout = "main";

export default ForecastsPage;

export async function getServerSideProps({ locale }: { locale: string }) {
  const messages = await loadMessages(locale);

  return {
    props: {
      messages,
    },
  };
}
