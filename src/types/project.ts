import { ProjectReview } from "./projectReview";

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: "web" | "3d" | "uiux";
  featured?: boolean;
  startDate?: string;
  endDate?: string;
  image?: string;
  review?: ProjectReview[];
  link?: string;
}
