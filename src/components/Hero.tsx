import Button from "./Button";
import Highlighted from "./Highlighted";
import Section from "./Section";
import profile from "../assets/profile-img.jpg";

const Hero: React.FC = () => {
  return (
    <Section id="home" className="flex justify-end relative h-screen">
      <img
        src={profile}
        alt="Anthony Wandera"
        className="w-full h-full object-cover object-center grayscale-25 opacity-75"
      />
      <div className="font-bold flex flex-col gap-2 mr-24 absolute top-1/2 -translate-y-1/2 bg-[#0003] p-4 rounded backdrop-blur-sm">
        <Highlighted>Hello!</Highlighted>
        <p className="text-8xl w-min leading-20 mb-6">
          I’m <Highlighted>Anthony Wandera</Highlighted>
        </p>
        <p className="mb-2">UI/UX Developer</p>
        <div className="flex gap-6 items-center">
          <Button>HIRE ME</Button>
          <a href="#projects">MY WORK</a>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
