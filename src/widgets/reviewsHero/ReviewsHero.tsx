import type { FC } from 'react';

import { useDictionary } from '@/shared/lib/localization';
import { Container, Section, Title, Paragraph, Divider, } from '@/shared/ui';

import {
  HeroWrapper,
  HeroHeader,
  HeroBadge,
  StatGrid,
  StatCard,
  StatNumber,
  StatLabel,
  HighlightGrid,
  HighlightCard,
  HighlightTitle,
  HighlightDescription,
} from './ReviewsHero.styled';

export const ReviewsHero: FC = () => {
  const dict = useDictionary();
  const { title, description, badge, stats, highlights } = dict.reviewsHero;

  return (
    <Section pt pb>
      <Container>
        <HeroWrapper>
          <HeroHeader>
            <HeroBadge>{badge}</HeroBadge>
            <Title as="h1" level="h1">
              {title}
            </Title>
            <Paragraph size="lg">
              {description}
            </Paragraph>
          </HeroHeader>

          <StatGrid>
            {stats.map((stat, index) => (
              <StatCard key={index}>
                <StatNumber>{stat.number}</StatNumber>
                <StatLabel>{stat.label}</StatLabel>
              </StatCard>
            ))}
          </StatGrid>

          <Divider />

          <HighlightGrid>
            {highlights.map((item, index) => (
              <HighlightCard key={index}>
                <HighlightTitle>{item.title}</HighlightTitle>
                <HighlightDescription>{item.description}</HighlightDescription>
              </HighlightCard>
            ))}
          </HighlightGrid>
        </HeroWrapper>
      </Container>
    </Section>
  );
};