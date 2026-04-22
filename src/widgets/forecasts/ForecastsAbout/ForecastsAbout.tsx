import { FC } from 'react';

import { Container, Section, Title, Paragraph, HighlightBox } from '@/shared/ui';

import {
  ABOUT_SECTIONS,
  APPROACH_ITEMS,
  FACTORS_ITEMS,
  ADVANTAGE_SECTIONS,
  ADVANTAGE_ITEMS,
  DISCLAIMER,
  FOOTBALL_FEATURES,
} from './ForecastsAbout.constants';

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
  return (
    <Section pt pb>
      <Container>
        <AboutWrapper>
          {ABOUT_SECTIONS.map((section) => (
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
              Одно дело – разбираться в футболе и ставить на результат финала ЧМ. И совсем другое – составлять качественные прогнозы.
            </HighlightText>
          </HighlightBox>

          <SectionBlock>
            <Title as="h2" level="h2">
              Как работают профессиональные аналитики
            </Title>
            <Paragraph size="lg">
              Профессиональные аналитики знают секрет, как можно обыгрывать букмекерские конторы на дистанции. Разгадка кроется в глубоком изучении статистических данных и учете целого ряда сопутствующих факторов, способных повлиять на результат спортивного события.
            </Paragraph>
          </SectionBlock>

          <ApproachGrid>
            {APPROACH_ITEMS.map((item, idx) => (
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
              Что учитывают эксперты при составлении прогнозов
            </Title>
            <FactorsList>
              {FACTORS_ITEMS.map((factor, idx) => (
                <FactorItem key={idx}>{factor}</FactorItem>
              ))}
            </FactorsList>
          </SectionBlock>

          {ADVANTAGE_SECTIONS.map((section, idx) => (
            <SectionBlock key={idx}>
              <Title as="h2" level="h2">
                {section.title}
              </Title>
              <Paragraph size="lg">{section.content}</Paragraph>
            </SectionBlock>
          ))}

          <AdvantagesGrid>
            {ADVANTAGE_ITEMS.map((item, idx) => (
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
            <DisclaimerText size="sm">{DISCLAIMER}</DisclaimerText>
          </DisclaimerBox>

          <SectionBlock>
            <Title as="h2" level="h2">
              Особенности футбола как вида спорта для ставок
            </Title>
            <Paragraph size="lg">
              Делая ставки на футбол, необходимо учитывать особенности этого вида спорта по сравнению с остальными:
            </Paragraph>
          </SectionBlock>

          <FeaturesGrid>
            {FOOTBALL_FEATURES.map((feature, idx) => (
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