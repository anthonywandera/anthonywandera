import { AspectRatio } from "./ui/aspect-ratio";

interface Props {
  src: string;
  alt: string;
  className?: string;
}

export default function Image({ src, alt }: Props) {
  return (
    <AspectRatio ratio={1 / 1}>
      <img src={src} alt={alt} className="object-cover object-center" />
    </AspectRatio>
  );
}
