import { FC } from 'react';

import { Container, Section, Title } from '@/shared/ui';

import { CRITERIA_ITEMS } from './HowToChooseBookmaker.constants';

import {
  SectionWrapper,
  CriteriaGrid,
  CriteriaItem,
  IconWrapper,
  ContentWrapper,
  CriteriaTitle,
  CriteriaDescription,
} from './HowToChooseBookmaker.styled';

export const HowToChooseBookmaker: FC = () => {
  return (
    <Section pt pb>
      <Container>
        <SectionWrapper>
          <Title as="h2" level="h2">
            Как выбрать букмекера для ставок на спорт в интернете
          </Title>

          <CriteriaGrid>
            {CRITERIA_ITEMS.map((item) => (
              <CriteriaItem key={item.title}>
                <IconWrapper>
                  <item.icon />
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
            ))}
          </CriteriaGrid>
        </SectionWrapper>
      </Container>
    </Section>
  );
};