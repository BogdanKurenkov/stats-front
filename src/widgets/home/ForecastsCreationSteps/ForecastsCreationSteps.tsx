import { useState } from "react";
import type { FC } from "react";

import { X } from "lucide-react";

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
  DetailsPanel,
  DetailsIconWrapper,
  DetailsContent,
  DetailsHeader,
  DetailsTitles,
  DetailsLabel,
  DetailsTitle,
  CloseButton,
  DetailsText,
  ProgressContainer,
  ProgressText,
  ProgressBar,
  ProgressFill,
  StepMoreLink,
  StepMoreArrow,
} from "./ForecastsCreationSteps.styled";

export const ForecastsCreationSteps: FC = () => {
  const dict = useDictionary();
  const stepsData = dict.forecastsCreationSteps;

  const [activeStepNumber, setActiveStepNumber] = useState<string | null>(null);

  const activeStep = stepsData.steps.find(
    (step) => step.number === activeStepNumber,
  );

  const handleCardClick = (stepNumber: string) => {
    setActiveStepNumber((prev) => (prev === stepNumber ? null : stepNumber));
  };

  const handleClose = () => setActiveStepNumber(null);

  const totalSteps = stepsData.steps.length;
  const currentStepIndex = activeStep
    ? stepsData.steps.findIndex((s) => s.number === activeStep.number) + 1
    : 0;
  const progressPercentage =
    totalSteps > 0 ? (currentStepIndex / totalSteps) * 100 : 0;

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
              const isActive = activeStepNumber === step.number;

              return (
                <StepCard
                  key={step.number}
                  $isActive={isActive}
                  onClick={() => handleCardClick(step.number)}
                  role="button"
                  tabIndex={0}
                  aria-pressed={isActive}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleCardClick(step.number);
                    }
                  }}
                >
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

                    <StepMoreLink $isActive={isActive}>
                      {stepsData.moreLabel ?? "Подробнее об этапе"}
                      <StepMoreArrow>→</StepMoreArrow>
                    </StepMoreLink>
                  </StepContent>
                </StepCard>
              );
            })}
          </StepsGrid>

          {activeStep && (
            <DetailsPanel>
              <DetailsIconWrapper>
                {(() => {
                  const ActiveIcon =
                    FORECASTS_CREATION_STEP_ICONS[activeStep.number];
                  return ActiveIcon ? <ActiveIcon size={24} /> : null;
                })()}
              </DetailsIconWrapper>

              <DetailsContent>
                <DetailsHeader>
                  <DetailsTitles>
                    <DetailsLabel>
                      {stepsData.detailsLabel ?? "Подробности этапа"}
                    </DetailsLabel>
                    <DetailsTitle as="h4" level="h4">
                      {activeStep.title}
                    </DetailsTitle>
                  </DetailsTitles>

                  <CloseButton
                    type="button"
                    onClick={handleClose}
                    aria-label={stepsData.closeLabel ?? "Закрыть"}
                  >
                    {stepsData.closeLabel ?? "Закрыть"}
                    <X />
                  </CloseButton>
                </DetailsHeader>

                <DetailsText>
                  {activeStep.details ?? activeStep.description}
                </DetailsText>

                <ProgressContainer>
                  <ProgressText>
                    {stepsData.stepLabel ?? "Этап"} {currentStepIndex}{" "}
                    {stepsData.ofLabel ?? "из"} {totalSteps}
                  </ProgressText>
                  <ProgressBar>
                    <ProgressFill $width={`${progressPercentage}%`} />
                  </ProgressBar>
                </ProgressContainer>
              </DetailsContent>
            </DetailsPanel>
          )}
        </SectionWrapper>
      </Container>
    </Section>
  );
};
