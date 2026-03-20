import { FC } from 'react';
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
import { BONUSES_TYPES } from './BonusesTypes.constants';

export const BonusesTypes: FC = () => {
  return (
    <Section pt pb>
      <Container>
        <TypesWrapper>
          <TypeName as="h2" level="h2">
            {BONUSES_TYPES.title}
          </TypeName>
          <TypeDescription size="lg">
            {BONUSES_TYPES.description}
          </TypeDescription>

          <TypesGrid>
            {BONUSES_TYPES.types.map((type, index) => (
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
              Программа лояльности
            </LoyaltyTitle>
            <LoyaltyText size="md">
              {BONUSES_TYPES.loyaltyNote}
            </LoyaltyText>
          </LoyaltyCard>
        </TypesWrapper>
      </Container>
    </Section>
  );
};