import type { FC } from "react";

import { useDictionary } from "@/shared/lib/localization";
import { Container, Section, Title } from "@/shared/ui";

import { FORECASTS_CREATION_STEP_ICONS } from "./ForecastsCreationSteps.constants";

import {
  SectionWrapper,
  StepsGrid,
  StepCard,
  StepIconWrapper,
  StepBadge,
  StepContent,
  StepTitle,
  StepDescription,
  SectionHeading,
  Description,
} from "./ForecastsCreationSteps.styled";

export const ForecastsCreationSteps: FC = () => {
  const dict = useDictionary();
  const stepsData = dict.forecastsCreationSteps;

  return (
    <Section pt pb>
      <Container>
        <SectionWrapper>
          <SectionHeading>
            <Title as="h2" level="h2">
              {stepsData.title}
            </Title>
            <Description>{stepsData.description}</Description>
          </SectionHeading>
          <StepsGrid>
            {stepsData.steps.map((step) => {
              const Icon = FORECASTS_CREATION_STEP_ICONS[step.number];

              return (
                <StepCard key={step.number}>
                  <StepIconWrapper>
                    {Icon && <Icon size={20} />}
                    <StepBadge>{step.number}</StepBadge>
                  </StepIconWrapper>
                  <StepContent>
                    <StepTitle as="h3" level="h3">
                      {step.title}
                    </StepTitle>
                    <StepDescription size="md">
                      {step.description}
                    </StepDescription>
                  </StepContent>
                </StepCard>
              );
            })}
          </StepsGrid>
        </SectionWrapper>
      </Container>
    </Section>
  );
};
