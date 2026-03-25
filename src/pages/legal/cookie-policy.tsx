import { NextPage } from 'next';
import { SEO } from '@/shared';
import { CookiePolicy } from '@/widgets';

const CookiePolicyPage: NextPage = () => {
  return (
    <>
      <SEO
        title="Политика использования cookies"
        description="Информация о cookies на сайте Stats.net"
      />
      <CookiePolicy />
    </>
  );
};

export default CookiePolicyPage;