import Grid_3 from "../components/grid-3";
import Section from "../components/Section";
import Title from "../components/title";
import { projectsList } from "../data";

export default function FeaturedProjects() {
  const featuredProjectsList = projectsList
    .filter((project) => project.featured)
    .slice(0, 3);

  return (
    <Section id="projects">
      <Title title_1="Best of what I do" title_2="Featured Projects" />
      <Grid_3>
        {featuredProjectsList.map((project) => (
          <div key={project.id} className="relative rounded overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute bottom-0 w-full p-1 bg-linear-[#0000,#0005_10%,var(--primary)_90%] ">
              <h3 className="mb-2 flex gap-2 items-center font-semibold">
                <span>{project.title}</span>
                <span className="p-0.5 bg-[var(--primary-foreground)] rounded-full"></span>
                <span className="bg-[var(--primary-foreground)] text-[var(--primary)] text-xs px-2 py-0.5 rounded-full">
                  {project.category}
                </span>
              </h3>
              <div className="hidden">
                <p className="mb-2 text-sm text-[var(--primary-foreground)]">
                  {project.description}
                </p>
              </div>
              <ul className="flex gap-2 flex-wrap text-xs">
                {project.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="py-0.5 px-2 rounded bg-[var(--secondary)] text-[var(--secondary-foreground)]"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </Grid_3>
    </Section>
  );
}
