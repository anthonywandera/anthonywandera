export default function Grid_3({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`grid grid-cols-3 gap-6 max-md:grid-cols-2 max-sm:grid-cols-1 ${className}`}
    >
      {children}
    </div>
  );
}
