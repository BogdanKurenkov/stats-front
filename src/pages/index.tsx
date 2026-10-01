import dynamic from "next/dynamic";

import { MainInfo, FeaturedMatches } from "@/widgets";

const HowToChooseBookmaker = dynamic(() =>
  import("@/widgets").then((mod) => mod.HowToChooseBookmaker),
);
const StepsToBet = dynamic(() =>
  import("@/widgets").then((mod) => mod.StepsToBet),
);
const FAQ = dynamic(() => import("@/widgets").then((mod) => mod.FAQ));

import { loadMessages, Seo } from "@/shared";

export default function Home() {
  return (
    <>
      <Seo title="Главная" />
      <MainInfo />
      <FeaturedMatches />
      <HowToChooseBookmaker />
      <StepsToBet />
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
