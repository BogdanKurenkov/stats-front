import { useState, type FC } from "react";
import { ArrowRight, X } from "lucide-react";

import { useDictionary } from "@/shared/lib/localization";
import { ROUTES, Section, Title } from "@/shared";

import { OUR_TEAM_ICONS } from "./OurTeam.constants";

import {
  SectionWrapper,
  BackgroundLayer,
  ContentWrapper,
  SectionHeading,
  HeadingText,
  Description,
  AboutLink,
  ItemsGrid,
  Item,
  ItemHeader,
  IconWrapper,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemMoreLink,
  DetailsSlot,
  DetailsPanel,
  DetailsHeader,
  DetailsTitles,
  DetailsLabel,
  DetailsTitle,
  CloseButton,
  DetailsText,
  OurTeamContainer,
} from "./OurTeam.styled";

export const OurTeam: FC = () => {
  const dict = useDictionary();
  const section = dict.ourTeam;

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeItem = activeIndex !== null ? section.items[activeIndex] : null;

  const handleItemClick = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const handleClose = () => setActiveIndex(null);

  const fallbackItem = section.items[0];

  return (
    <SectionWrapper>
      <BackgroundLayer />

      <Section pt pb>
        <OurTeamContainer>
          <AboutLink href={ROUTES.ABOUT}>
            {section.aboutLink ?? "О нашей команде"}
            <ArrowRight size={16} />
          </AboutLink>
          <ContentWrapper>
            <SectionHeading>
              <HeadingText>
                <Title as="h2" level="h2">
                  {section.title}
                </Title>
                <Description size="md">{section.description}</Description>
              </HeadingText>
            </SectionHeading>

            <ItemsGrid>
              {section.items.map((item, index) => {
                const Icon = OUR_TEAM_ICONS[index];
                const isActive = activeIndex === index;

                return (
                  <Item
                    key={index}
                    $isActive={isActive}
                    onClick={() => handleItemClick(index)}
                    role="button"
                    tabIndex={0}
                    aria-pressed={isActive}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleItemClick(index);
                      }
                    }}
                  >
                    <ItemHeader>
                      <IconWrapper>{Icon && <Icon size={20} />}</IconWrapper>
                      <ItemTitle as="h3" level="h3">
                        {item.title}
                      </ItemTitle>
                    </ItemHeader>

                    <ItemContent>
                      <ItemDescription size="sm">
                        {item.description}
                      </ItemDescription>

                      <ItemMoreLink $isActive={isActive}>
                        {section.moreLabel ?? "Подробнее"}
                        <ArrowRight size={14} />
                      </ItemMoreLink>
                    </ItemContent>
                  </Item>
                );
              })}
            </ItemsGrid>

            <DetailsSlot>
              <DetailsPanel
                $visible={Boolean(activeItem)}
                aria-hidden={!activeItem}
              >
                <DetailsHeader>
                  <DetailsTitles>
                    <DetailsLabel>
                      {section.detailsLabel ?? "КОМАНДА PREDICTIQ"}
                    </DetailsLabel>
                    <DetailsTitle as="h4" level="h4">
                      {activeItem?.title ?? fallbackItem.title}
                    </DetailsTitle>
                  </DetailsTitles>

                  <CloseButton
                    type="button"
                    onClick={handleClose}
                    aria-label={section.closeLabel ?? "Закрыть"}
                    tabIndex={activeItem ? 0 : -1}
                  >
                    {section.closeLabel ?? "Закрыть"}
                    <X />
                  </CloseButton>
                </DetailsHeader>

                <DetailsText>
                  {activeItem?.details ??
                    fallbackItem.details ??
                    fallbackItem.description}
                </DetailsText>
              </DetailsPanel>
            </DetailsSlot>
          </ContentWrapper>
        </OurTeamContainer>
      </Section>
    </SectionWrapper>
  );
};
