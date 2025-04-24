export class Project {
  id: string;
  name: string;
  technologies: string[];
  review?: string;

  constructor({
    name,
    technologies,
    review,
  }: {
    name: string;
    technologies: string[];
    review?: string;
  }) {
    this.name = name;
    this.technologies = technologies;
    this.review = review;
    this.id = name;
  }
}
