import { useEffect, useRef, useState } from "react";
import { Project } from "../types";
import Dot from "./dot";

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
      </button>

      <dialog
        id="dialog"
        ref={dialogModal}
        onClose={() => {
          setShowModal(false);
        }}
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-transparent"
      >
        <div className="p-2 rounded bg-white text-[var(--primary)]">
          <img src={project.image} />
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
          <p className="mb-2 text-sm">
            {project.description.length > 150
              ? project.description.slice(0, 150) + "..."
              : project.description}
          </p>
        </div>
      </dialog>
    </>
  );
}
