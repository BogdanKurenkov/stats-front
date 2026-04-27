import { FC } from 'react';
import { useDictionary } from '@/shared/lib/localization';

import { Container, Section, Title } from '@/shared/ui';

import {
  SectionWrapper,
  CriteriaGrid,
  CriteriaItem,
  IconWrapper,
  ContentWrapper,
  CriteriaTitle,
  CriteriaDescription,
} from './HowToChooseBookmaker.styled';

import {
  Shield,
  Trophy,
  Coins,
  Video,
  CreditCard,
  Headphones,
  Gift,
  BarChart3,
  Activity,
} from "lucide-react";

const iconMap = {
  "Лицензия": Shield,
  "Виды спорта": Trophy,
  "Live ставки": Activity,
  "Коэффициенты": BarChart3,
  "Трансляции матчей": Video,
  "Размер ставок": Coins,
  "Платежные системы": CreditCard,
  "Горячая линия": Headphones,
  "Бонусы": Gift,
};

export const HowToChooseBookmaker: FC = () => {
  const dict = useDictionary();
  const section = dict.howToChooseBookmaker;

  return (
    <Section pt pb>
      <Container>
        <SectionWrapper>
          <Title as="h2" level="h2">
            {section.title}
          </Title>

          <CriteriaGrid>
            {section.criteria.map((item, index) => {
              const IconComponent = iconMap[item.title as keyof typeof iconMap];
              return (
                <CriteriaItem key={index}>
                  <IconWrapper>
                    <IconComponent />
                  </IconWrapper>
                  <ContentWrapper>
                    <CriteriaTitle as="h3" level="h3">
                      {item.title}
                    </CriteriaTitle>
                    <CriteriaDescription size="md">
                      {item.description}
                    </CriteriaDescription>
                  </ContentWrapper>
                </CriteriaItem>
              );
            })}
          </CriteriaGrid>
        </SectionWrapper>
      </Container>
    </Section>
  );
};