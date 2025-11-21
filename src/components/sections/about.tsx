// "use client";

// import Image from "next/image";

// export const AboutSection = () => {
//   return (
//     <section className="bg-soft-ivory">
//       <div className="portfolio-container py-36 flex flex-col md:flex-row items-center justify-between gap-10">
//         <div
//           className="md:w-1/2 text-left lg:pt-24"
//           data-aos="fade-right"
//           data-aos-duration="1000"
//         >
//           <h1 className="text-4xl text-primary-900 font-playfair mb-6">
//             Hi there, I am Bally
//           </h1>
//           <p className="text-gray-600 text-lg leading-relaxed font-merriweather">
//             I’m passionate about building{" "}
//             <span className="text-peach-500 font-semibold">
//               stunning websites
//             </span>{" "}
//             and powerful applications for my clients — a journey that inspires
//             me from sketching initial designs to coding and launching fully
//             functional solutions. I thrive on guiding them every step of the
//             way.
//           </p>
//         </div>

//         <div
//           className="md:w-1/2 flex justify-center md:justify-end pt-14"
//           data-aos="fade-left"
//           data-aos-duration="1000"
//         >
//           <div className="w-64 h-64 lg:w-96 lg:h-96 relative transform lg:-translate-y-24">
//             <Image
//               src="/assets/image/bala--bass.jpg"
//               alt="Bally's portrait"
//               fill
//               className="rounded-full object-top object-cover shadow-lg"
//               priority
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

"use client";

import Image from "next/image";

export const AboutSection = () => {
  return (
    <section className="bg-slate-900">
      <div className="portfolio-container py-24 flex flex-col md:flex-row items-center justify-between gap-16">
        <div
          className="md:w-1/2 text-left"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h1 className="text-4xl text-white font-playfair mb-6 font-bold">
            Hi there, I&apos;m <span className="text-peach-500">Bally</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed font-merriweather mb-6">
            I&apos;m a passionate full-stack developer with expertise in
            building
            <span className="text-peach-500 font-semibold">
              {" "}
              modern web applications
            </span>
            . My journey in software development has equipped me with the skills
            to transform ideas into functional, scalable, and visually appealing
            solutions.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed font-merriweather">
            I thrive on solving complex problems and delivering projects that
            exceed expectations—from initial design concepts to final deployment
            and beyond.
          </p>
        </div>

        <div
          className="md:w-1/2 flex justify-center md:justify-end"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <div className="w-72 h-72 lg:w-96 lg:h-96 relative">
            <div className="absolute inset-0 bg-peach-500/20 rounded-full blur-2xl"></div>
            <Image
              src="/assets/image/bala--bass.jpg"
              alt="Bally's portrait"
              fill
              className="relative rounded-full object-top object-cover shadow-2xl border-4 border-slate-700"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
