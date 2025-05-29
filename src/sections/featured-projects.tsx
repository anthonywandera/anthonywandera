import FeaturedProjectItem from "../components/featured-project-item";
import Grid_3 from "../components/grid-3";
import NoContentFallback from "../components/no-content-fallback";
import Section from "../components/Section";
import Title from "../components/title";
import { projectsList } from "../data";

export default function FeaturedProjects() {
  const featuredProjectsList = projectsList
    .filter((project) => project.featured)
    .slice(0, 3);

  return (
    <Section id="projects">
      <Title title_1="Best of what I do" title_2="Featured Projects" />
      {featuredProjectsList.length > 0 ? (
        <Grid_3>
          {featuredProjectsList.map((project) => (
            <FeaturedProjectItem key={project.id} project={project} />
          ))}
        </Grid_3>
      ) : (
        <NoContentFallback />
      )}
    </Section>
  );
}
