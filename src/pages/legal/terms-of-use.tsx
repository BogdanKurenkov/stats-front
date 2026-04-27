import { GetStaticProps, NextPage } from 'next';
import path from 'path';
import fs from 'fs';

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

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const filePath = path.join(process.cwd(), 'public', 'locales', locale || 'pt', 'common.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const messages = JSON.parse(fileContents);

  return {
    props: { messages },
  };
};