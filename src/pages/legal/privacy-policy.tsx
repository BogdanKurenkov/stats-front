import { GetStaticProps, NextPage } from 'next';
import path from 'path';
import fs from 'fs';

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

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const filePath = path.join(process.cwd(), 'public', 'locales', locale || 'pt', 'common.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const messages = JSON.parse(fileContents);

  return {
    props: { messages },
  };
};