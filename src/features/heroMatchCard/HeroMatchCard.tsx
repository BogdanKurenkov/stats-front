import { Flame } from "lucide-react";

import { useDictionary } from "@/shared";

import {
  MatchCard,
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
} from "./HeroMatchCard.styled";

export const HeroMatchCard = () => {
  const dict = useDictionary();
  const match = dict.hero.matchCard;

  return (
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
    </MatchCard>
  );
};
