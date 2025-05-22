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
          <div key={project.id} className="relative rounded-lg overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute bottom-0 p-1 bg-linear-[#0000,#0005_10%,var(--primary)_60%] ">
              <h3 className="mb-2 flex gap-2 items-center font-semibold">
                {project.title}{" "}
                <span className="bg-emerald-400 text-gray-700 text-xs font-light px-2 py-0.5 rounded-full">
                  {project.category}
                </span>
                {project.featured && (
                  <span className="bg-amber-300 text-gray-700 text-xs font-light px-2 py-0.5 rounded-full">
                    Featured
                  </span>
                )}
              </h3>
              <p className="mb-2 text-sm text-[var(--secondary-foreground)]">
                {project.description}
              </p>
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
