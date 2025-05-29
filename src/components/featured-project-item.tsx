import { useRef } from "react";
import { Project } from "../types";
import NoContentFallback from "./no-content-fallback";
import Dialog from "./dialog";
import ProjectItemDetails from "./project-item-details";

export default function FeaturedProjectItem({ project }: { project: Project }) {
  const dialogModal = useRef<{ open(): void; close(): void }>(null);

  function handleClick() {
    dialogModal.current?.open();
  }

  return (
    <>
      <button
        onClick={handleClick}
        className="relative rounded-lg overflow-hidden max-md:h-40"
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center"
          />
        ) : (
          <NoContentFallback fallback="No image to show" />
        )}
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
      </button>

      <Dialog ref={dialogModal}>
        <ProjectItemDetails project={project} />
      </Dialog>
    </>
  );
}
