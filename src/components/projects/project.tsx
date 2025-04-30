import { useState } from "react";

import Review from "../reviews/review";
import ProjectPreview from "./project-preview";
import Image from "../Image";

const ProjectItem: React.FC<{
  image: string;
  name: string;
  description: string;
  url?: string;
}> = ({ image, name, description }) => {
  const [selected, setSelected] = useState(false);

  return (
    <>
      <div
        onClick={() => {
          setSelected(true);
        }}
        className="group/project aspect-square rounded-xl relative overflow-hidden font-semibold text-xl"
      >
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center group-hover/project:scale-105 transition-all duration-500"
        />
        <p className="w-min absolute left-4 max-sm:left-1.5 bottom-4 max-sm:bottom-1.5">
          {name}
        </p>
      </div>
      {selected && (
        <ProjectPreview
          show={selected}
          hide={() => {
            setSelected(false);
          }}
        >
          <div className="grid grid-cols-[2fr_3fr] gap-4 h-96 max-md:grid-cols-1 max-md:grid-rows-[2fr_3fr]">
            <Image src={image} alt={name} />

            <div className="h-full overflow-hidden overflow-y-scroll [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
              <div className="flex flex-col gap-2 w-full h-full">
                <h2 className="z-10 text-xl text-[var(--theme-color-accent)]">
                  {name}
                </h2>
                <p className="text-gray-400">{description}</p>
                <p className="mb-2 text-blue-800">
                  <a href="#">Visit site &rarr;</a>
                </p>
                <div className="relative border rounded border-[var(--theme-color-accent)] p-2">
                  <h3 className="absolute top-0 left-8 -translate-y-1/2 bg- text-lg text-[var(--theme-color-accent)] bg-[var(--theme-color-background-tint)]  px-1">
                    Technologies
                  </h3>
                  <ul className="flex flex-wrap gap-4 z-50">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JS</li>
                    <li>NEXTJs</li>
                    <li>REACT</li>
                  </ul>
                </div>
                <Review
                  date="02/03/2025"
                  name="Allen Smith"
                  value="A masterpiece!"
                />
                <Review
                  date="02/03/2025"
                  name="Allen Smith"
                  value="A masterpiece!"
                />
                <Review
                  date="02/03/2025"
                  name="Allen Smith"
                  value="A masterpiece!"
                />
              </div>
            </div>
          </div>
        </ProjectPreview>
      )}
    </>
  );
};

export default ProjectItem;
