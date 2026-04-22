import { FC } from 'react';

import { Container, Section, Title, Paragraph, Divider } from '@/shared/ui';

import { BONUSES_RULES } from './BonusesRules.constants';

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
  return (
    <Section pt pb>
      <Container>
        <RulesWrapper>
          <SectionBlock>
            <Title as="h2" level="h2">
              {BONUSES_RULES.rulesTitle}
            </Title>
            <Paragraph size="lg">
              {BONUSES_RULES.rulesDescription}
            </Paragraph>
          </SectionBlock>

          <Divider />

          <SectionBlock>
            <Title as="h2" level="h2">
              {BONUSES_RULES.howToUseTitle}
            </Title>
            <Paragraph>
              {BONUSES_RULES.howToUseDescription}
            </Paragraph>
          </SectionBlock>

          <Divider />

          <SectionBlock>
            <Title as="h2" level="h2">
              {BONUSES_RULES.howToWageringTitle}
            </Title>
            <Paragraph>
              {BONUSES_RULES.howToWageringDescription}
            </Paragraph>

            <Title as="h3" level="h3" style={{ marginTop: '16px' }}>
              {BONUSES_RULES.wageringStepsTitle}
            </Title>
            <StepsGrid>
              {BONUSES_RULES.wageringSteps.map((step, index) => (
                <Card key={index}>
                  <CardNumber>{index + 1}</CardNumber>
                  <CardContent>
                    <CardText size="md">{step}</CardText>
                  </CardContent>
                </Card>
              ))}
            </StepsGrid>
            <Note size="sm">{BONUSES_RULES.wageringNote}</Note>
          </SectionBlock>

          <Divider />

          <SectionBlock>
            <Title as="h2" level="h2">
              {BONUSES_RULES.refusalReasonsTitle}
            </Title>
            <Paragraph>
              {BONUSES_RULES.refusalReasonsDescription}
            </Paragraph>

            <ReasonsGrid>
              {BONUSES_RULES.refusalReasons.map((reason, index) => (
                <Card key={index}>
                  <CardNumber>{index + 1}</CardNumber>
                  <CardContent>
                    <CardText size="md">{reason}</CardText>
                  </CardContent>
                </Card>
              ))}
            </ReasonsGrid>

            <Note size="sm">{BONUSES_RULES.refusalNote}</Note>
          </SectionBlock>
        </RulesWrapper>
      </Container>
    </Section>
  );
};