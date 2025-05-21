interface PropTypes {
  children: React.ReactNode;
  className?: string;
  id?: string;
  center?: boolean;
}

export default function Section({
  children,
  className,
  id,
  center = true,
}: PropTypes) {
  return (
    <section
      id={id}
      className={`mb-10 ${center ? "mx-10 max-sm:mx-6" : ""} ${className}`}
    >
      {children}
    </section>
  );
}
