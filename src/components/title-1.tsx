import Highlighted from "./highlighted";

export default function Title_1({ children }: { children: string }) {
  return (
    <h2 className="font-bold">
      <Highlighted>{children}</Highlighted>
    </h2>
  );
}
