import type { FC } from "react";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { useDictionary } from "@/shared/lib/localization";
import { Container } from "@/shared";

import {
  SectionWrapper,
  VerifiabilityCard,
  IconBox,
  ContentBox,
  Kicker,
  TitleText,
  Description,
  ButtonLink,
} from "./AboutVerifiability.styled";

export const AboutVerifiability: FC = () => {
  const dict = useDictionary();
  const section = dict.about.verifiability;

  return (
    <SectionWrapper>
      <Container>
        <VerifiabilityCard>
          <IconBox>
            <ShieldCheck />
          </IconBox>

          <ContentBox>
            <Kicker>{section.kicker}</Kicker>
            <TitleText as="h2" level="h2">
              {section.title}
            </TitleText>
            <Description size="md">{section.description}</Description>
          </ContentBox>

          <ButtonLink href={section.button.href}>
            {section.button.label}
            <ArrowRight size={16} />
          </ButtonLink>
        </VerifiabilityCard>
      </Container>
    </SectionWrapper>
  );
};
