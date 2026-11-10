import { Seo, type NextPageWithLayout, loadMessages } from "@/shared";

const BroadcastsPage: NextPageWithLayout = () => {
  return (
    <>
      <Seo title="Прогнозы" />
    </>
  );
};

BroadcastsPage.layout = "main";

export default BroadcastsPage;

export async function getServerSideProps({ locale }: { locale: string }) {
  const messages = await loadMessages(locale);

  return {
    props: {
      messages,
    },
  };
}
