// import { SiCodestream } from "react-icons/si";
// import { SiMaterialdesign } from "react-icons/si";
// import { PiDesktopTowerDuotone } from "react-icons/pi";
// import { IconType } from "react-icons";

// type service = {
//   icon: IconType;
//   description: string;
//   detail: string;
// };

// export const ServiceSection = () => {
//   const serviceDetails: service[] = [
//     {
//       icon: (props) => <SiCodestream {...props} />,
//       description: "DEVELOPMENT",
//       detail:
//         "I’m capable of coding from my own designs or adapting the customer's design as a starting point. My main goal is to produce clean, organized code that prioritizes reliability",
//     },
//     {
//       icon: (props) => <SiMaterialdesign {...props} />,
//       description: "DESIGN",
//       detail:
//         "Successful online projects begin with strong design. It creates a solid foundation for development and sets the stage for long-term growth",
//     },
//     {
//       icon: (props) => <PiDesktopTowerDuotone {...props} />,
//       description: "BASIC SEO",
//       detail:
//         "I can set up your project with essential SEO principles to help boost its ranking on search engines, driving organic traffic and saving you money on ads",
//     },
//   ];

//   return (
//     <section className="py-20 bg-creamy-offwhite">
//       <div className="portfolio-container">
//         <div className="text-center px-4 sm:px-6 md:px-8">
//           <h2 className="text-3xl sm:text-4xl font-semibold text-indigo mb-3 font-playfair">
//             Offered <span className="portfolio-underline">Services</span>
//           </h2>
//           <p className="text-base sm:text-lg text-slate-600 md:w-2/3 mx-auto font-merriweather">
//             I am passionate about helping startups and businesses build strong
//             online presences through expert web development. By focusing on
//             creating efficient, scalable, and user-friendly solutions, I can
//             assist your business with the following services.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-12 pt-20">
//           {serviceDetails.map(({ icon: SIcon, description, detail }, index) => (
//             <div
//               key={`${index}`}
//               className="bg-white py-14 px-6 mb-12 border border-peach-500 rounded-xl shadow-md hover:shadow-xl hover:border-peach-500 transition-all duration-300 group"
//             >
//               <div className="text-5xl text-peach-500 mb-7 group-hover:text-secondary-500 transition-colors duration-300">
//                 <SIcon className="" />
//               </div>
//               <div>
//                 <h2 className="text-2xl font-bold text-indigo font-playfair group-hover:text-peach-500">
//                   {description}
//                 </h2>
//               </div>
//               <div className="space-y-2">
//                 <p className="text-slate-600 mt-2 font-merriweather">
//                   {detail}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

import { SiCodestream } from "react-icons/si";
import { SiMaterialdesign } from "react-icons/si";
import { PiDesktopTowerDuotone } from "react-icons/pi";
import { IconType } from "react-icons";

type service = {
  icon: IconType;
  description: string;
  detail: string;
};

export const ServiceSection = () => {
  const serviceDetails: service[] = [
    {
      icon: (props) => <SiCodestream {...props} />,
      description: "WEB DEVELOPMENT",
      detail:
        "Building responsive, scalable web applications using modern frameworks and best practices. From custom coding to client designs, I deliver clean, maintainable code.",
    },
    {
      icon: (props) => <SiMaterialdesign {...props} />,
      description: "UI/UX DESIGN",
      detail:
        "Creating intuitive and visually appealing interfaces that enhance user experience. Strong design foundations ensure long-term project success.",
    },
    {
      icon: (props) => <PiDesktopTowerDuotone {...props} />,
      description: "SEO OPTIMIZATION",
      detail:
        "Implementing fundamental SEO strategies to improve search engine rankings, increase organic traffic, and reduce marketing costs.",
    },
  ];

  return (
    <section className="py-20 bg-slate-800">
      <div className="portfolio-container">
        <div className="text-center px-4 sm:px-6 md:px-8 mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4 font-playfair">
            Services <span className="text-peach-500">I Offer</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 md:w-2/3 mx-auto font-merriweather">
            Helping startups and businesses establish strong online presences
            through expert web development. I deliver efficient, scalable, and
            user-friendly solutions tailored to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 pt-8">
          {serviceDetails.map(({ icon: SIcon, description, detail }, index) => (
            <div
              key={`${index}`}
              className="bg-slate-900 py-12 px-6 border border-slate-700 rounded-xl shadow-lg hover:shadow-2xl hover:border-peach-500 hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="text-5xl text-peach-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                <SIcon className="" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white font-playfair mb-4 group-hover:text-peach-500 transition-colors duration-300">
                  {description}
                </h2>
              </div>
              <div className="space-y-2">
                <p className="text-gray-300 font-merriweather leading-relaxed">
                  {detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
