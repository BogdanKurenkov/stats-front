import type { FC } from "react";
import { ShieldCheck, ArrowLeftRight, Zap, Smile } from "lucide-react";
import { useDictionary } from "@/shared/lib/localization";
import { Container } from "@/shared";

import {
  SectionWrapper,
  Header,
  TitleGroup,
  Kicker,
  SectionTitle,
  SectionSubtitle,
  PrinciplesCard,
  PrincipleItem,
  IconBox,
  TextContent,
  ItemTitle,
  ItemDescription,
} from "./AboutPrinciples.styled";

const PRINCIPLE_ICONS = [ShieldCheck, ArrowLeftRight, Zap, Smile];

export const AboutPrinciples: FC = () => {
  const dict = useDictionary();
  const section = dict.about.principles;

  return (
    <SectionWrapper>
      <Container>
        <Header>
          <TitleGroup>
            <Kicker>{section.kicker}</Kicker>
            <SectionTitle as="h2" level="h2">
              {section.title}
            </SectionTitle>
          </TitleGroup>
          <SectionSubtitle size="md">{section.subtitle}</SectionSubtitle>
        </Header>

        <PrinciplesCard>
          {section.items.map((item, index) => {
            const Icon = PRINCIPLE_ICONS[index];
            return (
              <PrincipleItem key={index}>
                <IconBox>{Icon && <Icon />}</IconBox>
                <TextContent>
                  <ItemTitle as="h3" level="h3">
                    {item.title}
                  </ItemTitle>
                  <ItemDescription size="sm">
                    {item.description}
                  </ItemDescription>
                </TextContent>
              </PrincipleItem>
            );
          })}
        </PrinciplesCard>
      </Container>
    </SectionWrapper>
  );
};
