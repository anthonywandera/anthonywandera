import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Project } from "@/data/projects";
import ProjectItem from "./projects/project-item";

export default function ProjectsCarousel({
  projects,
}: {
  projects: Project[];
}) {
  return (
    <Carousel
      className="w-full"
      opts={{
        loop: true,
        slidesToScroll: 1,
      }}
    >
      <CarouselContent>
        {projects.map((project) => (
          <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/4">
            <ProjectItem
              image={project.image}
              name={project.name}
              description={project.description}
              url={project.url}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
