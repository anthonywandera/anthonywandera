export interface ClientReview {
  id: string;
  date: string;
  rating: number;
  review: string;
  name: string;
  image?: string;
  link?: string;
  company?: string;
  position?: string;
}
