import Grid_3 from "../components/grid-3";
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
            <div
              key={project.title}
              className="bg-[var(--primary)] p-2 rounded"
            >
              <h3 className="mb-2 flex gap-2 items-center font-semibold">
                <span>{project.title}</span>
                <span className="p-0.5 bg-[var(--primary-foreground)] rounded-full"></span>
                <span className="bg-[var(--primary-foreground)] text-[var(--primary)] text-xs px-2 py-0.5 rounded-full">
                  {project.category}
                </span>
              </h3>
              <p className="mb-2 text-sm text-[var(--primary-foreground)]">
                {project.description}
              </p>
            </div>
          ))}
        </Grid_3>
      </div>
    </Section>
  );
}
