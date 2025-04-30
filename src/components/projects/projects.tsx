import Heading from "../heading/heading";
import Section from "../section/section";
import { projectsList } from "../../data/projects";
import ProjectsCarousel from "../projects-carousel";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Projects: React.FC = () => {
  return (
    <Section id="projects" center>
      <Heading title1="More of my work" title2="Projects" />
      <Tabs
        defaultValue="web"
        className="grid grid-cols-1 grid-rows-[auto_1fr] gap-4 bg-[var(--theme-color-background-shade)] p-4 rounded-3xl"
      >
        <TabsList className="bg-transparent text-inherit flex gap-16 max-sm:gap-2.5 justify-self-center items-center font-semibold">
          <TabsTrigger
            className="text-gray-400 focus:text-[var(--theme-color-background)]"
            value="web"
          >
            Web
          </TabsTrigger>
          <TabsTrigger
            className="text-gray-400 focus:text-[var(--theme-color-background)]"
            value="UI"
          >
            UI/UX
          </TabsTrigger>
          <TabsTrigger
            className="text-gray-400 focus:text-[var(--theme-color-background)]"
            value="graphics"
          >
            Graphics
          </TabsTrigger>
        </TabsList>
        <TabsContent value="web">
          <ProjectsCarousel projects={projectsList} />
        </TabsContent>
        <TabsContent value="UI">Coming Soon</TabsContent>
        <TabsContent value="graphics">Coming Soon</TabsContent>
      </Tabs>
    </Section>
  );
};

export default Projects;
