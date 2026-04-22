import { FC } from 'react';

import { Container, Section, Title, Paragraph } from '@/shared/ui';

import { FORECASTS_HERO } from './ForecastsHero.constants';

import { HeroWrapper } from './ForecastsHero.styled';

export const ForecastsHero: FC = () => {
  return (
    <Section pt pb>
      <Container>
        <HeroWrapper>
          <Title as="h1" level="h1">
            {FORECASTS_HERO.title}
          </Title>
          <Paragraph size="lg">
            {FORECASTS_HERO.description}
          </Paragraph>
        </HeroWrapper>
      </Container>
    </Section>
  );
};