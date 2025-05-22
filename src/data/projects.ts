import { Project } from "../types";

export const projectsList: Project[] = [
  {
    id: "1",
    title: "Portfolio",
    category: "web",
    image:
      "https://images.unsplash.com/photo-1613490900233-141c5560d75d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "My personal portfolio website, built with React and TypeScript. It showcases my skills, projects, and experience.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    startDate: "2023-01-01",
    featured: true,
  },
  {
    id: "2",
    title: "E-commerce Website",
    category: "3d",
    image:
      "https://images.unsplash.com/photo-1659079631665-eb95370fb173?q=80&w=1630&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "An e-commerce website built with Next.js and Tailwind CSS. It features a product catalog, shopping cart, and user authentication.",
    technologies: ["Next.js", "Tailwind CSS", "Node.js"],
    startDate: "2023-02-01",
    featured: true,
  },
  {
    id: "3",
    title: "Blog Platform",
    category: "web",
    image:
      "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "A blog platform built with React and Node.js. It allows users to create, edit, and delete blog posts.",
    technologies: ["React", "Node.js", "MongoDB"],
    startDate: "2023-03-01",
  },
  {
    id: "4",
    title: "3D Model Viewer",
    category: "uiux",
    description:
      "A 3D model viewer built with Three.js and React. It allows users to view and interact with 3D models in the browser.",
    technologies: ["Three.js", "React"],
    startDate: "2023-04-01",
  },
  {
    id: "5",
    title: "UI/UX Design Project",
    category: "uiux",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "A UI/UX design project for a mobile app, showcasing my design skills and process.",
    technologies: ["Figma", "Adobe XD"],
    startDate: "2023-05-01",
    featured: true,
  },
];
