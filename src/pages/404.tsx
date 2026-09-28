import { GetStaticProps, NextPage } from 'next';
import path from 'path';
import fs from 'fs';

import { NotFound } from '@/widgets';

import { Container } from '@/shared';

const Custom404: NextPage = () => {
  return (
    <Container>
      <NotFound />
    </Container>
  );
};

export default Custom404;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const filePath = path.join(process.cwd(), 'public', 'locales', locale || 'pt', 'common.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const messages = JSON.parse(fileContents);

  return {
    props: { messages },
  };
};