import { Seo, type NextPageWithLayout, loadMessages } from "@/shared";

import {
  AboutCta,
  AboutHero,
  AboutMission,
  AboutPrinciples,
  AboutVerifiability,
  AboutWhatWeDo,
} from "@/widgets";

const AboutPage: NextPageWithLayout = () => {
  return (
    <>
      <Seo title="О нас" />
      <AboutHero />
      <AboutMission />
      <AboutWhatWeDo />
      <AboutPrinciples />
      <AboutVerifiability />
      <AboutCta />
    </>
  );
};

AboutPage.layout = "main";

export default AboutPage;

export async function getServerSideProps({ locale }: { locale: string }) {
  const messages = await loadMessages(locale);

  return {
    props: {
      messages,
    },
  };
}
