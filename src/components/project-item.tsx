import { useEffect, useRef, useState } from "react";
import { Project } from "../types";
import ProjectItemDetails from "./project-item-details";
import ProjectInfoStatus from "./project-info-status";

export default function ProjectItem({ project }: { project: Project }) {
  const [showModal, setShowModal] = useState(false);
  const dialogModal = useRef<HTMLDialogElement>(null);

  function handleClick() {
    setShowModal(true);
  }

  useEffect(() => {
    const dialogEl = dialogModal.current;

    if (showModal) dialogEl?.showModal();

    dialogEl?.addEventListener("click", (e) => {
      const targetEl = e.target as HTMLElement;

      if (targetEl.id === "dialog") {
        dialogEl.close();
        setShowModal(false);
        return;
      }
    });
  }, [showModal]);

  return (
    <>
      <button
        onClick={handleClick}
        className="bg-[var(--primary)] p-2 rounded text-left"
      >
        <ProjectInfoStatus project={project} />
        <p className="mb-2 text-sm text-[var(--primary-foreground)]">
          {project.description.length > 150
            ? project.description.slice(0, 150) + "..."
            : project.description}
        </p>
      </button>

      <dialog
        id="dialog"
        ref={dialogModal}
        onClose={() => {
          setShowModal(false);
        }}
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-transparent w-[60%] max-md:w-[80%]"
      >
        <ProjectItemDetails project={project} />
      </dialog>
    </>
  );
}
