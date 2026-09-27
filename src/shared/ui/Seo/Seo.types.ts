export interface SeoProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article" | "profile";
  noIndex?: boolean;
  keywords?: string;
  jsonLd?: Record<string, unknown>;
}
