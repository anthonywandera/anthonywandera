import Section from "../components/Section";
import { profileData } from "../data";

export default function Hero() {
  const { name, image, profession } = profileData;

  return (
    <Section id="home">
      <div className="flex gap-2">
        <img src={image} alt={name} className="w-32 h-32 rounded-full" />
        <div>
          <p>I am {name}</p>
          <p>{profession[0]}</p>
        </div>
      </div>
    </Section>
  );
}
