import { SocialLink } from "../types";

import {
  FaGithub,
  FaInstagram,
  FaPinterestP,
  FaUpwork,
  FaXTwitter,
} from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

export const socialLinks: SocialLink[] = [
  {
    name: "Github",
    icon: <FaGithub />,
    url: "https://github.com/anthonywandera/anthonywandera",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedinIn />,
    url: "https://www.linkedin.com/in/anthony-wandera",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    url: "",
  },
  {
    name: "X",
    icon: <FaXTwitter />,
    url: "",
  },
  {
    name: "Pinterest",
    icon: <FaPinterestP />,
    url: "",
  },
  {
    name: "Upwork",
    icon: <FaUpwork />,
    url: "",
  },
];
