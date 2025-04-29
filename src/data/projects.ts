import project_image_01 from "/src/assets/service-images/service-image-01.jpg";
import project_image_02 from "/src/assets/service-images/service-image-02.jpg";
import project_image_03 from "/src/assets/service-images/service-image-03.jpg";

// Project class
export class Project {
  id: string;
  name: string;
  image: string;
  description: string;
  technologies: string[];
  featured: boolean;
  url?: string;
  review?: string;

  constructor({
    name,
    technologies,
    image,
    description,
    featured = false,
    url,
    review,
  }: {
    name: string;
    image: string;
    description: string;
    technologies: string[];
    featured?: boolean;
    url?: string;
    review?: string;
  }) {
    this.name = name;
    this.description = description;
    this.technologies = technologies;
    this.image = image;
    this.url = url;
    this.featured = featured;
    this.review = review;
    this.id = name;
  }
}

// Projects list
export const projectsList = [
  new Project({
    name: "Project 01",
    image: project_image_01,
    description: "Project description",
    technologies: ["html"],
  }),
  new Project({
    name: "Project 02",
    image: project_image_02,
    description: "Project description",
    technologies: ["html"],
  }),
  new Project({
    name: "Project 03",
    image: project_image_03,
    description: "Project description",
    technologies: ["html"],
  }),
  new Project({
    name: "Project 04",
    image: project_image_01,
    description: "Project description",
    technologies: ["html"],
  }),
];
