import Heading from "../heading/heading";
import Section from "../section/section";
import FeaturedProject from "./featured-project";

export default function FeaturedProjects() {
  return (
    <Section id="featured-projects" center>
      <Heading title1="What I have done" title2="Featured Projects" />
      <div>
        <FeaturedProject />
      </div>
    </Section>
  );
}
