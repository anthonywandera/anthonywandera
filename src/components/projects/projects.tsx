import Heading from "../heading/heading";
import Section from "../section/section";
import { projectsList } from "../../data/projects";
import ProjectsCarousel from "../projects-carousel";

const Projects: React.FC = () => {
  return (
    <Section id="projects" center>
      <Heading title1="More of my work" title2="Projects" />
      <div className="grid grid-cols-1 grid-rows-[auto_1fr] gap-4 bg-[var(--theme-color-background-shade)] p-4 rounded-3xl">
        <menu className="flex gap-16 max-sm:gap-2.5 justify-self-center items-center font-semibold">
          <button>Web</button>
          <button>UI/UX</button>
          <button>Graphics</button>
        </menu>
        <ProjectsCarousel projects={projectsList} />
      </div>
    </Section>
  );
};

export default Projects;
