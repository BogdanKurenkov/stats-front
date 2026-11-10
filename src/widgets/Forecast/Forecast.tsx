import type { FC } from "react";
import { useRouter } from "next/router";

import { useDictionary } from "@/shared";
import { Button } from "@/shared/ui";

import { MOCK_DATA } from "./Forecast.constants";

import {
  WidgetContainer,
  ButtonWrapper,
  Card,
  CardTopInfo,
  CardsGrid,
  Coefficient,
  DateTimeRow,
  ExpertLabel,
  ExpertSection,
  Flag,
  Header,
  ItemDescription,
  LeagueRow,
  MainTitle,
  PredictionBlock,
  PredictionTitle,
  RatingBar,
  RatingSegment,
  Subtitle,
  Team,
  TeamLogo,
  TeamName,
  TeamsRow,
  TitleWrapper,
  ViewAllButton,
  VsText,
} from "./Forecast.styled";

export const Forecast: FC = () => {
  const dict = useDictionary().forecasts;
  const router = useRouter();

  return (
    <WidgetContainer>
      <Header>
        <TitleWrapper>
          <MainTitle>{dict.title}</MainTitle>
          <Subtitle>{dict.subtitle}</Subtitle>
        </TitleWrapper>
        <ViewAllButton onClick={() => router.push("/forecasts")}>
          {dict.viewAll}
        </ViewAllButton>
      </Header>

      <CardsGrid>
        {MOCK_DATA.map((card) => (
          <Card key={card.id}>
            <CardTopInfo>
              <LeagueRow>
                <Flag>{card.countryFlag}</Flag>
                <span>{card.league}</span>
              </LeagueRow>
              <DateTimeRow>
                <span>{card.date}</span>
                <span>•</span>
                <span>{card.time}</span>
              </DateTimeRow>
            </CardTopInfo>

            <TeamsRow>
              <Team>
                <TeamLogo src={card.teamHome.logo} alt={card.teamHome.name} />
                <TeamName>{card.teamHome.name}</TeamName>
              </Team>
              <VsText>vs</VsText>
              <Team>
                <TeamLogo src={card.teamAway.logo} alt={card.teamAway.name} />
                <TeamName>{card.teamAway.name}</TeamName>
              </Team>
            </TeamsRow>

            <PredictionBlock>
              <PredictionTitle>{card.predictionTitle}</PredictionTitle>
              <Coefficient>{card.coefficient}</Coefficient>
            </PredictionBlock>

            <ItemDescription>{card.description}</ItemDescription>

            <ExpertSection>
              <ExpertLabel>{dict.expertAnalysis}</ExpertLabel>
              <RatingBar>
                {Array.from({ length: 5 }).map((_, i) => (
                  <RatingSegment key={i} $active={i < card.expertRating} />
                ))}
              </RatingBar>
            </ExpertSection>

            <ButtonWrapper>
              <Button
                variant="primary"
                onClick={() => router.push(`/forecasts/${card.id}`)}
              >
                {dict.readMore}
              </Button>
            </ButtonWrapper>
          </Card>
        ))}
      </CardsGrid>
    </WidgetContainer>
  );
};
