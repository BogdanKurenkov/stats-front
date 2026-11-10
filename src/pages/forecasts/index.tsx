import { Seo, type NextPageWithLayout, loadMessages } from "@/shared";

const ForecastsPage: NextPageWithLayout = () => {
  return (
    <>
      <Seo title="Прогнозы" />
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
