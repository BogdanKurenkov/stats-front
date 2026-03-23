import { FC, useMemo, useState } from 'react';
import { Container, Pagination, Section, Title } from '@/shared/ui';
import {
  NewsGrid,
  NewsCard,
  NewsTitle,
  NewsDescription,
  NewsMeta,
  NewsSource,
  NewsDate,
  NewsLink,
} from './NewsList.styled';
import { NewsListProps } from './NewsList.types';
import { MOCK_NEWS } from './NewsList.constants';

const ITEMS_PER_PAGE = 3;

export const NewsList: FC<NewsListProps> = ({ articles = MOCK_NEWS, className }) => {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(MOCK_NEWS.length / ITEMS_PER_PAGE);

  const paginatedNews = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    return MOCK_NEWS.slice(start, end);
  }, [page]);


  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };

  return (
    <Section pt pb>
      <Container>
        <Title as="h2" level="h2" style={{ marginBottom: '32px' }}>
          Спортивные новости
        </Title>
        <NewsGrid className={className}>
          {articles.map((item, idx) => (
            <NewsCard
              key={idx}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <NewsTitle as="h3" level="h3">
                📰 {item.title}
              </NewsTitle>
              <NewsDescription size="md">
                {item.description}
              </NewsDescription>
              <NewsMeta>
                <NewsSource>{item.source.name}</NewsSource>
                <NewsDate>{formatDate(item.publishedAt)}</NewsDate>
                <NewsLink>Ссылка</NewsLink>
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