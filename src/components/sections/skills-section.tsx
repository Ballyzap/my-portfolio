"use client";

import React from "react";
import { TiHtml5 } from "react-icons/ti";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoReact } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa6";
import { FaJava } from "react-icons/fa6";
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
      name: "Tailwind CSS",
      rank: "Proficiency",
    },
    {
      icon: (props) => <IoLogoReact {...props} />,
      name: "React.js",
      rank: "Proficiency",
    },
    {
      icon: (props) => <RiNextjsFill {...props} />,
      name: "Next.js",
      rank: "Proficiency",
    },
    {
      icon: (props) => <FaPython {...props} />,
      name: "Python",
      rank: "Proficiency",
    },
    {
      icon: (props) => <FaJava {...props} />,
      name: "Java",
      rank: "Proficiency",
    },
  ];

  return (
    <section className="bg-primary-50 py-32">
      <div className="portfolio-container">
        <div>
          <h1 className="text-center text-3xl pb-5">Why Work With Me</h1>
          <p className="text-center">
            I am a great communicator and love to invest the necessary time to
            understand the customer's problem very well
          </p>
        </div>
        <div className="pt-16">
          <h2 className="pb-4 text-left">DEVELOPMENT SKILLS</h2>
          <p className="text-left">
            I am familiar and work on a daily basis with HTML, CSS, JavaScript,
            Bootstrap, and other modern frameworks
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-12 pt-20">
          {allSkills.map(({ icon: SkillIcon, name, rank }, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              {/* Flex container for icon and name, aligned to the left */}
              <div className="flex items-center mb-4">
                <SkillIcon className="text-4xl mr-3" />
                <h3 className="text-lg font-semibold text-left">{name}</h3>
              </div>
              {/* Proficiency rank below, aligned to the left */}
              <div className="text-left">
                <p>{rank}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
