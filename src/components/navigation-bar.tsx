import NavigationButton from "./navigation-button";

export default function NavigationBar() {
  return (
    <header className="flex justify-between py-2 px-14 sticky top-0 bg-[var(--background)] max-sm:px-6">
      <span>AW.</span>
      <menu className="flex gap-4 max-sm:hidden">
        <NavigationButton to="home">Home</NavigationButton>
        <NavigationButton to="about">About</NavigationButton>
        <NavigationButton to="projects">Projects</NavigationButton>
        <NavigationButton to="reviews">Reviews</NavigationButton>
        <NavigationButton to="contact">Contact</NavigationButton>
      </menu>
    </header>
  );
}
