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
