import { FC } from 'react';
import { useDictionary } from '@/shared/lib/localization';

import { Container, Divider, Section } from '@/shared/ui';

import {
  TypesWrapper,
  TypesGrid,
  TypeCard,
  TypeName,
  TypeDescription,
  LoyaltyCard,
  LoyaltyTitle,
  LoyaltyText,
} from './BonusesTypes.styled';

export const BonusesTypes: FC = () => {
  const dict = useDictionary();
  const data = dict.bonusesTypes;

  return (
    <Section pt pb>
      <Container>
        <TypesWrapper>
          <TypeName as="h2" level="h2">
            {data.title}
          </TypeName>
          <TypeDescription size="lg">
            {data.description}
          </TypeDescription>

          <TypesGrid>
            {data.types.map((type, index) => (
              <TypeCard key={index}>
                <TypeName as="h3" level="h3">
                  {type.name}
                </TypeName>
                <TypeDescription size="md">
                  {type.description}
                </TypeDescription>
              </TypeCard>
            ))}
          </TypesGrid>

          <Divider />

          <LoyaltyCard>
            <LoyaltyTitle as="h3" level="h3">
              {data.loyaltyTitle}
            </LoyaltyTitle>
            <LoyaltyText size="md">
              {data.loyaltyText}
            </LoyaltyText>
          </LoyaltyCard>
        </TypesWrapper>
      </Container>
    </Section>
  );
};