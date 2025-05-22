import Section from "../components/Section";
import Title_1 from "../components/title-1";
import Title_2 from "../components/title-2";
import { profileData, projectsList } from "../data";

export default function About() {
  const { bio, skills, age } = profileData;
  return (
    <Section id="about">
      <Title_1>Who am I</Title_1>
      <Title_2>About Me</Title_2>
      <div className="flex flex-col gap-4">
        <p>{bio}</p>
        <h2 className="font-bold">SkillStack</h2>
        <ul className="flex gap-2 flex-wrap">
          {skills.map((skill) => (
            <li key={skill} className="py-0.5 px-2 rounded-full bg-gray-900">
              {skill}
            </li>
          ))}
        </ul>
        <div>
          <ul className="flex gap-4">
            <li>Age: {age}</li>
            <li>Projects: {projectsList.length}</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
