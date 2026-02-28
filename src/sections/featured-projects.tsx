import { useEffect, useState } from "react";
import FeaturedProjectItem from "../components/featured-project-item";
import Grid_3 from "../components/grid-3";
import NoContentFallback from "../components/no-content-fallback";
import Section from "../components/Section";
import Title from "../components/title";
import { Project } from "../types";
import { supabase } from "../supabase-client";

export default function FeaturedProjects() {
  const [featuredProjects, setFeaturedProjects] = useState<Project[]>([]);

  async function fetchProjects() {
    const { error, data } = await supabase
      .from("projects")
      .select<string, Project>("*")
      .eq("featured", true);

    if (error) {
      console.error("Error fetching featured projects:", error);
    } else {
      setFeaturedProjects(data);
    }
  }

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <Section id="projects">
      <Title title_1="Best of what I do" title_2="Featured Projects" />
      {featuredProjects.length > 0 ? (
        <Grid_3>
          {featuredProjects.slice(0, 3).map((project) => (
            <FeaturedProjectItem key={project.id} project={project} />
          ))}
        </Grid_3>
      ) : (
        <NoContentFallback />
      )}
    </Section>
  );
}
