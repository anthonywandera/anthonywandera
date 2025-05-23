import { ProjectReview } from "./project-review";

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: "web" | "3d" | "uiux";
  featured?: boolean;
  ongoing?: boolean;
  duration?: number; // in days
  image?: string;
  review?: ProjectReview[];
  link?: string;
}
