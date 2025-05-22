import Grid_3 from "../components/grid-3";
import Section from "../components/Section";
import Title from "../components/title";
import { servicesList } from "../data";

export default function Services() {
  return (
    <Section id="services">
      <Title title_1="What I do" title_2="My Services" />

      <Grid_3>
        {servicesList.map((service) => (
          <div
            key={service.title}
            className="grid grid-cols-[1fr_2fr] gap-2 bg-gray-900 p-2"
          >
            <img src={service.image} alt={service.title} />
            <div>
              <h3 className="font-semibold">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </Grid_3>
    </Section>
  );
}
