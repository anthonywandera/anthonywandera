import { useEffect, useState } from "react";
import Grid_3 from "../components/grid-3";
import ProjectItem from "../components/project-item";
import Section from "../components/Section";
import Title from "../components/title";
import NoContentFallback from "../components/no-content-fallback";
import { Project } from "../types";
import { supabase } from "../supabase-client";

export default function OtherProjects() {
  const [page, setPage] = useState(1);
  const [projects, setProjects] = useState<Project[]>([]);

  async function fetchProjects() {
    const { error, data } = await supabase
      .from("projects")
      .select<string, Project>("*")
      .order("created_at", { ascending: false });
    if (error) {
      console.error("Error fetching featured projects:", error);
    } else {
      setProjects(data);
    }
  }

  useEffect(() => {
    fetchProjects();
  }, []);

  const projectsPerPage = 5;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  function handleLoadMore() {
    if (page < totalPages) {
      setPage((prev) => prev + 1);
    }
  }

  return (
    <Section>
      <Title title_1="More of my work" title_2="Other Projects" />

      <div className="flex flex-col gap-8">
        {projects.length > 0 ? (
          <>
            <Grid_3>
              {projects.slice(0, projectsPerPage * page).map((project) => (
                <ProjectItem key={project.id} project={project} />
              ))}
            </Grid_3>
            {totalPages !== page && (
              <button
                onClick={handleLoadMore}
                className="bg-[var(--primary)] rounded p-3"
              >
                Load More
              </button>
            )}
          </>
        ) : (
          <NoContentFallback />
        )}
      </div>
    </Section>
  );
}
