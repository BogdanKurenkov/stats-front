export interface NewsSource {
  name: string;
}

export interface NewsArticle {
  title: string;
  description: string;
  source: NewsSource;
  publishedAt: string;
  url: string;
}

export interface NewsListProps {
  articles: NewsArticle[];
  className?: string;
}
