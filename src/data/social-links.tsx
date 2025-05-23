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
    url: "https://www.instagram.com/to.niee",
  },
  {
    name: "X",
    icon: <FaXTwitter />,
    url: "",
  },
  {
    name: "Pinterest",
    icon: <FaPinterestP />,
    url: "https://www.pinterest.com/anthony_wandera",
  },
  {
    name: "Upwork",
    icon: <FaUpwork />,
    url: "https://www.upwork.com/freelancers/~0155756560a990066d?mp_source=share",
  },
];
