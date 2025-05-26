import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

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
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.6 },
      });
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ y: 100, opacity: 0 }}
      animate={controls}
      className={`mb-10 ${center ? "mx-14 max-sm:mx-6" : ""} ${className}`}
    >
      {children}
    </motion.section>
  );
}
