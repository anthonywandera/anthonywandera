import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function ProjectPreview<
  PropsType extends {
    show: boolean;
    children: React.ReactNode;
    hide: () => void;
  }
>(props: PropsType) {
  const dialog = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (props.show) dialog.current?.showModal();
  }, [props.show]);

  const markup = (
    <dialog
      ref={dialog}
      onClose={props.hide}
      onClick={(e: React.MouseEvent) => {
        const targetEl = e.target as HTMLElement;
        const parentDialogEl = targetEl.closest("dialog");

        if (parentDialogEl === targetEl) props.hide();
      }}
      className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 rounded focus:outline-none bg-[var(--theme-color-background-tint)] text-[var(--theme-color-text)] max-md:min-w-3/4"
    >
      {props.children}
    </dialog>
  );

  return createPortal(markup, document.getElementById("modal")!);
}
