import Connect from "../components/connect";
import Highlighted from "../components/highlighted";
import Section from "../components/Section";
import { profileData } from "../data";

export default function Hero() {
  const { name, image, profession } = profileData;

  return (
    <Section id="home">
      <div className="flex gap-24 min-h-[70vh] items-center flex-wrap max-sm:gap-12">
        <img src={image} alt={name} className="w-80 h-80 rounded-full" />
        <div className="flex flex-col gap-4 w-min">
          <p>
            <Highlighted className="text-sm">Hello!</Highlighted>
          </p>
          <p className="text-7xl font-bold max-sm:text-6xl">
            I am <Highlighted>{name}</Highlighted>
          </p>
          <p>{profession[0]}</p>
          <Connect />
        </div>
      </div>
    </Section>
  );
}
