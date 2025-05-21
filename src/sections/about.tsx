import Section from "../components/Section";
import { profileData, projectsList } from "../data";

export default function About() {
  const { bio, skills, age } = profileData;
  return (
    <Section id="about" className="flex flex-col gap-4">
      <p>{bio}</p>
      <h2 className="font-bold">SkillStack</h2>
      <ul className="flex gap-2 flex-wrap">
        {skills.map((skill) => (
          <li key={skill} className="py-0.5 px-2 rounded-full bg-gray-100">
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
    </Section>
  );
}
