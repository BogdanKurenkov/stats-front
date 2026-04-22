import { FC } from 'react';

import { AccordionItem, Container, Section, Title } from '@/shared/ui';

import { BONUSES_DATA } from './BonusesList.constants';

import {
  BonusesWrapper,
  BonusCard,
  BonusContent,
  LogoWrapper,
  BonusInfo,
  BonusTitle,
  BonusHighlight,
  BonusSubtitle,
  BonusStats,
  StatItem,
  StatValue,
  StatLabel,
  ButtonWrapper,
  StyledButton,
  StyledAccordion,
  StyledAccordionCOntent,
  StyledParagraph,
} from './BonusesList.styled';

export const BonusesList: FC = () => {
  return (
    <Section pt pb>
      <Container>
        <BonusesWrapper>
          {BONUSES_DATA.map((bonus) => (
            <BonusCard key={bonus.id}>
              <BonusContent>
                <LogoWrapper>
                  <img src={bonus.logo} alt={`${bonus.id} logo`} />
                </LogoWrapper>

                <BonusInfo>
                  <BonusTitle>
                    {bonus.title}{' '}
                    <BonusHighlight>{bonus.amount}</BonusHighlight>
                  </BonusTitle>
                  <BonusSubtitle>{bonus.subtitle}</BonusSubtitle>
                </BonusInfo>

                <BonusStats>
                  <StatItem>
                    <StatValue>{bonus.bonusAmount}</StatValue>
                    <StatLabel>Сумма бонуса</StatLabel>
                  </StatItem>
                  <StatItem>
                    <StatValue>{bonus.minOdds}</StatValue>
                    <StatLabel>Мин. коэффициент</StatLabel>
                  </StatItem>
                  <StatItem>
                    <StatValue>{bonus.wagering}</StatValue>
                    <StatLabel>Отыгрыш</StatLabel>
                  </StatItem>
                </BonusStats>

                <ButtonWrapper>
                  <StyledButton variant="primary" size="large">
                    {bonus.buttonText}
                  </StyledButton>
                </ButtonWrapper>
              </BonusContent>

              <StyledAccordion type="single" collapsible>
                <AccordionItem value="terms" trigger="Условия бонуса">
                  <StyledAccordionCOntent>
                    <Title as='h6' level='h6'>18+ | Играйте ответственно</Title>
                    <StyledParagraph>  {bonus.terms}</StyledParagraph>
                  </StyledAccordionCOntent>
                </AccordionItem>
              </StyledAccordion>
            </BonusCard>
          ))}
        </BonusesWrapper>
      </Container>
    </Section>
  );
};