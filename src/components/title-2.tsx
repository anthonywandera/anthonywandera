export default function Title_2({ children }: { children: string }) {
  return (
    <h2 className="text-3xl font-bold mb-6 sticky top-0 z-10 w-fit ">
      {children}
    </h2>
  );
}
