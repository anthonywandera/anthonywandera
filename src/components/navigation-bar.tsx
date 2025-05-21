import { useEffect, useRef } from "react";

export default function NavigationBar() {
  const nav = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const navElement = nav.current;

    navElement?.addEventListener("click", (event) => {
      const target = event.target as HTMLElement;

      if (target.tagName === "a") {
        const href = target.getAttribute("href");

        if (href) {
          const section = document.querySelector(href);

          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            event.preventDefault();
          }
        }
      }
    });
  });

  return (
    <header className="flex justify-between py-2 px-10 sticky top-0 bg-[var(--background)] max-sm:px-6">
      <span>AW.</span>
      <nav ref={nav} className="flex gap-4 max-sm:hidden">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#reviews">Reviews</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
