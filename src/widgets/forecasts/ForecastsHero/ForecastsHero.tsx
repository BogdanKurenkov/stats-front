import { FC } from 'react';
import { Container, Section, Title, Paragraph } from '@/shared/ui';
import { HeroWrapper } from './ForecastsHero.styled';

export const ForecastsHero: FC = () => {
  return (
    <Section pt pb>
      <Container>
        <HeroWrapper>
          <Title as="h1" level="h1">
            Прогнозы на футбол
          </Title>
          <Paragraph size="lg">
            В этом разделе Вы найдете свежие прогнозы ставок на футбол от наших экспертов. Пройдите на страницу матча, чтобы ознакомится с аналитикой и узнать лучшие варианты для пари.
          </Paragraph>
        </HeroWrapper>
      </Container>
    </Section>
  );
};