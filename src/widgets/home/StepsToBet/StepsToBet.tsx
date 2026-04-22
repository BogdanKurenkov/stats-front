import { FC } from 'react';

import { Container, Section, Title } from '@/shared/ui';

import { STEPS } from './StepsToBet.constants';

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
  return (
    <Section pt pb>
      <Container>
        <SectionWrapper>
          <Title as="h2" level="h2">
            Как оформить онлайн ставки на спорт у букмекеров
          </Title>

          <StepsGrid>
            {STEPS.map(({ description, number, title }) => (
              <StepCard key={number}>
                <StepNumber>{number}</StepNumber>
                <StepContent>
                  <StepTitle as="h3" level="h3">
                    {title}
                  </StepTitle>
                  <StepDescription size="md">
                    {description}
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