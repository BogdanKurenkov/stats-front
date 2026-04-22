import { NextPage } from 'next';

import { PrivacyPolicy } from '@/widgets';

import { SEO } from '@/shared';

const PrivacyPolicyPage: NextPage = () => {
  return (
    <>
      <SEO
        title="Политика конфиденциальности"
        description="Политика обработки персональных данных на сайте Stats.net"
      />
      <PrivacyPolicy />
    </>
  );
};

export default PrivacyPolicyPage;