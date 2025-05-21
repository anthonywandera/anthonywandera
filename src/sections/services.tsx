import Section from "../components/Section";
import { servicesList } from "../data";

export default function Services() {
  return (
    <Section id="services">
      <h2 className="font-bold">Services</h2>
      <div className="grid grid-cols-3 gap-4">
        {servicesList.map((service) => (
          <div
            key={service.title}
            className="grid grid-cols-[1fr_2fr] gap-2 bg-gray-50 p-2"
          >
            <img src={service.image} alt={service.title} />
            <div>
              <h3 className="font-semibold">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
