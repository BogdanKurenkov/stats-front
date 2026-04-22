import { NextPage } from 'next';

import { TermsOfUse } from '@/widgets';

import { SEO } from '@/shared';

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