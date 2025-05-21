import About from "./sections/about";
import FeaturedProjects from "./sections/featured-projects";
import Hero from "./sections/hero";
import Navigation from "./sections/navigation";
import Services from "./sections/services";

export default function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Services />
      <FeaturedProjects />
    </>
  );
}
