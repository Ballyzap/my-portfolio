"use client";
import { useEffect } from "react";
import { IoIosContact } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";

export const HomeHero = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="relative bg-cover bg-center bg-no-repeat bg-sky-pattern bg-opacity-60 w-full h-screen">
      <div className="absolute inset-0 bg-primary-800 bg-opacity-70">
        <div className="portfolio-container py-52">
          <div
            className="justify-center sm:justify-start"
            data-aos="zoom-in-right"
            data-aos-duration="2000"
          >
            <h1 className="text-white text-4xl sm:text-6xl font-bold font-serif text-center sm:text-left ">
              I love to create <br /> beautiful and <br /> efficient websites
            </h1>
          </div>
          <div
            className="flex flex-row gap-5 mt-8"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <div className="bg-secondary-500 p-4 w-32 sm:w-40 border border-transparent hover:border-white hover:bg-primary-800 hover:text-white focus:bg-primary-800 focus:text-white focus:outline-none transition-all cursor-pointer">
              <button className="font-roboto text-white w-full">
                Discover
              </button>
            </div>
            <div
              className="hover:text-primary-400 flex items-center justify-center gap-1 text-white w-32 sm:w-40 cursor-pointer transition-all"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <div className="py-2">
                <IoIosContact />
              </div>
              <div className="font-roboto">Contact Me</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
