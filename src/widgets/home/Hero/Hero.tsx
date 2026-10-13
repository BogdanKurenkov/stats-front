import type { FC } from "react";
import dynamic from "next/dynamic";

const HeroMatchCard = dynamic(
  () => import("@/features/heroMatchCard").then((mod) => mod.HeroMatchCard),
  { ssr: false },
);

import { useDictionary } from "@/shared/lib/localization";
import { scrollToSection } from "@/shared/lib/scroll";
import { Button, Container } from "@/shared/ui";

import { BOTTOM_STAT_ICONS, FEATURE_ICONS, SECTION_ID } from "./Hero.constants";

import {
  Accent,
  ActionsRow,
  FeatureItem,
  FeaturesRow,
  HeroDescription,
  HeroLeft,
  HeroSection,
  HeroTitle,
  HeroTop,
  BottomStatCard,
  BottomStatContent,
  BottomStatIcon,
  BottomStatLabel,
  BottomStatNumber,
  BottomStatsGrid,
} from "./Hero.styled";

export const Hero: FC = () => {
  const dict = useDictionary();
  const hero = dict.hero;

  return (
    <HeroSection pt pb id={SECTION_ID}>
      <Container>
        <HeroTop>
          <HeroLeft>
            <HeroTitle>
              {hero.titleStart} {` `}
              <Accent>{hero.titleEnd}</Accent>
            </HeroTitle>

            <HeroDescription size="lg">{hero.description}</HeroDescription>

            <ActionsRow>
              <Button variant="primary" size="large">
                {hero.primaryCta}
              </Button>
              <Button
                variant="outline"
                size="large"
                onClick={() => scrollToSection("")}
              >
                {hero.secondaryCta}
              </Button>
            </ActionsRow>
          </HeroLeft>

          <HeroMatchCard />

          <FeaturesRow>
            {hero.features.map((feature) => {
              const Icon =
                FEATURE_ICONS[feature.icon as keyof typeof FEATURE_ICONS];
              return (
                <FeatureItem key={feature.label}>
                  <Icon size={18} />
                  {feature.label}
                </FeatureItem>
              );
            })}
          </FeaturesRow>
        </HeroTop>
      </Container>

      <Container>
        <BottomStatsGrid>
          {hero.bottomStats.map((stat) => {
            const Icon =
              BOTTOM_STAT_ICONS[stat.icon as keyof typeof BOTTOM_STAT_ICONS];
            return (
              <BottomStatCard key={stat.label}>
                <BottomStatIcon>
                  <Icon size={24} />
                </BottomStatIcon>
                <BottomStatContent>
                  <BottomStatNumber>{stat.number}</BottomStatNumber>
                  <BottomStatLabel>{stat.label}</BottomStatLabel>
                </BottomStatContent>
              </BottomStatCard>
            );
          })}
        </BottomStatsGrid>
      </Container>
    </HeroSection>
  );
};
