import { FC } from 'react';
import { useDictionary } from '@/shared/lib/localization';

import { Container, Section, Title, Paragraph } from '@/shared/ui';

import { HeroWrapper } from './BonusesHero.styled';

export const BonusesHero: FC = () => {
  const dict = useDictionary();
  const data = dict.bonusesHero;

  return (
    <Section pt pb>
      <Container>
        <HeroWrapper>
          <Title as="h1" level="h1">
            {data.title}
          </Title>
          <Paragraph size="lg">
            {data.description}
          </Paragraph>
        </HeroWrapper>
      </Container>
    </Section>
  );
};