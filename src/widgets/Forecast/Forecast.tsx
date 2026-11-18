import { useState } from "react";
import type { FC } from "react";
import { useRouter } from "next/router";
import { Star } from "lucide-react";

import { useDictionary } from "@/shared";
import { Button, Modal } from "@/shared/ui";

import { MOCK_DATA } from "./Forecast.constants";
import type { ForecastCardData } from "./Forecast.types";

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

import {
  ModalContentWrapper,
  ModalHeader,
  ModalTitle,
  ModalMeta,
  ModalGrid,
  ModalInfoCard,
  ModalInfoLabel,
  ModalInfoValue,
  ModalLogicTitle,
  ModalLogicList,
  ModalLogicItem,
  ModalDisclaimer,
  ModalAction,
} from "./ForecastModal.styled";

export const Forecast: FC = () => {
  const dict = useDictionary().forecasts;
  const router = useRouter();
  const [selectedCard, setSelectedCard] = useState<ForecastCardData | null>(
    null,
  );

  return (
    <>
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
                <Button variant="primary" onClick={() => setSelectedCard(card)}>
                  {dict.readMore}
                </Button>
              </ButtonWrapper>
            </Card>
          ))}
        </CardsGrid>
      </WidgetContainer>

      <Modal
        isOpen={!!selectedCard}
        onClose={() => setSelectedCard(null)}
        withCloseButton={true}
      >
        {selectedCard && (
          <ModalContentWrapper>
            <ModalHeader>
              <ModalTitle>{dict.modal.title}</ModalTitle>
              <ModalMeta>
                <span>
                  {selectedCard.countryFlag} {selectedCard.league}
                </span>
                <span> • </span>
                <span>
                  {selectedCard.teamHome.name} — {selectedCard.teamAway.name}
                </span>
              </ModalMeta>
            </ModalHeader>

            <ModalGrid>
              <ModalInfoCard>
                <ModalInfoLabel>{dict.modal.marketLabel}</ModalInfoLabel>
                <ModalInfoValue>{selectedCard.predictionTitle}</ModalInfoValue>
              </ModalInfoCard>
              <ModalInfoCard>
                <ModalInfoLabel>{dict.modal.coefficientLabel}</ModalInfoLabel>
                <ModalInfoValue>{selectedCard.coefficient}</ModalInfoValue>
              </ModalInfoCard>
            </ModalGrid>

            <div>
              <ModalLogicTitle>{dict.modal.logicTitle}</ModalLogicTitle>
              <ModalLogicList>
                {dict.modal.logicItems.map((text: string, index: number) => (
                  <ModalLogicItem key={index}>{text}</ModalLogicItem>
                ))}
              </ModalLogicList>
            </div>

            <ModalDisclaimer>{dict.modal.disclaimer}</ModalDisclaimer>

            <ModalAction>
              <Button variant="primary" onClick={() => setSelectedCard(null)}>
                <Star size={16} />
                {dict.modal.addToFavorites}
              </Button>
            </ModalAction>
          </ModalContentWrapper>
        )}
      </Modal>
    </>
  );
};
