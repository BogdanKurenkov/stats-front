import { NewsList } from "@/widgets";
import { MOCK_NEWS } from "@/widgets/NewsList";

import { Seo, type NextPageWithLayout, loadMessages } from "@/shared";

const NewsPage: NextPageWithLayout = () => {
  return (
    <>
      <Seo title="Новости" />
      <NewsList articles={MOCK_NEWS} />
    </>
  );
};

NewsPage.layout = "main";

export default NewsPage;

export async function getServerSideProps({ locale }: { locale: string }) {
  const messages = await loadMessages(locale);

  return {
    props: {
      messages,
    },
  };
}
