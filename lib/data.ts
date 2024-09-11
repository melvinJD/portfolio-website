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
    title: "Freelance digital artist.",
    location: "Rutland, UK",
    description:
      "Now I build and develop applications to develop my coding and UI skills, 3D projects and prints .",
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
    imageUrl: { src: "/read.png", width: 100, height: 100 },
  },
  {
    title: "All Saints Hair - Website",
    description:
      "A website for Oakham & Stamford All Saint's Hairdressing.",
    tags: ["React", "HTML", "SquareSpace", "Tailwind", "CSS", "Framer"],
    imageUrl: { src: "/placefiller.png", width: 100, height: 100 },
  },
  {
    title: ".Milk",
    description:
      "A UI/UX Design Concept, for people to order direct from dairy farms to have milk delivered.",
      "Click to view Figma Prototype",
      "https://www.figma.com/proto/WsIedCzmrF3Z5OjfamY322/Task-Flow?node-id=0-1&t=8usgqDu8MnIURY7x-1",
    tags: ["Figma", "UI", "UX", "HTML", "CSS"],
    imageUrl: { src: "/.milk.png", width: 100, height: 100 },
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
  "Framer",
  "UI/UX"
] as const;
