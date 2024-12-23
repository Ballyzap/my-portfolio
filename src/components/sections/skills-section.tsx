"use client";

import React, { useEffect } from "react";
import { TiHtml5 } from "react-icons/ti";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa6";
import { FaJava } from "react-icons/fa6";
import { IconType } from "react-icons";
import AOS from "aos";
import "aos/dist/aos.css";

interface Skills {
  icon: IconType;
  skill: string;
  rank: string;
  color: string;
}

export const SkillSection = () => {
  const allSkills: Skills[] = [
    {
      icon: (props) => <TiHtml5 {...props} />,
      skill: "HTML",
      rank: "Proficiency",
      color: "#E44D26",
    },
    {
      icon: (props) => <DiCss3 {...props} />,
      skill: "CSS",
      rank: "Proficiency",
      color: "#1572B6",
    },
    {
      icon: (props) => <IoLogoJavascript {...props} />,
      skill: "JavaScript",
      rank: "Proficiency",
      color: "#F7DF1E",
    },
    {
      icon: (props) => <RiTailwindCssFill {...props} />,
      skill: "Tailwind CSS",
      rank: "Proficiency",
      color: "#38B2AC",
    },
    {
      icon: (props) => <SiTypescript {...props} />,
      skill: "TypeScript",
      rank: "Proficiency",
      color: "#3178C6",
    },
    {
      icon: (props) => <IoLogoReact {...props} />,
      skill: "React.js",
      rank: "Proficiency",
      color: "#61DAFB",
    },
    {
      icon: (props) => <RiNextjsFill {...props} />,
      skill: "Next.js",
      rank: "Proficiency",
      color: "#000000",
    },
    {
      icon: (props) => <FaPython {...props} />,
      skill: "Python",
      rank: "Proficiency",
      color: "#3776AB",
    },
    {
      icon: (props) => <FaJava {...props} />,
      skill: "Java",
      rank: "Proficiency",
      color: "#007396",
    },
  ];

  // Initialize AOS after component mounts
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <section className="bg-primary-50 py-32">
      <div className="portfolio-container">
        <div>
          <h1
            className="text-center text-3xl lg:text-4xl font-roboto font-semibold pb-5"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="200"
          >
            Why Work With Me
          </h1>
          <p
            className="text-center font-merriweather text-lg leading-relaxed"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="400"
          >
            I excel at communication and am committed to dedicating the time
            <br />
            needed to thoroughly understand the customer's challenges.
          </p>

          {/* Stylish Line between Paragraph and Heading */}
          <div
            className="mt-8 w-full border-t-4 border-primary-500 mx-auto"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="500"
            style={{
              width: "50%",
              height: "2px",
              margin: "auto",
              backgroundColor: "#F7DF1E",
            }}
          />
        </div>

        <div className="pt-16">
          <h2
            className="pb-1 text-3xl font-semibold font-roboto text-left"
            data-aos="fade-up-right"
            data-aos-duration="1500"
            data-aos-delay="600"
          >
            DEVELOPMENT SKILLS
          </h2>
          <p
            className="text-left font-merriweather text-lg leading-relaxed"
            data-aos="fade-up-right"
            data-aos-duration="1500"
            data-aos-delay="800"
          >
            I am familiar and work on a daily basis with!
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-12 pt-20">
          {allSkills.map(({ icon: SkillIcon, skill, rank, color }, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-anchor-placement="top-bottom"
            >
              <div className="flex items-center mb-4">
                <SkillIcon className="text-4xl mr-3" style={{ color }} />
                <h3 className="text-lg font-semibold text-left">{skill}</h3>
              </div>
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
