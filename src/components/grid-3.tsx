export default function Grid_3({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`grid grid-cols-3 gap-4 max-sm:grid-cols-1 max-sm:gap-10 ${className}`}
    >
      {children}
    </div>
  );
}
