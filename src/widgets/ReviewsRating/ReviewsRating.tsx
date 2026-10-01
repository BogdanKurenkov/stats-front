import type { FC } from "react";
import { useDictionary } from "@/shared/lib/localization";

import { Container, Section, Title, Paragraph } from "@/shared/ui";

import {
  RatingWrapper,
  Header,
  RatingList,
  RatingRow,
  RankBadge,
  BookmakerInfo,
  BookmakerName,
  BookmakerSummary,
  BookmakerStats,
  RatingValue,
  ReviewsCount,
} from "./ReviewsRating.styled";

export const ReviewsRating: FC = () => {
  const dict = useDictionary();
  const { title, description, ratingLabel, reviewsLabel, bookmakers } =
    dict.reviewsRating;

  return (
    <Section pt pb>
      <Container>
        <RatingWrapper>
          <Header>
            <Title as="h2" level="h2">
              {title}
            </Title>
            <Paragraph size="lg">{description}</Paragraph>
          </Header>

          <RatingList>
            {bookmakers.map((bk) => (
              <RatingRow key={bk.name}>
                <RankBadge $rank={bk.rank}>{bk.rank}</RankBadge>

                <BookmakerInfo>
                  <BookmakerName>{bk.name}</BookmakerName>
                  <BookmakerSummary>{bk.summary}</BookmakerSummary>
                </BookmakerInfo>

                <BookmakerStats>
                  <RatingValue>
                    {ratingLabel}: {bk.rating.toFixed(1)}
                  </RatingValue>
                  <ReviewsCount>
                    {bk.reviewsCount.toLocaleString("ru-RU")} {reviewsLabel}
                  </ReviewsCount>
                </BookmakerStats>
              </RatingRow>
            ))}
          </RatingList>
        </RatingWrapper>
      </Container>
    </Section>
  );
};
