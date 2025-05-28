import { useState } from "react";
import Grid_3 from "../components/grid-3";
import ProjectItem from "../components/project-item";
import Section from "../components/Section";
import Title from "../components/title";
import { projectsList } from "../data";
import NoContentFallback from "../components/no-content-fallback";

export default function OtherProjects() {
  const [page, setPage] = useState(1);
  const projectsPerPage = 5;
  const totalPages = Math.ceil(projectsList.length / projectsPerPage);

  function handleLoadMore() {
    if (page < totalPages) {
      setPage((prev) => prev + 1);
    }
  }

  return (
    <Section>
      <Title title_1="More of my work" title_2="Other Projects" />

      <div className="flex flex-col gap-8">
        <Grid_3>
          {projectsList.slice(0, projectsPerPage * page).map((project) => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </Grid_3>
        {projectsList.length > 0 ? (
          totalPages != page && (
            <button
              onClick={handleLoadMore}
              className="bg-[var(--primary)] rounded p-3"
            >
              Load More
            </button>
          )
        ) : (
          <NoContentFallback />
        )}
      </div>
    </Section>
  );
}
