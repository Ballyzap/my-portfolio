"use client";

import { useEffect } from "react";
import { HiDownload } from "react-icons/hi";
import { FiArrowRight } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";

export const HomeHero = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const handleDownloadCV = () => {
    // const cvUrl = "/assets/cv/Joshua_Bala_Noma_CV.pdf";
    const link = document.createElement("a");
    // link.href = cvUrl;
    // link.download = "Joshua_Bala_Noma_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative bg-slate-950 w-full min-h-screen flex items-center overflow-hidden">
      {/* Diagonal stripe background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)",
          }}
        ></div>
      </div>

      {/* Large peach accent shape - top right */}
      <div className="absolute -top-40 -right-40 w-80 h-80 md:w-96 md:h-96 bg-peach-500/10 rounded-full blur-3xl"></div>

      {/* Small indigo accent shape - bottom left */}
      <div className="absolute -bottom-20 -left-20 w-60 h-60 md:w-80 md:h-80 bg-indigo-600/10 rounded-full blur-3xl"></div>

      {/* Multiple animated dots with different sizes and animations */}
      {/* Top area dots */}
      <div className="absolute top-20 left-[15%] w-2 h-2 bg-peach-500/60 rounded-full animate-ping"></div>
      <div
        className="absolute top-32 right-[20%] w-1.5 h-1.5 bg-purple-500/60 rounded-full animate-ping"
        style={{ animationDelay: "0.5s" }}
      ></div>
      <div
        className="absolute top-24 left-[45%] w-1 h-1 bg-blue-500/60 rounded-full animate-ping"
        style={{ animationDelay: "1s" }}
      ></div>

      {/* Middle area dots */}
      <div className="absolute top-1/3 right-[10%] w-2 h-2 bg-peach-500/50 rounded-full animate-pulse"></div>
      <div
        className="absolute top-1/2 left-[8%] w-1.5 h-1.5 bg-purple-500/50 rounded-full animate-pulse"
        style={{ animationDelay: "0.7s" }}
      ></div>
      <div
        className="absolute top-[45%] right-[35%] w-1 h-1 bg-blue-500/50 rounded-full animate-pulse"
        style={{ animationDelay: "1.2s" }}
      ></div>
      <div
        className="absolute top-1/2 right-[65%] w-2 h-2 bg-peach-500/40 rounded-full animate-ping"
        style={{ animationDelay: "1.5s" }}
      ></div>

      {/* Bottom area dots */}
      <div
        className="absolute bottom-32 left-[25%] w-1.5 h-1.5 bg-purple-500/60 rounded-full animate-ping"
        style={{ animationDelay: "0.3s" }}
      ></div>
      <div
        className="absolute bottom-24 right-[30%] w-2 h-2 bg-blue-500/60 rounded-full animate-pulse"
        style={{ animationDelay: "0.8s" }}
      ></div>
      <div
        className="absolute bottom-40 left-[60%] w-1 h-1 bg-peach-500/50 rounded-full animate-ping"
        style={{ animationDelay: "1.8s" }}
      ></div>

      {/* Extra mobile-optimized dots (smaller and more spread out) */}
      <div
        className="absolute top-[15%] left-[70%] w-1 h-1 bg-purple-500/40 rounded-full animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-[60%] left-[12%] w-1 h-1 bg-blue-500/40 rounded-full animate-ping"
        style={{ animationDelay: "2.3s" }}
      ></div>
      <div
        className="absolute bottom-[15%] right-[15%] w-1.5 h-1.5 bg-peach-500/50 rounded-full animate-pulse"
        style={{ animationDelay: "2.5s" }}
      ></div>
      <div
        className="absolute top-[70%] right-[50%] w-1 h-1 bg-purple-500/40 rounded-full animate-ping"
        style={{ animationDelay: "2.8s" }}
      ></div>

      {/* Floating dots with custom animations */}
      <div
        className="absolute top-[25%] left-[85%] w-1.5 h-1.5 bg-blue-500/50 rounded-full animate-bounce"
        style={{ animationDuration: "3s" }}
      ></div>
      <div
        className="absolute bottom-[35%] left-[5%] w-1 h-1 bg-peach-500/40 rounded-full animate-bounce"
        style={{ animationDuration: "4s", animationDelay: "1s" }}
      ></div>

      <div className="relative portfolio-container w-full py-20 md:py-0">
        <div className="flex flex-col justify-center min-h-[calc(100vh-10rem)]">
          {/* Badge */}
          <div
            className="mb-6 md:mb-8"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <span className="inline-block px-4 py-2 bg-peach-500/10 border border-peach-500/30 rounded-full text-peach-500 text-xs md:text-sm font-semibold tracking-wider">
              FULL-STACK DEVELOPER
            </span>
          </div>

          {/* Main heading */}
          <div
            className="mb-6 md:mb-8"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Building Digital
              <br />
              <span className="text-peach-500">Experiences</span> That
              <br />
              Matter
            </h1>
          </div>

          {/* Subheading */}
          <div
            className="mb-8 md:mb-10"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="400"
          >
            <p className="text-gray-400 text-base md:text-lg lg:text-xl max-w-xl leading-relaxed">
              I transform ideas into elegant, scalable web solutions using
              modern technologies and best practices.
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 md:gap-5"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="600"
          >
            <button
              onClick={handleDownloadCV}
              className="group relative px-6 md:px-8 py-3 md:py-4 bg-peach-500 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-peach-600 hover:shadow-xl hover:shadow-peach-500/30 flex items-center justify-center gap-3"
            >
              <HiDownload className="text-lg md:text-xl group-hover:animate-bounce" />
              <span className="text-sm md:text-base">Download Resume</span>
            </button>

            <a
              href="#contact"
              className="group px-6 md:px-8 py-3 md:py-4 border-2 border-slate-700 text-white font-semibold rounded-lg transition-all duration-300 hover:border-peach-500 hover:bg-peach-500/5 flex items-center justify-center gap-3"
            >
              <span className="text-sm md:text-base">Get In Touch</span>
              <FiArrowRight className="text-lg md:text-xl group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>

          {/* Stats or info badges */}
          <div
            className="flex flex-wrap gap-6 md:gap-8 mt-12 md:mt-16"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="800"
          >
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-bold text-white">
                1+
              </span>
              <span className="text-xs md:text-sm text-gray-400 mt-1">
                Years Experience
              </span>
            </div>
            <div className="w-px h-12 bg-slate-800"></div>
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-bold text-white">
                5+
              </span>
              <span className="text-xs md:text-sm text-gray-400 mt-1">
                Projects Completed
              </span>
            </div>
            <div className="w-px h-12 bg-slate-800"></div>
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-bold text-white">
                100%
              </span>
              <span className="text-xs md:text-sm text-gray-400 mt-1">
                Client Satisfaction
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative line element */}
      <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2">
        <div className="flex flex-col items-center gap-4 pr-8">
          <div className="w-px h-20 bg-gradient-to-b from-transparent via-peach-500 to-transparent"></div>
          <span className="text-xs text-gray-500 writing-mode-vertical transform rotate-180 tracking-widest">
            SCROLL
          </span>
          <div className="w-px h-20 bg-gradient-to-b from-transparent via-peach-500 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};
