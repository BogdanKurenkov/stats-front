import { FC } from 'react';
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
import { STEPS } from './StepsToBet.constants';

export const StepsToBet: FC = () => {
  return (
    <Section pt pb>
      <Container>
        <SectionWrapper>
          <Title as="h2" level="h2">
            Как оформить онлайн ставки на спорт у букмекеров
          </Title>

          <StepsGrid>
            {STEPS.map((step) => (
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