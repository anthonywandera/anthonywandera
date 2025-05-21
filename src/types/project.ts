import { ProjectReview } from "./project-review";

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
