import { GetStaticProps, NextPage } from 'next';
import path from 'path';
import fs from 'fs';

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

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const filePath = path.join(process.cwd(), 'public', 'locales', locale || 'pt', 'common.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const messages = JSON.parse(fileContents);

  return {
    props: { messages },
  };
};