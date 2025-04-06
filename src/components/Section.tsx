const Section: React.FC<{
  id: string;
  children: React.ReactNode;
  center?: boolean;
  className?: string;
}> = ({ center, id, children, className }) => {
  return (
    <section id={id} className={`mb-28 ${className} ${center ? "mx-16" : ""}`}>
      {children}
    </section>
  );
};

export default Section;
