import { AspectRatio } from "./ui/aspect-ratio";

interface Props {
  src: string;
  alt: string;
  orientation?: "portrait" | "landscape" | "square";
}

export default function Image({ src, alt, orientation = "landscape" }: Props) {
  let ratio;

  // Set the aspect ratio based on the orientation prop
  switch (orientation) {
    case "portrait":
      ratio = 3 / 4;
      break;
    case "landscape":
      ratio = 16 / 9;
      break;
    case "square":
      ratio = 1;
      break;
    default:
      ratio = 16 / 9;
  }

  return (
    <AspectRatio ratio={ratio}>
      <img src={src} alt={alt} className="object-cover object-center" />
    </AspectRatio>
  );
}
