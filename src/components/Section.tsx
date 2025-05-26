import { useEffect, useRef } from "react";

interface PropTypes {
  children: React.ReactNode;
  className?: string;
  id?: string;
  center?: boolean;
}

const observer = new IntersectionObserver(
  ([entry]) => {
    const targetEl = entry.target as HTMLDivElement;

    console.log(targetEl.getBoundingClientRect());
  },
  { threshold: 0.1, root: null }
);

export default function Section({
  children,
  className,
  id,
  center = true,
}: PropTypes) {
  const sectionEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionEl.current as HTMLDivElement;
    observer.observe(section);
  });

  return (
    <section
      ref={sectionEl}
      id={id}
      className={`mb-10 ${center ? "mx-14 max-sm:mx-6" : ""} ${className}`}
    >
      {children}
    </section>
  );
}
