import About from "./sections/about";
import Contact from "./sections/contact";
import FeaturedProjects from "./sections/featured-projects";
import Hero from "./sections/hero";
import Navigation from "./sections/navigation";
import OtherProjects from "./sections/other-projects";
import Reviews from "./sections/reviews";
import Services from "./sections/services";

export default function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Services />
      <FeaturedProjects />
      <OtherProjects />
      <Reviews />
      <Contact />
    </>
  );
}
