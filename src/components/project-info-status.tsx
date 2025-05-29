import { Project } from "../types";
import Dot from "./dot";
import Highlighted from "./highlighted";

export default function ProjectInfoStatus({ project }: { project: Project }) {
  return (
    <h3 className="flex flex-wrap gap-x-2 items-center font-semibold mb-2">
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
  );
}
