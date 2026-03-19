import { NextPage } from 'next';
import { Container } from '@/shared/ui';
import { NotFound } from '@/widgets/NotFound';

const Custom404: NextPage = () => {
  return (
    <Container>
      <NotFound />
    </Container>
  );
};

export default Custom404;