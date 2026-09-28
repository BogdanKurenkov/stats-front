import type { FC } from 'react';

import { useDictionary, scrollToSection } from '@/shared/lib';
import {
  Container,
  Section,
  Title,
  Paragraph,
  Divider,
  Button
} from '@/shared/ui';

import { REVIEW_FORM_ID } from '../ReviewsLeaveForm/ReviewsLeaveForm.constants';

import {
  HeroWrapper,
  HeroHeader,
  // HeroBadge,
  HeroCta,
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
  const { title, description, /*badge,*/ ctaLabel, stats, highlights } = dict.reviewsHero;

  return (
    <Section pt pb>
      <Container>
        <HeroWrapper>
          <HeroHeader>
            {/* <HeroBadge>{badge}</HeroBadge> */}
            <Title as="h1" level="h1">
              {title}
            </Title>

            <Paragraph size="lg">{description}</Paragraph>

            <HeroCta>
              <Button
                variant="primary"
                onClick={() => scrollToSection(REVIEW_FORM_ID)}
              >
                {ctaLabel}
              </Button>
            </HeroCta>
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