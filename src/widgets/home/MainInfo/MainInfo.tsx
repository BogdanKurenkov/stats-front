import { FC } from 'react';

import {
  Container,
  Section,
  Title,
  Paragraph,
  Divider,
  HighlightBox
} from '@/shared/ui';

import { MAIN_INFO } from './MainInfo.constants';

import {
  MainInfoWrapper,
  SectionBlock,
  HighlightText,
  StatGrid,
  StatCard,
  StatNumber,
  StatLabel,
} from './MainInfo.styled';

export const MainInfo: FC = () => {
  return (
    <Section pt pb>
      <Container>
        <MainInfoWrapper>

          <SectionBlock>
            <Title as="h2" level="h2">
              {MAIN_INFO.trustTitle}
            </Title>
            <Paragraph size="lg">
              {MAIN_INFO.trustDescription}
            </Paragraph>
          </SectionBlock>

          <Divider />

          <StatGrid>
            {MAIN_INFO.stats.map(({ label, number }) => (
              <StatCard key={number}>
                <StatNumber>{number}</StatNumber>
                <StatLabel>{label}</StatLabel>
              </StatCard>
            ))}
          </StatGrid>

          <Divider />

          <SectionBlock>
            <Title as="h2" level="h2">
              {MAIN_INFO.evaluationTitle}
            </Title>
            <Paragraph size="lg">
              {MAIN_INFO.evaluationDescription}
            </Paragraph>
          </SectionBlock>

          <Divider />

          <SectionBlock>
            <Title as="h2" level="h2">
              {MAIN_INFO.bookmakerTitle}
            </Title>
            <Paragraph size="lg">
              {MAIN_INFO.bookmakerDescription}
            </Paragraph>
          </SectionBlock>

          <HighlightBox>
            <HighlightText size="lg">
              {MAIN_INFO.highlightText}
            </HighlightText>
          </HighlightBox>

          <SectionBlock>
            <Paragraph size="lg">
              {MAIN_INFO.conclusionText}
            </Paragraph>
          </SectionBlock>
        </MainInfoWrapper>
      </Container>
    </Section>
  );
};