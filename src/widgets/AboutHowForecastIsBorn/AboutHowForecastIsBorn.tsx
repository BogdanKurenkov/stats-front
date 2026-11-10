import { useState } from "react";
import type { FC } from "react";
import { ArrowRight, BarChart2, X } from "lucide-react";
import { useDictionary } from "@/shared/lib/localization";
import { Container } from "@/shared";

import {
  SectionWrapper,
  Header,
  TitleGroup,
  Kicker,
  SectionTitle,
  SectionSubtitle,
  Grid,
  Card,
  CardTop,
  CardNumber,
  CardTitle,
  CardDescription,
  DetailsPanel,
  DetailIcon,
  DetailContent,
  DetailTitle,
  DetailText,
  CloseButton,
} from "./AboutHowForecastIsBorn.styled";

export const AboutHowForecastIsBorn: FC = () => {
  const dict = useDictionary();
  const section = dict.about.howForecastIsBorn;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeItem = activeIndex !== null ? section.items[activeIndex] : null;

  const handleCardClick = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

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

        <Grid>
          {section.items.map((item, index) => {
            const num = String(index + 1).padStart(2, "0");
            const isActive = activeIndex === index;

            return (
              <Card
                key={index}
                type="button"
                $isActive={isActive}
                onClick={() => handleCardClick(index)}
                aria-expanded={isActive}
                aria-controls="how-forecast-detail"
              >
                <CardTop>
                  <CardNumber>{num}</CardNumber>
                  <ArrowRight size={16} />
                </CardTop>
                <CardTitle as="h3" level="h3">
                  {item.title}
                </CardTitle>
                <CardDescription size="sm">{item.description}</CardDescription>
              </Card>
            );
          })}
        </Grid>

        {activeItem && (
          <DetailsPanel id="how-forecast-detail" aria-live="polite">
            <DetailIcon>
              <BarChart2 />
            </DetailIcon>

            <DetailContent>
              <DetailTitle as="h3" level="h3">
                {String(activeIndex! + 1).padStart(2, "0")} - {activeItem.title}
              </DetailTitle>
              <DetailText size="md">{activeItem.details}</DetailText>
            </DetailContent>

            <CloseButton
              type="button"
              onClick={() => setActiveIndex(null)}
              aria-label="Закрыть"
            >
              <X />
            </CloseButton>
          </DetailsPanel>
        )}
      </Container>
    </SectionWrapper>
  );
};
