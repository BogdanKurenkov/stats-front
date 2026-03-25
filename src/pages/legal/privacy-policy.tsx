import { NextPage } from 'next';
import { SEO } from '@/shared';
import { PrivacyPolicy } from '@/widgets';

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