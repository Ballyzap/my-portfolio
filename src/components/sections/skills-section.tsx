"use client";

import React from "react";
import { TiHtml5 } from "react-icons/ti";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoReact } from "react-icons/io5";
import { useState } from "react";
import { IconType } from "react-icons";

interface skill {
  icon: IconType;
  name: string;
  rank: string;
}

export const SkillSection = () => {
  const allSkills: skill[] = [
    {
      icon: (props) => <TiHtml5 {...props} />,
      name: "HTML",
      rank: "Proficiency",
    },
    {
      icon: (props) => <DiCss3 {...props} />,
      name: "CSS",
      rank: "Proficiency",
    },
    {
      icon: (props) => <IoLogoJavascript {...props} />,
      name: "JavaScript",
      rank: "Proficiency",
    },
    {
      icon: (props) => <RiTailwindCssFill {...props} />,
      name: "Tailwind",
      rank: "Proficiency",
    },
    {
      icon: (props) => <IoLogoReact {...props} />,
      name: "React.js",
      rank: "Proficiency",
    },
  ];

  return (
    <section className="bg-primary-50">
      <div className="portfolio-container">
        <div>
          <h1 className="text-center text-3xl pb-5">Why Work With Me</h1>
          <p className="text-center">
            I am a great communicator and love to invest the necessary time to
            understand the customer's problem very well
          </p>
        </div>
        <div className="pt-16">
          <h2 className="pb-4">DEVELOPMENT SKILLS</h2>
          <p>
            I am familiar and work on a daily basis with HTML, CSS, JavaScript,
            Bootstrap and other modern frameworks
          </p>
        </div>
        <div>
          <div></div>
        </div>
      </div>
    </section>
  );
};
