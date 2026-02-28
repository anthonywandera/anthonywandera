import { forwardRef, useImperativeHandle, useRef } from "react";

const Dialog = forwardRef<
  { open(): void; close(): void },
  { children: React.ReactNode }
>(({ children }: { children: React.ReactNode }, ref) => {
  const dialogEl = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => ({
    open() {
      dialogEl.current?.showModal();
    },

    close() {
      dialogEl.current?.close();
    },
  }));

  return (
    <dialog
      id="dialog"
      ref={dialogEl}
      onClick={(e) => {
        const targetEl = e.target as HTMLElement;

        if (targetEl.id === "dialog") (targetEl as HTMLDialogElement).close();
      }}
      className="fixed left-1/2 top-1/2 overflow-y-scroll [scrollbar-width:none] -translate-x-1/2 -translate-y-1/2 z-50 bg-transparent w-[90%] [&::backdrop]:backdrop-blur-xs"
    >
      {children}
    </dialog>
  );
});

export default Dialog;
