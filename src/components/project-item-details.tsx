import { Project } from "../types";
import NoContentFallback from "./no-content-fallback";
import ProjectInfoStatus from "./project-info-status";

export default function ProjectItemDetails({ project }: { project: Project }) {
  return (
    <div className="p-2 rounded bg-[var(--background)] text-[var(--primary-foreground)] grid grid-cols-2 gap-x-4 gap-y-1 max-sm:grid-cols-1">
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover object-center rounded"
        />
      ) : (
        <NoContentFallback fallback="No image to show" />
      )}

      <div>
        <ProjectInfoStatus project={project} />
        {project.link && (
          <a
            href={project.link}
            className="text-blue-400 font-thin mb-1 text-sm"
          >
            Visit Site &rarr;
          </a>
        )}

        <p
          className="mb-4 text-sm"
          dangerouslySetInnerHTML={{
            __html: project.description.replace(/\n/g, "<br />"),
          }}
        />

        <ul className="flex gap-2 flex-wrap text-xs">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="py-0.5 px-2 rounded bg-[var(--primary)] text-[var(--primary-foreground)]"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
