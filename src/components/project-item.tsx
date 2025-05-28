import { useEffect, useRef, useState } from "react";
import { Project } from "../types";
import Dot from "./dot";
import Highlighted from "./highlighted";

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
      </dialog>
    </>
  );
}
