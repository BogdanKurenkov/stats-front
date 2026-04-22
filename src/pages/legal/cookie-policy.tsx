import { NextPage } from 'next';

import { CookiePolicy } from '@/widgets';

import { SEO } from '@/shared';

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