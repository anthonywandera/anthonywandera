import AboutMe from "./AboutMe";
import Heading from "./Heading";
import Section from "./Section";
import Services from "./Services";

const About: React.FC = () => {
  return (
    <Section id="about" center>
      <Heading title1="Who am I" title2="About Me" />
      <p className="mb-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur optio
        voluptatum reiciendis eum doloremque repudiandae porro voluptatem
        delectus. Tempora architecto iste nobis autem excepturi, laudantium
        laborum animi assumenda quas cupiditate.
      </p>
      <AboutMe />
      <Services />
    </Section>
  );
};

export default About;
