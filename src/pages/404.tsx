import { NextPage } from 'next';

import { NotFound } from '@/widgets/NotFound';

import { Container } from '@/shared/ui';

const Custom404: NextPage = () => {
  return (
    <Container>
      <NotFound />
    </Container>
  );
};

export default Custom404;