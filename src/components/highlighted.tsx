export default function Highlighted({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <span className={`text-[var(--accent)] ${className}`}>{children}</span>
  );
}
