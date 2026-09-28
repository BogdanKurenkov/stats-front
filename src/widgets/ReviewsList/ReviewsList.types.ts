export interface Review {
  id: string;
  author: string;
  bookmaker: string;
  rating: number;
  date: string;
  text: string;
  verified?: boolean;
}
