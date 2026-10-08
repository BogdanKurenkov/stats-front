import type { FC } from "react";
import { Flame } from "lucide-react";

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
  MatchCard,
  MatchCardFooter,
  MatchCardHeader,
  MatchCardLabel,
  MatchCardMeta,
  Odds,
  PredictionBox,
  PredictionLabel,
  PredictionNote,
  PredictionRow,
  PredictionText,
  Team,
  TeamLogo,
  TeamsRow,
  Versus,
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
  const match = hero.matchCard;

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
          </HeroLeft>

          <MatchCard>
            <MatchCardHeader>
              <MatchCardLabel>
                <Flame size={16} />
                {match.label}
              </MatchCardLabel>
              <MatchCardMeta>
                <span>{match.date}</span>
                <span>{match.league}</span>
              </MatchCardMeta>
            </MatchCardHeader>

            <TeamsRow>
              <Team $align="left">
                <TeamLogo />
                <span>{match.homeTeam}</span>
              </Team>
              <Versus>vs</Versus>
              <Team $align="right">
                <TeamLogo />
                <span>{match.awayTeam}</span>
              </Team>
            </TeamsRow>

            <PredictionBox>
              <PredictionLabel>{match.predictionLabel}</PredictionLabel>
              <PredictionRow>
                <PredictionText>{match.predictionText}</PredictionText>
                <Odds>{match.odds}</Odds>
              </PredictionRow>
              <PredictionNote>{match.note}</PredictionNote>
            </PredictionBox>

            <MatchCardFooter>
              <Button variant="primary" size="medium">
                {match.cta}
              </Button>
            </MatchCardFooter>
          </MatchCard>
        </HeroTop>
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
