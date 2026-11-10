import type { FC } from "react";
import { ArrowRight } from "lucide-react";
import { useDictionary } from "@/shared/lib/localization";
import { Container } from "@/shared";

import {
  SectionWrapper,
  CtaCard,
  ContentBox,
  Kicker,
  TitleText,
  Description,
  Actions,
  PrimaryButton,
  SecondaryButton,
} from "./AboutCta.styled";

export const AboutCta: FC = () => {
  const dict = useDictionary();
  const section = dict.about.cta;

  return (
    <SectionWrapper>
      <Container>
        <CtaCard>
          <ContentBox>
            <Kicker>{section.kicker}</Kicker>
            <TitleText as="h2" level="h2">
              {section.title}
            </TitleText>
            <Description size="md">{section.description}</Description>
          </ContentBox>

          <Actions>
            <PrimaryButton href={section.primaryAction.href}>
              {section.primaryAction.label}
              <ArrowRight size={16} />
            </PrimaryButton>

            <SecondaryButton href={section.secondaryAction.href}>
              {section.secondaryAction.label}
              <ArrowRight size={16} />
            </SecondaryButton>
          </Actions>
        </CtaCard>
      </Container>
    </SectionWrapper>
  );
};
