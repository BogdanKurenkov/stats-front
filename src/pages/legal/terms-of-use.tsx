import { NextPage } from 'next';
import { SEO } from '@/shared';
import { TermsOfUse } from '@/widgets';

const TermsOfUsePage: NextPage = () => {
  return (
    <>
      <SEO
        title="Пользовательское соглашение"
        description="Условия использования сайта Stats.net"
      />
      <TermsOfUse />
    </>
  );
};

export default TermsOfUsePage;