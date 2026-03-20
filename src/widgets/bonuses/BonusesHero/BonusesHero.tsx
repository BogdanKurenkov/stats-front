import { FC } from 'react';
import { Container, Section, Title, Paragraph } from '@/shared/ui';
import { HeroWrapper } from './BonusesHero.styled';

export const BonusesHero: FC = () => {
  return (
    <Section pt pb>
      <Container>
        <HeroWrapper>
          <Title as="h1" level="h1">
            Бонусы букмекерских контор
          </Title>
          <Paragraph size="lg">
            Букмекеры заинтересованы в привлечении как можно большего количества игроков, и поэтому работают над улучшением функционала, запускают масштабные рекламные акции, а также предлагают клиентам интересные бонусы. На нашем портале вы узнаете, какие бывают бонусы букмекерских контор, как их получить, что такое отыгрыш и как выполнить его требования.
          </Paragraph>
        </HeroWrapper>
      </Container>
    </Section>
  );
};