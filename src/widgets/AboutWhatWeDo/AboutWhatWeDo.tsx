import { useState } from "react";
import type { FC } from "react";
import {
  ArrowRight,
  Database,
  Activity,
  Radio,
  Layers,
  Check,
  X,
} from "lucide-react";
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
  CardIcon,
  CardTitle,
  CardDescription,
  MoreLink,
  DetailsSlot,
  DetailsPanel,
  DetailIcon,
  DetailContent,
  DetailTitle,
  DetailText,
  CloseButton,
} from "./AboutWhatWeDo.styled";

const CARD_ICONS = [Database, Activity, Radio, Layers];

export const AboutWhatWeDo: FC = () => {
  const dict = useDictionary();
  const section = dict.about.whatWeDo;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeItem = activeIndex !== null ? section.items[activeIndex] : null;

  const handleCardClick = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const fallbackItem = section.items[0];

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
            const Icon = CARD_ICONS[index];
            const isActive = activeIndex === index;

            return (
              <Card
                key={index}
                type="button"
                $isActive={isActive}
                onClick={() => handleCardClick(index)}
                aria-expanded={isActive}
                aria-controls="feature-detail"
              >
                <CardIcon>{Icon && <Icon />}</CardIcon>
                <CardTitle as="h3" level="h3">
                  {item.title}
                </CardTitle>
                <CardDescription size="sm">{item.description}</CardDescription>
                <MoreLink>
                  {section.moreLabel}
                  <ArrowRight size={16} />
                </MoreLink>
              </Card>
            );
          })}
        </Grid>

        <DetailsSlot id="feature-detail" aria-live="polite">
          <DetailsPanel
            $visible={Boolean(activeItem)}
            aria-hidden={!activeItem}
          >
            <DetailIcon>
              <Check />
            </DetailIcon>

            <DetailContent>
              <DetailTitle as="h3" level="h3">
                {activeItem?.title ?? fallbackItem.title}
              </DetailTitle>
              <DetailText size="md">
                {activeItem?.details ?? fallbackItem.details}
              </DetailText>
            </DetailContent>

            <CloseButton
              type="button"
              onClick={() => setActiveIndex(null)}
              aria-label="Закрыть"
              tabIndex={activeItem ? 0 : -1}
            >
              <X />
            </CloseButton>
          </DetailsPanel>
        </DetailsSlot>
      </Container>
    </SectionWrapper>
  );
};
