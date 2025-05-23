import Section from "../components/Section";
import Title from "../components/title";

import { profileData } from "../data";

export default function About() {
  const { bio } = profileData;
  return (
    <Section id="about">
      <Title title_1="Who am I" title_2="About Me" />
      <div className="flex flex-col gap-4">
        <p>{bio}</p>
      </div>
    </Section>
  );
}
