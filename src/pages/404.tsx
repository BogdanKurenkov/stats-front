import type { NextPage } from 'next';

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

export async function getStaticProps({ locale }: { locale: string }) {
  const messages = await import(`../../public/locales/${locale}/common.json`);

  return {
    props: {
      messages: messages.default,
    },
  };
}