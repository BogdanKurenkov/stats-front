import { Seo, type NextPageWithLayout, loadMessages } from "@/shared";

const PartnersPage: NextPageWithLayout = () => {
  return (
    <>
      <Seo title="Прогнозы" />
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
