import { IoMenuOutline } from "react-icons/io5";
import NavigationButton from "./navigation-button";
import { useState } from "react";

export default function NavigationBar() {
  const [showMenu, setShowMenu] = useState(false);

  function handleToggleMenu() {
    setShowMenu((prev) => !prev);
  }

  return (
    <header className="flex justify-end py-2 px-14 sticky top-0 z-50 max-sm:px-6">
      <div className="relative">
        <menu
          className={`${
            showMenu ? "" : "max-md:hidden"
          } flex gap-4 max-md:absolute max-md:-bottom-1 max-md:right-0 max-md:translate-y-full max-md:flex-col max-md:bg-[var(--primary)] max-md:p-4 max-md:rounded **:text-left`}
        >
          <NavigationButton to="home">Home</NavigationButton>
          <NavigationButton to="about">About</NavigationButton>
          <NavigationButton to="projects">Projects</NavigationButton>
          <NavigationButton to="reviews">Reviews</NavigationButton>
          <NavigationButton to="contact">Contact</NavigationButton>
        </menu>
        <button className="hidden max-md:block" onClick={handleToggleMenu}>
          <IoMenuOutline className="text-2xl" />
        </button>
      </div>
    </header>
  );
}
