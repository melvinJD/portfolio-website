import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Image from "./placefiller.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Applied for School Of Code Bootcamp & Started Cyber Security Degree",
    location: "Birmingham & Milton Keynes",
    description:
      "After working in Pharmacy for ten years, I wanted to start a new challenge. In 2022 I applied for the School of Code Bootcamp, submitted a video, attended their 6 week pre bootcamp and was selected from thousands of applicants to take part!",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Front-End Developer",
    location: "Rutland, UK",
    description:
      "Now I build and develop applications to develop my coding and UI skills .",
    icon: React.createElement(CgWorkAlt),
    date: "2024",
  },

] as const;

export const projectsData = [
  {
    title: "The Reading Room",
    description:
      "A Full Stack App, designed for children, to help form the habit of reading. Helps reduce screen time, and develop reading comprehension.",
    tags: [ "Next.js", "Chakraka UI", "Netlify", "Supabase"],
    imageUrl: { src: "/the reading room.png", width: 100, height: 100 },
  },
  {
    title: "All Saints Hair - Website",
    description:
      "A website for Oakham & Stamford All Saint's Hairdressing.",
    tags: ["React", "HTML", "SquareSpace", "Tailwind", "CSS"],
    imageUrl: { src: "/placefiller.png", width: 100, height: 100 },
  },
  {
    title: "Demi Wine",
    description:
      "Full Stack Wine Recommender.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: { src: "/placefiller.png", width: 100, height: 100 },
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",,
  "Express",
  "PostgreSQL",
  "Python",
  "Framer Motion",
] as const;
