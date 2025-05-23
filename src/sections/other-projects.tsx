import Grid_3 from "../components/grid-3";
import ProjectItem from "../components/project-item";
import Section from "../components/Section";
import Title from "../components/title";
import { projectsList } from "../data";

export default function OtherProjects() {
  return (
    <Section>
      <Title title_1="More of my work" title_2="Other Projects" />

      <div className="flex flex-col gap-8">
        <Grid_3>
          {projectsList.map((project) => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </Grid_3>
      </div>
    </Section>
  );
}
