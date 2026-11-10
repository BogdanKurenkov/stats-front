import type { FC } from "react";
import { ArrowRight } from "lucide-react";
import { useDictionary } from "@/shared/lib/localization";
import { Container } from "@/shared";

import {
  SectionWrapper,
  ProcessCard,
  Header,
  TitleGroup,
  Kicker,
  SectionTitle,
  SectionSubtitle,
  StepsGrid,
  StepItem,
  StepHeader,
  StepNumber,
  StepArrow,
  StepTitle,
  StepDescription,
} from "./AboutProcess.styled";

export const AboutProcess: FC = () => {
  const dict = useDictionary();
  const section = dict.about.process;

  return (
    <SectionWrapper>
      <Container>
        <ProcessCard>
          <Header>
            <TitleGroup>
              <Kicker>{section.kicker}</Kicker>
              <SectionTitle as="h2" level="h2">
                {section.title}
              </SectionTitle>
            </TitleGroup>
            <SectionSubtitle size="md">{section.subtitle}</SectionSubtitle>
          </Header>

          <StepsGrid>
            {section.steps.map((step) => (
              <StepItem key={step.number}>
                <StepHeader>
                  <StepNumber>{step.number}</StepNumber>
                  <StepArrow>
                    <ArrowRight />
                  </StepArrow>
                </StepHeader>
                <StepTitle as="h3" level="h3">
                  {step.title}
                </StepTitle>
                <StepDescription size="sm">{step.description}</StepDescription>
              </StepItem>
            ))}
          </StepsGrid>
        </ProcessCard>
      </Container>
    </SectionWrapper>
  );
};
