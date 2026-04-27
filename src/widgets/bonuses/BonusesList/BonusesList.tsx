import { FC } from 'react';
import Image from 'next/image';
import { useDictionary } from '@/shared/lib/localization';

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
  const dict = useDictionary();
  const data = dict.bonusesList;

  return (
    <Section pt pb>
      <Container>
        <BonusesWrapper>
          {BONUSES_DATA.map((bonus) => (
            <BonusCard key={bonus.id}>
              <BonusContent>
                <LogoWrapper>
                  <Image src={bonus.logo} alt={`${bonus.id} logo`} width={100} height={40} />
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
                    <StatLabel>{data.bonusAmountLabel}</StatLabel>
                  </StatItem>
                  <StatItem>
                    <StatValue>{bonus.minOdds}</StatValue>
                    <StatLabel>{data.minOddsLabel}</StatLabel>
                  </StatItem>
                  <StatItem>
                    <StatValue>{bonus.wagering}</StatValue>
                    <StatLabel>{data.wageringLabel}</StatLabel>
                  </StatItem>
                </BonusStats>

                <ButtonWrapper>
                  <StyledButton variant="primary" size="large">
                    {bonus.buttonText}
                  </StyledButton>
                </ButtonWrapper>
              </BonusContent>

              <StyledAccordion type="single" collapsible>
                <AccordionItem value="terms" trigger={data.termsButton}>
                  <StyledAccordionCOntent>
                    <Title as='h6' level='h6'>{data.warning}</Title>
                    <StyledParagraph>{bonus.terms}</StyledParagraph>
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