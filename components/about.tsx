"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Crafting visually appealing full-stack apps is a particular passion. My background involves working in a pharmacy, and I attended an intense bootcamp where I gained technical skills, resilience, adaptability, and agile work capabilities.
        Outside of coding, I share my time with a Labrador, enjoying walks together. Thrifting for old furniture and a love for music are additional aspects of my interests.
      </p>
    </motion.section>
  );
}