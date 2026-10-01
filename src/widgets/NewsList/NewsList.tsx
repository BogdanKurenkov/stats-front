import type { FC } from "react";

import { Container, Pagination, Section } from "@/shared";
import { usePagination, useDictionary, formatDate } from "@/shared/lib";

import type { NewsListProps } from "./NewsList.types";

import { ITEMS_PER_PAGE, MOCK_NEWS } from "./NewsList.constants";

import {
  NewsGrid,
  NewsCard,
  NewsTitle,
  NewsDescription,
  NewsMeta,
  NewsSource,
  NewsDate,
  NewsLink,
  StyledTitle,
} from "./NewsList.styled";

export const NewsList: FC<NewsListProps> = ({
  articles = MOCK_NEWS,
  className,
}) => {
  const { news } = useDictionary();

  const { page, totalPages, setPage } = usePagination({
    totalItems: articles.length,
    itemsPerPage: ITEMS_PER_PAGE,
  });

  const visibleArticles = articles.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE,
  );

  return (
    <Section pt pb>
      <Container>
        <StyledTitle as="h2" level="h2">
          {news.title}
        </StyledTitle>

        <NewsGrid className={className}>
          {visibleArticles.map((item, idx) => (
            <NewsCard
              key={idx}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <NewsTitle as="h3" level="h3">
                📰 {item.title}
              </NewsTitle>
              <NewsDescription size="md">{item.description}</NewsDescription>
              <NewsMeta>
                <NewsSource>{item.source.name}</NewsSource>
                <NewsDate>{formatDate(item.publishedAt)}</NewsDate>
                <NewsLink>{news.title}</NewsLink>
              </NewsMeta>
            </NewsCard>
          ))}
        </NewsGrid>

        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      </Container>
    </Section>
  );
};
