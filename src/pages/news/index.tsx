import { NewsList } from '@/widgets';
import { MOCK_NEWS } from '@/widgets/NewsList';

import { Seo, NextPageWithLayout } from '@/shared';

const NewsPage: NextPageWithLayout = () => {
  return <>
    <Seo title="Новости" />
    <NewsList articles={MOCK_NEWS} />
  </>;
};

NewsPage.layout = 'main';

export default NewsPage;

export async function getServerSideProps({ locale }: { locale: string }) {
  const messages = await import(`../../../public/locales/${locale}/common.json`);

  return {
    props: {
      messages: messages.default,
    },
  };
}