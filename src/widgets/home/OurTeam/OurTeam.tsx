import type { FC } from "react";

import { useDictionary } from "@/shared/lib/localization";
import { Container, Section, Title } from "@/shared";
import { OUR_TEAM_ICONS } from "./OurTeam.constants";

import {
  SectionWrapper,
  ContentWrapper,
  SectionHeading,
  Description,
  ItemsGrid,
  Item,
  IconWrapper,
  ItemContent,
  ItemTitle,
  ItemDescription,
} from "./OurTeam.styled";

export const OurTeam: FC = () => {
  const dict = useDictionary();
  const section = dict.ourTeam;

  return (
    <SectionWrapper>
      <Section pt pb>
        <Container>
          <ContentWrapper>
            <SectionHeading>
              <Title as="h2" level="h2">
                {section.title}
              </Title>
              <Description size="md">{section.description}</Description>
            </SectionHeading>
            <ItemsGrid>
              {section.items.map((item, index) => {
                const Icon = OUR_TEAM_ICONS[index];
                return (
                  <Item key={index}>
                    <IconWrapper>{Icon && <Icon size={20} />}</IconWrapper>
                    <ItemContent>
                      <ItemTitle as="h3" level="h3">
                        {item.title}
                      </ItemTitle>
                      <ItemDescription size="sm">
                        {item.description}
                      </ItemDescription>
                    </ItemContent>
                  </Item>
                );
              })}
            </ItemsGrid>
          </ContentWrapper>
        </Container>
      </Section>
    </SectionWrapper>
  );
};
