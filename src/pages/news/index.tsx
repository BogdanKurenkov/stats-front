import { NewsList } from '@/widgets';
import { MOCK_NEWS } from '@/widgets/NewsList';

import { SEO } from '@/shared';
import { NextPageWithLayout } from '@/shared/types';

const NewsPage: NextPageWithLayout = () => {
  return <>
    <SEO title="Новости" />
    <NewsList articles={MOCK_NEWS} />
  </>;
};

NewsPage.layout = 'main';

export default NewsPage;