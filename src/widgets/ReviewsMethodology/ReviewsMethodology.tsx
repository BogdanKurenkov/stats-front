import type { FC } from 'react';

import { useDictionary } from '@/shared/lib/localization';
import { useReveal } from '@/shared/lib/hooks';
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
  NoteReveal,
} from './ReviewsMethodology.styled';

export const ReviewsMethodology: FC = () => {
  const dict = useDictionary();
  const { title, description, steps, note } = dict.reviewsMethodology;

  const header = useReveal();

  const step1 = useReveal({ delay: 100 });
  const step2 = useReveal({ delay: 200 });
  const step3 = useReveal({ delay: 300 });
  const step4 = useReveal({ delay: 400 });
  const stepRefs = [step1, step2, step3, step4];

  const noteReveal = useReveal();

  return (
    <Section pt pb>
      <Container>
        <MethodologyWrapper>
          <Header ref={header.ref} $visible={header.isVisible}>
            <Title as="h2" level="h2">
              {title}
            </Title>
            <Paragraph size="lg">{description}</Paragraph>
          </Header>

          <StepsGrid>
            {steps.map((step, index) => {
              const reveal = stepRefs[index];
              return (
                <StepCard
                  key={step.number}
                  ref={reveal.ref}
                  $visible={reveal.isVisible}
                >
                  <StepNumber>{step.number}</StepNumber>
                  <StepTitle>{step.title}</StepTitle>
                  <StepDescription>{step.description}</StepDescription>
                </StepCard>
              );
            })}
          </StepsGrid>

          <NoteReveal
            ref={noteReveal.ref}
            $visible={noteReveal.isVisible}
          >
            <HighlightBox>
              <NoteText size="lg">{note}</NoteText>
            </HighlightBox>
          </NoteReveal>
        </MethodologyWrapper>
      </Container>
    </Section>
  );
};