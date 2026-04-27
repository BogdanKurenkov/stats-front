import { FC } from 'react';
import { useDictionary } from '@/shared/lib/localization';

import {
  Container,
  Section,
  Title,
  Paragraph,
  Divider,
  HighlightBox
} from '@/shared/ui';

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
  const dict = useDictionary();
  const mainInfo = dict.mainInfo;

  return (
    <Section pt pb>
      <Container>
        <MainInfoWrapper>
          <SectionBlock>
            <Title as="h2" level="h2">
              {mainInfo.trustTitle}
            </Title>
            <Paragraph size="lg">
              {mainInfo.trustDescription}
            </Paragraph>
          </SectionBlock>

          <Divider />

          <StatGrid>
            {mainInfo.stats.map((stat, index) => (
              <StatCard key={index}>
                <StatNumber>{stat.number}</StatNumber>
                <StatLabel>{stat.label}</StatLabel>
              </StatCard>
            ))}
          </StatGrid>

          <Divider />

          <SectionBlock>
            <Title as="h2" level="h2">
              {mainInfo.evaluationTitle}
            </Title>
            <Paragraph size="lg">
              {mainInfo.evaluationDescription}
            </Paragraph>
          </SectionBlock>

          <Divider />

          <SectionBlock>
            <Title as="h2" level="h2">
              {mainInfo.bookmakerTitle}
            </Title>
            <Paragraph size="lg">
              {mainInfo.bookmakerDescription}
            </Paragraph>
          </SectionBlock>

          <HighlightBox>
            <HighlightText size="lg">
              {mainInfo.highlightText}
            </HighlightText>
          </HighlightBox>

          <SectionBlock>
            <Paragraph size="lg">
              {mainInfo.conclusionText}
            </Paragraph>
          </SectionBlock>
        </MainInfoWrapper>
      </Container>
    </Section>
  );
};