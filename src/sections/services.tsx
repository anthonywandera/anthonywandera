import Grid_3 from "../components/grid-3";
import Section from "../components/Section";
import Title from "../components/title";
import { servicesList } from "../data";

export default function Services() {
  return (
    <Section id="services">
      <Title title_1="What I do" title_2="My Services" />

      <Grid_3 className="gap-14 max-sm:gap-4 max-sm:grid-rows-3">
        {servicesList.map((service) => (
          <div
            key={service.title}
            className="grid grid-cols-1 grid-rows-[3fr_auto] p-0.5 gap-1.5 bg-[var(--primary)] rounded-lg max-sm:grid-cols-[1fr_2fr] max-sm:grid-rows-1"
          >
            <div className="relative w-full h-full z-0">
              <figure className="rounded-lg overflow-hidden w-full h-full">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-fit object-center hover:scale-105 transition-all duration-500"
                />
              </figure>
              <h3 className="font-semibold text-sm absolute left-2 bottom-2 w-min max-sm:text-xs max-sm:left-1 max-sm:bottom-1">
                {service.title}
              </h3>
            </div>

            <p className="p-1 text-[var(--primary-foreground)] text-sm ">
              {service.description}
            </p>
          </div>
        ))}
      </Grid_3>
    </Section>
  );
}
