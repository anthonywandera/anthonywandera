import Grid_3 from "../components/grid-3";
import Section from "../components/Section";
import { projectsList } from "../data";

export default function OtherProjects() {
  const webProjects = projectsList.filter(
    (project) => project.category === "web"
  );

  const uiProjects = projectsList.filter(
    (project) => project.category === "uiux"
  );

  const _3dProjects = projectsList.filter(
    (project) => project.category === "3d"
  );

  return (
    <Section className="flex flex-col gap-8">
      <h2 className="font-bold mb-2">Other projects</h2>

      <Grid_3>
        {webProjects.map((project) => (
          <div key={project.title}>
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
                <li key={tech} className="py-0.5 px-2 rounded bg-gray-100">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Grid_3>

      <Grid_3>
        {uiProjects.map((project) => (
          <div key={project.title}>
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
                <li key={tech} className="py-0.5 px-2 rounded bg-gray-100">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Grid_3>

      <Grid_3>
        {_3dProjects.map((project) => (
          <div key={project.title}>
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
                <li key={tech} className="py-0.5 px-2 rounded bg-gray-100">
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
