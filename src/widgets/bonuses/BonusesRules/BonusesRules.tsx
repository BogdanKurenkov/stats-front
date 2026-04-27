import { FC } from 'react';
import { useDictionary } from '@/shared/lib/localization';

import { Container, Section, Title, Paragraph, Divider } from '@/shared/ui';

import {
  RulesWrapper,
  SectionBlock,
  StepsGrid,
  ReasonsGrid,
  Card,
  CardNumber,
  CardContent,
  CardText,
  Note,
} from './BonusesRules.styled';

export const BonusesRules: FC = () => {
  const dict = useDictionary();
  const bonuses = dict.bonusesRules;

  return (
    <Section pt pb>
      <Container>
        <RulesWrapper>
          <SectionBlock>
            <Title as="h2" level="h2">
              {bonuses.rulesTitle}
            </Title>
            <Paragraph size="lg">
              {bonuses.rulesDescription}
            </Paragraph>
          </SectionBlock>

          <Divider />

          <SectionBlock>
            <Title as="h2" level="h2">
              {bonuses.howToUseTitle}
            </Title>
            <Paragraph>
              {bonuses.howToUseDescription}
            </Paragraph>
          </SectionBlock>

          <Divider />

          <SectionBlock>
            <Title as="h2" level="h2">
              {bonuses.howToWageringTitle}
            </Title>
            <Paragraph>
              {bonuses.howToWageringDescription}
            </Paragraph>

            <Title as="h3" level="h3" style={{ marginTop: '16px' }}>
              {bonuses.wageringStepsTitle}
            </Title>
            <StepsGrid>
              {bonuses.wageringSteps.map((step: string, index: number) => (
                <Card key={index}>
                  <CardNumber>{index + 1}</CardNumber>
                  <CardContent>
                    <CardText size="md">{step}</CardText>
                  </CardContent>
                </Card>
              ))}
            </StepsGrid>
            <Note size="sm">{bonuses.wageringNote}</Note>
          </SectionBlock>

          <Divider />

          <SectionBlock>
            <Title as="h2" level="h2">
              {bonuses.refusalReasonsTitle}
            </Title>
            <Paragraph>
              {bonuses.refusalReasonsDescription}
            </Paragraph>

            <ReasonsGrid>
              {bonuses.refusalReasons.map((reason: string, index: number) => (
                <Card key={index}>
                  <CardNumber>{index + 1}</CardNumber>
                  <CardContent>
                    <CardText size="md">{reason}</CardText>
                  </CardContent>
                </Card>
              ))}
            </ReasonsGrid>

            <Note size="sm">{bonuses.refusalNote}</Note>
          </SectionBlock>
        </RulesWrapper>
      </Container>
    </Section>
  );
};