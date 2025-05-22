import Section from "../components/Section";
import Title from "../components/title";

import { profileData } from "../data";

export default function About() {
  const { bio, skills } = profileData;
  return (
    <Section id="about">
      <Title title_1="Who am I" title_2="About Me" />
      <div className="flex flex-col gap-4">
        <p>{bio}</p>
        <ul className="flex gap-2 flex-wrap">
          {skills.map((skill) => (
            <li
              key={skill}
              className="py-0.5 px-3 rounded-full text-[var(--primary-foreground)] bg-[var(--primary)]"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
