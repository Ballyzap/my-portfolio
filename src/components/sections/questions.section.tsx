"use client";

import { useState, useEffect } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

interface Que {
  question: string;
  answer: string;
}

export const QuestionSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Function to toggle the answer visibility and icon rotation
  const toggleCollapse = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const ques: Que[] = [
    {
      question:
        "How can I get in touch with you to quickly receive a quote for my online project?",
      answer:
        "The best way to reach me is through the contact form or by messaging me on my social media accounts. For a fast quote make sure you provide many project details.",
    },
    {
      question:
        "Will maintenance or a warranty be included after the project is delivered?",
      answer:
        "The best way to reach me is through the contact form or by messaging me on my social media accounts. For a fast quote make sure you provide many project details.",
    },
    {
      question:
        "If any issues arise with the project, am I eligible for a refund?",
      answer:
        "The best way to reach me is through the contact form or by messaging me on my social media accounts. For a fast quote make sure you provide many project details.",
    },
    {
      question:
        "What is your preferred payment method, and do you require an advance?",
      answer:
        "The best way to reach me is through the contact form or by messaging me on my social media accounts. For a fast quote make sure you provide many project details.",
    },
  ];

  // Initialize AOS after component mounts
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set animation duration (optional)
      once: true, // Set to false if you want the animation to trigger multiple times
    });
  }, []);

  return (
    <section className="py-28">
      <div className="">
        <div className="text-center mb-8">
          <h2 className="text-4xl lg:text-3xl font-semibold font-opensans">
            Frequent questions
          </h2>
        </div>
        <div className="flex flex-col items-start md:items-center mx-auto">
          {ques.map((faq, index: number) => (
            <div key={index} className="p-3 w-full max-w-2xl">
              <div className="flex items-start justify-start md:justify-between">
                <RiArrowDropDownLine
                  className={`text-3xl transform transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
                <button
                  onClick={() => toggleCollapse(index)}
                  className={`text-left font-medium text-lg flex-1 ml-2 border-b-2 transition-all duration-300 ${
                    activeIndex === index
                      ? "border-transparent"
                      : "border-gray-300"
                  }`}
                >
                  <h1 className="font-poppins">{faq.question}</h1>
                </button>
              </div>

              {activeIndex === index && (
                <div className="pl-9 pt-3" data-aos="flip-up">
                  <p className="text-left text-gray-600 font-serif">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
