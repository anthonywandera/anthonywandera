import { ProjectReview } from "./projectReview";

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  featured?: boolean;
  startDate?: string;
  endDate?: string;
  image?: string;
  review?: ProjectReview[];
  link?: string;
}
