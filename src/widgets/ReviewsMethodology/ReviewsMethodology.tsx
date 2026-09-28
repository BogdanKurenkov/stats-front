import type { FC } from 'react';

import { useDictionary } from '@/shared/lib/localization';
import { Container, Section, Title, Paragraph, HighlightBox, } from '@/shared/ui';

import {
  MethodologyWrapper,
  Header,
  StepsGrid,
  StepCard,
  StepNumber,
  StepTitle,
  StepDescription,
  NoteText,
} from './ReviewsMethodology.styled';

export const ReviewsMethodology: FC = () => {
  const dict = useDictionary();
  const { title, description, steps, note } = dict.reviewsMethodology;

  return (
    <Section pt pb>
      <Container>
        <MethodologyWrapper>
          <Header>
            <Title as="h2" level="h2">
              {title}
            </Title>
            <Paragraph size="lg">
              {description}
            </Paragraph>
          </Header>

          <StepsGrid>
            {steps.map((step) => (
              <StepCard key={step.number}>
                <StepNumber>{step.number}</StepNumber>
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </StepCard>
            ))}
          </StepsGrid>

          <HighlightBox>
            <NoteText size="lg">{note}</NoteText>
          </HighlightBox>
        </MethodologyWrapper>
      </Container>
    </Section>
  );
};