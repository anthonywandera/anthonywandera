import { Project } from "../types";
import Dot from "./dot";
import Highlighted from "./highlighted";

export default function ProjectItemDetails({ project }: { project: Project }) {
  return (
    <div className="p-2 rounded bg-[var(--background)] text-[var(--primary-foreground)]">
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="h-60 w-full object-cover object-center rounded"
        />
      )}
      <div className="flex flex-warp mb-2 justify-between">
        <h3 className="flex gap-2 items-center font-semibold">
          <span>{project.title}</span>
          <Dot />
          <span className="bg-[var(--primary-foreground)] text-[var(--primary)] text-xs px-2 py-0.5 rounded-full">
            {project.category}
          </span>
          {project.featured && (
            <>
              <Dot />
              <Highlighted className="text-xs">Featured</Highlighted>
            </>
          )}
          {project.ongoing && (
            <>
              <Dot />
              <span className="text-xs text-green-300">Ongoing</span>
            </>
          )}
        </h3>
        {project.link && (
          <a href={project.link} className="text-blue-800 font-thin">
            Visit Site &rarr;
          </a>
        )}
      </div>
      <p className="mb-2 text-sm">{project.description}</p>
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
  );
}
