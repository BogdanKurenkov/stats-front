import type { FC } from 'react';

import { useDictionary, scrollToSection } from '@/shared/lib';
import { useReveal } from '@/shared/lib/hooks';
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
  const { title, description, ctaLabel, stats, highlights } = dict.reviewsHero;

  const header = useReveal({ delay: 0 });
  const stat1 = useReveal({ delay: 100 });
  const stat2 = useReveal({ delay: 180 });
  const stat3 = useReveal({ delay: 260 });
  const stat4 = useReveal({ delay: 340 });
  const statRefs = [stat1, stat2, stat3, stat4];

  const high1 = useReveal({ delay: 100 });
  const high2 = useReveal({ delay: 180 });
  const high3 = useReveal({ delay: 260 });
  const highRefs = [high1, high2, high3];

  return (
    <Section pt pb>
      <Container>
        <HeroWrapper>
          <HeroHeader ref={header.ref} $visible={header.isVisible}>
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
            {stats.map((stat, index) => {
              const reveal = statRefs[index];
              return (
                <StatCard
                  key={index}
                  ref={reveal.ref}
                  $visible={reveal.isVisible}
                >
                  <StatNumber>{stat.number}</StatNumber>
                  <StatLabel>{stat.label}</StatLabel>
                </StatCard>
              );
            })}
          </StatGrid>

          <Divider />

          <HighlightGrid>
            {highlights.map((item, index) => {
              const reveal = highRefs[index];
              return (
                <HighlightCard
                  key={index}
                  ref={reveal.ref}
                  $visible={reveal.isVisible}
                >
                  <HighlightTitle>{item.title}</HighlightTitle>
                  <HighlightDescription>{item.description}</HighlightDescription>
                </HighlightCard>
              );
            })}
          </HighlightGrid>
        </HeroWrapper>
      </Container>
    </Section>
  );
};