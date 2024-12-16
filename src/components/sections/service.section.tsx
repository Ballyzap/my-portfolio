import { SiAltiumdesigner } from "react-icons/si";
import { MdDeveloperBoard } from "react-icons/md";
import { PiTelevisionSimple } from "react-icons/pi";
import { IconType } from "react-icons";

type service = {
  icon: IconType;
  description: string;
  detail: string;
};

export const ServiceSection = () => {
  const serviceDetails: service[] = [
    {
      icon: (props) => <SiAltiumdesigner {...props} />,
      description: "DESIGN",
      detail:
        "Successful online projects start with good design. It establishes a solid foundation for future development and allows for long term growth",
    },
    {
      icon: (props) => <MdDeveloperBoard {...props} />,
      description: "DESIGN",
      detail:
        "Successful online projects start with good design. It establishes a solid foundation for future development and allows for long term growth",
    },
    {
      icon: (props) => <PiTelevisionSimple {...props} />,
      description: "DESIGN",
      detail:
        "Successful online projects start with good design. It establishes a solid foundation for future development and allows for long term growth",
    },
  ];

  return (
    <section>
      <div className="portfolio-container py-20">
        <div>
          <div className="text-center px-4 sm:px-6 md:px-8">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-3">
              Offered services
            </h2>
            <p className="text-base sm:text-lg text-gray-600  md:w-2/3 mx-auto">
              I am passionate about helping startups and businesses build strong
              online presences through expert web development. By focusing on
              creating efficient, scalable, and user-friendly solutions, I can
              assist your business with the following services.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 pt-20">
          {serviceDetails.map(({ icon: SIcon, description, detail }, index) => (
            <div
              key={`${index}`}
              className=" bg-white py-14 px-4 mb-12 border border-secondary-200"
            >
              <div className="text-5xl text-secondary-500 mb-7">
                <SIcon className="" />
              </div>
              <div className="">
                <h2 className="text-3xl">{description}</h2>
              </div>
              <div className="space-y-2">
                <h2 className="text-gray-600 mt-2">{detail}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div id="services" className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-gray-800 mb-3">
              Offered services
            </h2>
            <p className="text-lg text-gray-600">
              Web design and development have been my bread and butter for more
              than 5 years. During that time I've discovered that I can help
              startups and companies with the following services
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center bg-white py-14 px-4 mb-12 border border-gray-300">
              <i className="far fa-gem text-5xl text-blue-800 mb-7"></i>
              <h4 className="text-2xl font-semibold text-gray-800 tracking-wide">
                DESIGN
              </h4>
              <p className="text-gray-600 mt-2">
                Successful online projects start with good design. It
                establishes a solid foundation for future development and allows
                for long term growth.
              </p>
            </div>
            <div className="text-center bg-white py-14 px-4 mb-12 border border-gray-300">
              <i className="fas fa-code text-5xl text-blue-800 mb-7"></i>
              <h4 className="text-2xl font-semibold text-gray-800 tracking-wide">
                DEVELOPMENT
              </h4>
              <p className="text-gray-600 mt-2">
                I can code my own designs or even use the customer's design as
                base. My focus is to generate clean code that's well structured
                for reliability.
              </p>
            </div>
            <div className="text-center bg-white py-14 px-4 mb-12 border border-gray-300">
              <i className="fas fa-tv text-5xl text-blue-800 mb-7"></i>
              <h4 className="text-2xl font-semibold text-gray-800 tracking-wide">
                BASIC SEO
              </h4>
              <p className="text-gray-600 mt-2">
                I can setup your project to use basic SEO principles which will
                push your project to the first page on search engines and save
                you ads money.
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};
