import { Project } from "../types";
import Dot from "./dot";

export default function ProjectItem({ project }: { project: Project }) {
  return (
    <div className="bg-[var(--primary)] p-2 rounded">
      <h3 className="mb-2 flex gap-2 items-center font-semibold">
        <span>{project.title}</span>
        <Dot />
        <span className="bg-[var(--primary-foreground)] text-[var(--primary)] text-xs px-2 py-0.5 rounded-full">
          {project.category}
        </span>
        {project.ongoing && (
          <>
            <Dot />
            <span className="text-xs text-green-300">Ongoing</span>
          </>
        )}
      </h3>
      <p className="mb-2 text-sm text-[var(--primary-foreground)]">
        {project.description.length > 150
          ? project.description.slice(0, 150) + "..."
          : project.description}
      </p>
    </div>
  );
}
