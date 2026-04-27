import { FC } from 'react';
import { useDictionary } from '@/shared/lib/localization';

import { Container, Section, Title } from '@/shared/ui';

import {
  SectionWrapper,
  StepsGrid,
  StepCard,
  StepNumber,
  StepContent,
  StepTitle,
  StepDescription,
} from './StepsToBet.styled';

export const StepsToBet: FC = () => {
  const dict = useDictionary();
  const stepsData = dict.stepsToBet;

  return (
    <Section pt pb>
      <Container>
        <SectionWrapper>
          <Title as="h2" level="h2">
            {stepsData.title}
          </Title>

          <StepsGrid>
            {stepsData.steps.map((step) => (
              <StepCard key={step.number}>
                <StepNumber>{step.number}</StepNumber>
                <StepContent>
                  <StepTitle as="h3" level="h3">
                    {step.title}
                  </StepTitle>
                  <StepDescription size="md">
                    {step.description}
                  </StepDescription>
                </StepContent>
              </StepCard>
            ))}
          </StepsGrid>
        </SectionWrapper>
      </Container>
    </Section>
  );
};