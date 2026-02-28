import { useRef } from "react";
import { Project } from "../types";
import ProjectItemDetails from "./project-item-details";
import ProjectInfoStatus from "./project-info-status";
import Dialog from "./dialog";

export default function ProjectItem({ project }: { project: Project }) {
  const dialogModal = useRef<{ open(): void; close(): void }>(null);

  function handleClick() {
    dialogModal.current?.open();
  }

  return (
    <>
      <button
        onClick={handleClick}
        className="bg-[var(--primary)] p-2 rounded text-left flex flex-col"
      >
        <ProjectInfoStatus project={project} />
        <p
          className="mb-2 text-sm text-[var(--primary-foreground)]"
          dangerouslySetInnerHTML={{
            __html:
              project.description.length > 1000
                ? project.description.replace(/\n/g, "<br />").slice(0, 1000) +
                  "..."
                : project.description,
          }}
        ></p>
      </button>

      <Dialog ref={dialogModal}>
        <ProjectItemDetails project={project} />
      </Dialog>
    </>
  );
}
