import { FC } from 'react';
import { Container, Section, Title, Paragraph } from '@/shared/ui';
import {
  AboutWrapper,
  Section as SectionBlock,
  HighlightBox,
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
import {
  ABOUT_SECTIONS,
  APPROACH_ITEMS,
  FACTORS_ITEMS,
  ADVANTAGE_SECTIONS,
  ADVANTAGE_ITEMS,
  DISCLAIMER,
  FOOTBALL_FEATURES,
} from './ForecastsAbout.constants';

export const ForecastsAbout: FC = () => {
  return (
    <Section pt pb>
      <Container>
        <AboutWrapper>
          {/* Введение */}
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

          {/* Выделенная цитата */}
          <HighlightBox>
            <HighlightText size="lg">
              Одно дело – разбираться в футболе и ставить на результат финала ЧМ. И совсем другое – составлять качественные прогнозы.
            </HighlightText>
          </HighlightBox>

          {/* Как работают аналитики */}
          <SectionBlock>
            <Title as="h2" level="h2">
              Как работают профессиональные аналитики
            </Title>
            <Paragraph size="lg">
              Профессиональные аналитики знают секрет, как можно обыгрывать букмекерские конторы на дистанции. Разгадка кроется в глубоком изучении статистических данных и учете целого ряда сопутствующих факторов, способных повлиять на результат спортивного события.
            </Paragraph>
          </SectionBlock>

          {/* Подходы */}
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

          {/* Факторы */}
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

          {/* Преимущества */}
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

          {/* Дисклеймер */}
          <DisclaimerBox>
            <DisclaimerText size="sm">{DISCLAIMER}</DisclaimerText>
          </DisclaimerBox>

          {/* Особенности футбола */}
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