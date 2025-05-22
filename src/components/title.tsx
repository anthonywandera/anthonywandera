import Title_1 from "./title-1";
import Title_2 from "./title-2";

export default function Title({
  title_1,
  title_2,
}: {
  title_1: string;
  title_2: string;
}) {
  return (
    <>
      <Title_1>{title_1}</Title_1>
      <Title_2>{title_2}</Title_2>
    </>
  );
}
