import { type FC, useMemo } from 'react';

import { useDictionary, usePagination } from '@/shared/lib';
import {
  Container,
  Section,
  Title,
  Paragraph,
  Pagination
} from '@/shared/ui';

import { MOCK_REVIEWS, ITEMS_PER_PAGE } from './ReviewsList.constants';

import {
  ReviewsWrapper,
  Header,
  Grid,
  ReviewCard,
  CardHeader,
  Avatar,
  AuthorBlock,
  AuthorName,
  VerifiedBadge,
  DateText,
  CardMeta,
  BookmakerName,
  Stars,
  ReviewText,
  EmptyState,
  PaginationWrapper,
} from './ReviewsList.styled';

const renderStars = (rating: number) => {
  const full = '★'.repeat(rating);
  const empty = '☆'.repeat(5 - rating);
  return full + empty;
};

const getInitials = (name: string) =>
  name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

export const ReviewsList: FC = () => {
  const dict = useDictionary();
  const { title, description, verifiedLabel, emptyState } = dict.reviewsList;

  const { page, totalPages, setPage } = usePagination({
    totalItems: MOCK_REVIEWS.length,
    itemsPerPage: ITEMS_PER_PAGE,
  });

  const visibleReviews = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    return MOCK_REVIEWS.slice(start, start + ITEMS_PER_PAGE);
  }, [page]);

  return (
    <Section pt pb>
      <Container>
        <ReviewsWrapper>
          <Header>
            <Title as="h2" level="h2">
              {title}
            </Title>
            <Paragraph size="lg">{description}</Paragraph>
          </Header>

          {visibleReviews.length === 0 ? (
            <EmptyState>{emptyState}</EmptyState>
          ) : (
            <Grid>
              {visibleReviews.map((review) => (
                <ReviewCard key={review.id}>
                  <CardHeader>
                    <Avatar>{getInitials(review.author)}</Avatar>
                    <AuthorBlock>
                      <AuthorName>
                        {review.author}
                        {review.verified && (
                          <VerifiedBadge title="Проверенный отзыв" aria-label="Проверенный отзыв">
                            ✓
                          </VerifiedBadge>
                        )}
                      </AuthorName>
                      <DateText>{review.date}</DateText>
                    </AuthorBlock>
                  </CardHeader>

                  <CardMeta>
                    <BookmakerName>{review.bookmaker}</BookmakerName>
                    <Stars aria-label={`${review.rating} из 5`}>
                      {renderStars(review.rating)}
                    </Stars>
                  </CardMeta>

                  <ReviewText>{review.text}</ReviewText>
                </ReviewCard>
              ))}
            </Grid>
          )}

          {totalPages > 1 && (
            <PaginationWrapper>
              <Pagination
                currentPage={page}
                totalPages={totalPages}
                onPageChange={setPage}
              />
            </PaginationWrapper>
          )}
        </ReviewsWrapper>
      </Container>
    </Section>
  );
};