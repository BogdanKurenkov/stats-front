import { FAQ, PartnersApproach } from "@/widgets";

import { Seo, type NextPageWithLayout, loadMessages } from "@/shared";

const PartnersPage: NextPageWithLayout = () => {
  return (
    <>
      <Seo title="Прогнозы" />
      <PartnersApproach />
      <FAQ variant="partners" />
    </>
  );
};

PartnersPage.layout = "main";

export default PartnersPage;

export async function getServerSideProps({ locale }: { locale: string }) {
  const messages = await loadMessages(locale);

  return {
    props: {
      messages,
    },
  };
}
