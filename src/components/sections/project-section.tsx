"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiExternalLink, FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface Project {
  title: string;
  technologies: string[];
  imageUrl: string;
  link: string;
  liveUrl: string;
  category: string;
  description?: string;
}

export const ProjectSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const projects: Project[] = [
    {
      title: "GiGreen Nigeria",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "WordPress (Backend)",
      ],
      imageUrl: "/assets/image/gigree.jpg",
      link: "https://www.gigreenig.org",
      liveUrl: "https://www.gigreenig.org",
      category: "Full Stack",
      description: "Migrated from WordPress to modern tech stack",
    },
    {
      title: "ISODAF Foundation",
      technologies: ["WordPress"],
      imageUrl: "/assets/image/isodaf.jpg",
      link: "https://www.isodaf.org",
      liveUrl: "https://www.isodaf.org",
      category: "WordPress",
      description: "Full WordPress development",
    },
    {
      title: "IB Delight",
      technologies: ["WordPress", "WooCommerce"],
      imageUrl: "/assets/image/ibdelight.jpg",
      link: "https://www.ibdelight.com",
      liveUrl: "https://www.ibdelight.com",
      category: "WordPress",
      description: "E-commerce platform with WooCommerce",
    },
    {
      title: "Hanaja Consulting",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      imageUrl: "/assets/image/hanaja.jpg",
      link: "https://www.hanajaconsulting.com",
      liveUrl: "https://www.hanajaconsulting.com",
      category: "Frontend",
      description: "Professional training & consulting platform",
    },
  ];

  const categories = [
    "All",
    ...Array.from(new Set(projects.map((p) => p.category))),
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  // Duplicate for infinite scroll
  const infiniteProjects = [
    ...filteredProjects,
    ...filteredProjects,
    ...filteredProjects,
  ];

  React.useEffect(() => {
    AOS.init({ duration: 1000, once: false });

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto-scroll for mobile
  useEffect(() => {
    if (!isMobile || isHovering) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isMobile, filteredProjects.length, isHovering]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section
      className="relative py-20 bg-gradient-to-br from-slate-950 via-indigo-950/30 to-slate-950 overflow-hidden"
      id="projects"
    >
      {/* Background Effects - Lower z-index */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/10 via-transparent to-blue-600/10"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-peach-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="absolute inset-0 opacity-5 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(255,255,255,.03) 50px, rgba(255,255,255,.03) 100px)",
          }}
        ></div>
      </div>

      <div className="relative portfolio-container z-10">
        {/* Header */}
        <div>
          <h1
            className="text-center text-3xl lg:text-4xl font-roboto font-semibold pb-5 text-white"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="200"
          >
            Featured Projects
          </h1>
          <p
            className="text-center font-merriweather text-lg leading-relaxed text-gray-300 md:w-2/3 mx-auto"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="400"
          >
            A showcase of recent projects demonstrating my expertise in building
            scalable and user-focused web solutions.
          </p>

          <div
            className="mt-8 w-24 h-1 mx-auto bg-gradient-to-r from-peach-500 via-purple-500 to-blue-500"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="500"
          />
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-3 mt-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentIndex(0);
              }}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-peach-500 text-white shadow-lg shadow-peach-500/30"
                  : "bg-slate-800 text-gray-300 hover:bg-slate-700 border border-slate-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="pt-16">
          {/* Mobile View */}
          {isMobile ? (
            <div
              className="relative"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-slate-950/70 via-slate-950/30 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-slate-950/70 via-slate-950/30 to-transparent z-10 pointer-events-none"></div>

                <div className="relative h-[550px] flex items-center justify-center">
                  <motion.div
                    key={currentIndex}
                    initial={{ x: 300, opacity: 0, scale: 0.9 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    exit={{ x: -300, opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute w-[85vw] max-w-[380px]"
                  >
                    <ProjectCard
                      project={filteredProjects[currentIndex]}
                      index={currentIndex}
                    />
                  </motion.div>
                </div>

                <motion.button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-4 bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-md rounded-full text-white border border-slate-700 hover:border-peach-500 transition-all duration-300 shadow-2xl group"
                  whileHover={{ scale: 1.1, x: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiChevronLeft className="text-2xl text-gray-300 group-hover:text-peach-500 transition-colors duration-300" />
                </motion.button>

                <motion.button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-4 bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-md rounded-full text-white border border-slate-700 hover:border-peach-500 transition-all duration-300 shadow-2xl group"
                  whileHover={{ scale: 1.1, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiChevronRight className="text-2xl text-gray-300 group-hover:text-peach-500 transition-colors duration-300" />
                </motion.button>
              </div>

              <div className="mt-8 flex flex-col items-center gap-6">
                <div className="flex gap-3 items-center">
                  {filteredProjects.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`relative transition-all duration-300 rounded-full ${
                        index === currentIndex ? "w-12 h-3" : "w-3 h-3"
                      }`}
                      whileHover={{ scale: 1.2 }}
                    >
                      {index === currentIndex ? (
                        <div className="absolute inset-0 bg-gradient-to-r from-peach-500 via-purple-500 to-blue-500 rounded-full" />
                      ) : (
                        <div className="absolute inset-0 bg-slate-700 hover:bg-slate-600 rounded-full" />
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* Desktop: Smooth Horizontal Scroll */
            <div
              className="relative"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {/* Gradient Fades */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-950 via-slate-950/80 to-transparent z-10 pointer-events-none"></div>

              <div className="overflow-hidden py-8">
                <motion.div
                  className="flex gap-8"
                  animate={{
                    x: isHovering
                      ? 0
                      : [0, -100 * filteredProjects.length + "%"],
                  }}
                  transition={{
                    duration: isHovering ? 0 : 30,
                    repeat: isHovering ? 0 : Infinity,
                    ease: "linear",
                  }}
                >
                  {infiniteProjects.map((project, index) => (
                    <div
                      key={`${project.title}-${index}`}
                      className="flex-shrink-0 w-[380px]"
                    >
                      <ProjectCard project={project} index={index} />
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Floating "Auto-Scrolling" Indicator */}
              <div className="text-center mt-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/60 backdrop-blur-sm rounded-full border border-slate-700">
                  <motion.div
                    className="w-2 h-2 bg-peach-500 rounded-full"
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-gray-400 text-sm">
                    {isHovering
                      ? "Paused - Hover to explore"
                      : "Auto-scrolling"}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

// ProjectCard Component
const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  return (
    <motion.div
      className="group relative bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95 backdrop-blur-sm border border-slate-700/50 rounded-2xl shadow-2xl overflow-hidden hover:border-peach-500/50 transition-all duration-500 h-full"
      whileHover={{ scale: 1.05, y: -10 }}
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-peach-500 via-purple-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"></div>

      <div className="relative h-full flex flex-col">
        <div className="relative w-full h-56 overflow-hidden">
          <Image
            src={project.imageUrl}
            alt={`Screenshot of ${project.title}`}
            fill
            style={{ objectFit: "cover" }}
            className="transition-transform duration-700 group-hover:scale-110"
            sizes="380px"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>

          <motion.div className="absolute top-4 right-4 z-10">
            <div className="px-3 py-1.5 bg-slate-900/80 backdrop-blur-md border border-slate-700/50 rounded-full flex items-center gap-2">
              <motion.div
                className="w-2 h-2 rounded-full bg-gradient-to-r from-peach-500 to-purple-500"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-xs font-semibold text-white">
                {project.category}
              </span>
            </div>
          </motion.div>
        </div>

        <div className="relative p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-peach-500 group-hover:to-purple-500 transition-all duration-300">
            {project.title}
          </h3>

          <div className="mb-6 flex-1">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Built With
              </h4>
              <div className="px-2 py-0.5 bg-peach-500/20 border border-peach-500/30 rounded-full">
                <span className="text-xs font-bold text-peach-500">
                  {project.technologies.length}
                </span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 bg-gradient-to-r from-slate-800/90 to-slate-900/90 text-peach-500 text-xs font-medium rounded-full border border-slate-700/50 hover:border-peach-500/50 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group/btn"
            >
              <motion.div
                className="px-4 py-2.5 bg-gradient-to-r from-peach-500 to-peach-600 rounded-lg flex items-center justify-center gap-2 text-white font-semibold text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View Project</span>
                <FiExternalLink className="text-base group-hover/btn:translate-x-1 transition-transform" />
              </motion.div>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};
