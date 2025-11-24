"use client";

import React, { useEffect } from "react";
import { TiHtml5 } from "react-icons/ti";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { FaWordpress } from "react-icons/fa";
import { SiNodedotjs } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { IconType } from "react-icons";
import AOS from "aos";
import "aos/dist/aos.css";

interface Skills {
  icon: IconType;
  skill: string;
  color: string;
}

export const SkillSection = () => {
  const allSkills: Skills[] = [
    {
      icon: (props) => <TiHtml5 {...props} />,
      skill: "HTML",
      color: "#E44D26",
    },
    {
      icon: (props) => <DiCss3 {...props} />,
      skill: "CSS",
      color: "#1572B6",
    },
    {
      icon: (props) => <IoLogoJavascript {...props} />,
      skill: "JavaScript",
      color: "#F7DF1E",
    },
    {
      icon: (props) => <RiTailwindCssFill {...props} />,
      skill: "Tailwind CSS",
      color: "#38B2AC",
    },
    {
      icon: (props) => <SiTypescript {...props} />,
      skill: "TypeScript",
      color: "#3178C6",
    },
    {
      icon: (props) => <IoLogoReact {...props} />,
      skill: "React.js",
      color: "#61DAFB",
    },
    {
      icon: (props) => <RiNextjsFill {...props} />,
      skill: "Next.js",
      color: "#FFFFFF",
    },
    {
      icon: (props) => <SiNodedotjs {...props} />,
      skill: "Node.js",
      color: "#68A063",
    },
    {
      icon: (props) => <SiPostgresql {...props} />,
      skill: "PostgreSQL",
      color: "#336791",
    },
    {
      icon: (props) => <FaPython {...props} />,
      skill: "Python",
      color: "#3776AB",
    },
    {
      icon: (props) => <FaJava {...props} />,
      skill: "Java",
      color: "#007396",
    },
    {
      icon: (props) => <FaWordpress {...props} />,
      skill: "WordPress",
      color: "#21759b",
    },
    {
      icon: (props) => <FaGithub {...props} />,
      skill: "GitHub",
      color: "#FFFFFF",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <section className="relative py-20 bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-peach-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="relative portfolio-container">
        <div>
          <h1
            className="text-center text-3xl lg:text-4xl font-roboto font-semibold pb-5 text-white"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="200"
          >
            Technical Skills
          </h1>
          <p
            className="text-center font-merriweather text-lg leading-relaxed text-gray-300 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="400"
          >
            I work daily with modern technologies to build scalable, efficient,
            and user-friendly web applications. Here are the tools and
            frameworks I&apos;m proficient in.
          </p>

          <div
            className="mt-8 w-24 h-1 mx-auto bg-gradient-to-r from-peach-500 via-purple-500 to-blue-500"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="500"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 pt-20">
          {allSkills.map(({ icon: SkillIcon, skill, color }, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-slate-800/80 via-slate-800/60 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-xl shadow-lg p-6 hover:shadow-2xl hover:border-peach-500/50 hover:-translate-y-2 transition-all duration-300 flex flex-col items-center justify-center gap-4 overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-peach-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-peach-500/10 group-hover:via-purple-500/10 group-hover:to-blue-500/10 transition-all duration-500"></div>

              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-peach-500 via-purple-500 to-blue-500 rounded-xl opacity-0 group-hover:opacity-20 blur transition-all duration-500"></div>

              <div className="relative z-10 flex flex-col items-center gap-4">
                <SkillIcon
                  className="text-4xl md:text-5xl drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                  style={{ color }}
                />
                <h3 className="text-sm md:text-base font-semibold text-center text-white group-hover:text-peach-500 transition-colors duration-300">
                  {skill}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
