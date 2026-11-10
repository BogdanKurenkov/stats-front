import { Seo, type NextPageWithLayout, loadMessages } from "@/shared";

const StatisticsPage: NextPageWithLayout = () => {
  return (
    <>
      <Seo title="Статистика" />
    </>
  );
};

StatisticsPage.layout = "main";

export default StatisticsPage;

export async function getServerSideProps({ locale }: { locale: string }) {
  const messages = await loadMessages(locale);

  return {
    props: {
      messages,
    },
  };
}
