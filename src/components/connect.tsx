import { socialLinks } from "../data";

export default function Connect() {
  return (
    <div className="flex flex-wrap gap-6 items-center">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          aria-label={"Connect through " + link.name}
          href={link.url}
          target="_blank"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}
