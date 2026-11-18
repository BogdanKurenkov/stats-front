import React from "react";

import { Sparkles, ArrowRight } from "lucide-react";
import { useDictionary } from "@/shared";

import {
  SectionWrapper,
  InfoBanner,
  IconWrapper,
  BannerContent,
  BannerTitle,
  BannerSubtitle,
  BannerList,
  BannerListItem,
  BannerItemNumber,
  BannerItemText,
  StepsSection,
  StepsHeader,
  StepsKicker,
  StepsTitle,
  StepsRow,
  StepCard,
  StepNumber,
  StepContent,
  StepTitle,
  StepDescription,
  StepArrow,
} from "./PartnersApproach.styled";

export const PartnersApproach: React.FC = () => {
  const dict = useDictionary().partners;

  return (
    <SectionWrapper>
      <InfoBanner>
        <IconWrapper>
          <Sparkles size={32} />
        </IconWrapper>
        <BannerContent>
          <BannerTitle>
            {dict.approach.titleStart}{" "}
            <span className="highlight">{dict.approach.titleHighlight}</span>
            <br />
            {dict.approach.titleEnd}
          </BannerTitle>
          <BannerSubtitle>{dict.approach.subtitle}</BannerSubtitle>
        </BannerContent>
        <BannerList>
          {dict.approach.list.map((item: string, index: number) => (
            <BannerListItem key={index}>
              <BannerItemNumber>
                {String(index + 1).padStart(2, "0")}
              </BannerItemNumber>
              <BannerItemText>{item}</BannerItemText>
            </BannerListItem>
          ))}
        </BannerList>
      </InfoBanner>

      <StepsSection>
        <StepsHeader>
          <StepsKicker>{dict.steps.kicker}</StepsKicker>
          <StepsTitle>
            {dict.steps.titleStart}{" "}
            <span className="highlight">{dict.steps.titleHighlight}</span>
          </StepsTitle>
        </StepsHeader>

        <StepsRow>
          {dict.steps.items.map(
            (item: { title: string; description: string }, index: number) => (
              <React.Fragment key={index}>
                <StepCard>
                  <StepNumber>{String(index + 1).padStart(2, "0")}</StepNumber>
                  <StepContent>
                    <StepTitle>{item.title}</StepTitle>
                    <StepDescription>{item.description}</StepDescription>
                  </StepContent>
                </StepCard>
                {index < dict.steps.items.length - 1 && (
                  <StepArrow>
                    <ArrowRight size={20} />
                  </StepArrow>
                )}
              </React.Fragment>
            ),
          )}
        </StepsRow>
      </StepsSection>
    </SectionWrapper>
  );
};
