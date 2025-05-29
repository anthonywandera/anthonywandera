import Connect from "../components/connect";
import Highlighted from "../components/highlighted";
import Section from "../components/Section";
import { profileData } from "../data";

export default function Hero() {
  const { name, image, profession } = profileData;

  return (
    <Section id="home">
      <div className="flex gap-24 min-h-[70vh] items-center flex-wrap max-sm:gap-4">
        <div className="relative">
          <img
            src={image}
            alt={name}
            className="w-84 h-84 object-cover object-center"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-radial-[#0000_50%,var(--background)_70%] w-full h-full"></div>
        </div>
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
