import Grid_3 from "../components/grid-3";
import Section from "../components/Section";
import { projectsList } from "../data";

export default function FeaturedProjects() {
  const featuredProjectsList = projectsList
    .filter((project) => project.featured)
    .slice(0, 3);

  return (
    <Section id="projects">
      <h2 className="font-bold mb-4">Featured Projects </h2>
      <Grid_3>
        {featuredProjectsList.map((project) => (
          <div key={project.id}>
            <h3 className="mb-2 flex gap-2 items-center">
              {project.title}{" "}
              <span className="bg-emerald-400 text-xs px-2 py-0.5 rounded-full">
                {project.category}
              </span>
              {project.featured && (
                <span className="bg-amber-300 text-xs px-2 py-0.5 rounded-full">
                  Featured
                </span>
              )}
            </h3>
            <p className="mb-2">{project.description}</p>
            <h4 className="mb-1">Technologies</h4>
            <ul className="flex gap-2 flex-wrap text-xs">
              {project.technologies.map((tech) => (
                <li key={tech} className="py-0.5 px-2 rounded bg-gray-900">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Grid_3>
    </Section>
  );
}
