// "use client";

// import { useState, useEffect } from "react";
// import { RiArrowDropDownLine } from "react-icons/ri";
// import { motion } from "framer-motion";

// interface Que {
//   question: string;
//   answer: string;
// }

// export const QuestionSection = () => {
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   // Function to toggle the answer visibility and icon rotation
//   const toggleCollapse = (index: number) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   const ques: Que[] = [
//     {
//       question:
//         "How can I get in touch with you to quickly receive a quote for my online project?",
//       answer:
//         "The best way to reach me is through the contact form or by messaging me on my social media accounts. For a fast quote make sure you provide many project details.",
//     },
//     {
//       question:
//         "Will maintenance or a warranty be included after the project is delivered?",
//       answer:
//         "Maintenance and warranty details depend on the project agreement. Typically, I offer a limited period of free maintenance for bug fixes.",
//     },
//     {
//       question:
//         "If any issues arise with the project, am I eligible for a refund?",
//       answer:
//         "Refunds are evaluated case-by-case. If the project doesn't meet agreed specifications, we can discuss remedies, including partial refunds.",
//     },
//     {
//       question:
//         "What is your preferred payment method, and do you require an advance?",
//       answer:
//         "I accept payments via bank transfer or PayPal. A 50% advance is usually required before starting the project.",
//     },
//   ];

//   return (
//     <section className="bg-soft-ivory">
//       <div className="portfolio-container py-28">
//         <div className="text-center mb-8">
//           <h2 className="text-4xl lg:text-3xl font-semibold font-opensans text-indigo">
//             Frequent questions
//           </h2>
//         </div>
//         <div className="flex flex-col items-start md:items-center mx-auto">
//           {ques.map((faq, index: number) => (
//             <div key={index} className="p-3 w-full max-w-2xl">
//               <div className="flex items-start justify-start md:justify-between">
//                 <button
//                   onClick={() => toggleCollapse(index)}
//                   className="focus:outline-none"
//                   aria-label="Toggle answer"
//                 >
//                   <RiArrowDropDownLine
//                     className={`text-3xl transform transition-transform duration-300 ${
//                       isClient && activeIndex === index ? "rotate-180" : ""
//                     }`}
//                   />
//                 </button>

//                 <button
//                   onClick={() => toggleCollapse(index)}
//                   className={`text-left font-medium text-lg flex-1 ml-2 border-b-2 transition-all duration-300 ${
//                     activeIndex === index
//                       ? "border-transparent"
//                       : "border-gray-300"
//                   }`}
//                 >
//                   <h1 className="font-poppins">{faq.question}</h1>
//                 </button>
//               </div>

//               {isClient && activeIndex === index && (
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: 20 }}
//                   transition={{ duration: 0.4 }}
//                   className="pl-9 pt-3"
//                 >
//                   <p className="text-left text-gray-600 font-serif">
//                     {faq.answer}
//                   </p>
//                 </motion.div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

"use client";

import { useState, useEffect } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

interface Que {
  question: string;
  answer: string;
}

export const QuestionSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleCollapse = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const ques: Que[] = [
    {
      question:
        "How can I get in touch with you to receive a quote for my project?",
      answer:
        "The best way to reach me is through the contact form on this page or by emailing me directly at ballyzap@gmail.com. For a quick quote, please provide detailed project requirements, timeline, and any specific technical needs.",
    },
    {
      question:
        "Will maintenance or warranty be included after project delivery?",
      answer:
        "Yes, I offer post-launch support for all projects. The specifics depend on the project scope, but typically include a period of free bug fixes and minor adjustments. Extended maintenance packages are also available.",
    },
    {
      question: "What is your typical project timeline?",
      answer:
        "Project timelines vary based on complexity and scope. A simple website might take 2-3 weeks, while a complex web application could take 2-3 months. I'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: "What is your preferred payment method and structure?",
      answer:
        "I accept payments via bank transfer or PayPal. Payment structure typically involves a 50% upfront deposit to begin work, 25% at the midpoint milestone, and the final 25% upon project completion and approval.",
    },
  ];

  return (
    <section className="bg-slate-800 py-20">
      <div className="portfolio-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-semibold font-opensans text-white mb-4">
            Frequently Asked <span className="text-peach-500">Questions</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Find answers to common questions about working with me
          </p>
        </div>

        <div className="flex flex-col items-center mx-auto max-w-3xl">
          {ques.map((faq, index: number) => (
            <div
              key={index}
              className="w-full mb-4 bg-slate-900 border border-slate-700 rounded-xl overflow-hidden hover:border-peach-500 transition-colors duration-300"
            >
              <button
                onClick={() => toggleCollapse(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
              >
                <h3 className="font-medium text-lg flex-1 text-white group-hover:text-peach-500 transition-colors duration-300 font-poppins">
                  {faq.question}
                </h3>
                <RiArrowDropDownLine
                  className={`text-3xl text-peach-500 transform transition-transform duration-300 flex-shrink-0 ml-4 ${
                    isClient && activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {isClient && activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-gray-300 font-merriweather leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
