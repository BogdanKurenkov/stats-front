import { FC } from 'react';
import { useDictionary } from '@/shared/lib/localization';

import { Container, Section, Title, Paragraph, HighlightBox } from '@/shared/ui';

import {
  AboutWrapper,
  Section as SectionBlock,
  HighlightText,
  ApproachGrid,
  ApproachCard,
  ApproachTitle,
  ApproachDescription,
  FactorsList,
  FactorItem,
  AdvantagesGrid,
  AdvantageCard,
  AdvantageNumber,
  AdvantageTitle,
  AdvantageDescription,
  FeaturesGrid,
  FeatureCard,
  FeatureTitle,
  FeatureDescription,
  DisclaimerBox,
  DisclaimerText,
} from './ForecastsAbout.styled';

export const ForecastsAbout: FC = () => {
  const dict = useDictionary();
  const data = dict.forecastsAbout;

  return (
    <Section pt pb>
      <Container>
        <AboutWrapper>
          {data.sections.map((section) => (
            <SectionBlock key={section.id}>
              {section.title && (
                <Title as="h2" level="h2">
                  {section.title}
                </Title>
              )}
              <Paragraph size="lg">{section.content}</Paragraph>
            </SectionBlock>
          ))}

          <HighlightBox>
            <HighlightText size="lg">
              {data.highlightText}
            </HighlightText>
          </HighlightBox>

          <SectionBlock>
            <Title as="h2" level="h2">
              {data.approachTitle}
            </Title>
            <Paragraph size="lg">
              {data.approachDescription}
            </Paragraph>
          </SectionBlock>

          <ApproachGrid>
            {data.approachItems.map((item, idx) => (
              <ApproachCard key={idx}>
                <ApproachTitle as="h3" level="h3">
                  {item.title}
                </ApproachTitle>
                <ApproachDescription size="md">
                  {item.description}
                </ApproachDescription>
              </ApproachCard>
            ))}
          </ApproachGrid>

          <SectionBlock>
            <Title as="h3" level="h3">
              {data.factorsTitle}
            </Title>
            <FactorsList>
              {data.factorsItems.map((factor, idx) => (
                <FactorItem key={idx}>{factor}</FactorItem>
              ))}
            </FactorsList>
          </SectionBlock>

          {data.advantageSections.map((section, idx) => (
            <SectionBlock key={idx}>
              <Title as="h2" level="h2">
                {section.title}
              </Title>
              <Paragraph size="lg">{section.content}</Paragraph>
            </SectionBlock>
          ))}

          <AdvantagesGrid>
            {data.advantageItems.map((item, idx) => (
              <AdvantageCard key={idx}>
                <AdvantageNumber>{idx + 1}</AdvantageNumber>
                <AdvantageTitle as="h3" level="h3">
                  {item.title}
                </AdvantageTitle>
                <AdvantageDescription size="sm">
                  {item.description}
                </AdvantageDescription>
              </AdvantageCard>
            ))}
          </AdvantagesGrid>

          <DisclaimerBox>
            <DisclaimerText size="sm">{data.disclaimer}</DisclaimerText>
          </DisclaimerBox>

          <SectionBlock>
            <Title as="h2" level="h2">
              {data.footballFeaturesTitle}
            </Title>
            <Paragraph size="lg">
              {data.footballFeaturesDescription}
            </Paragraph>
          </SectionBlock>

          <FeaturesGrid>
            {data.footballFeatures.map((feature, idx) => (
              <FeatureCard key={idx}>
                <FeatureTitle as="h3" level="h3">
                  {feature.title}
                </FeatureTitle>
                <FeatureDescription size="md">
                  {feature.description}
                </FeatureDescription>
              </FeatureCard>
            ))}
          </FeaturesGrid>
        </AboutWrapper>
      </Container>
    </Section>
  );
};