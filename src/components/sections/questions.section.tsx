"use client";

import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { motion } from "framer-motion"; // Import motion for Framer Motion

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

  return (
    <section className="py-28">
      <div>
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

              {/* Apply Framer Motion for sliding and fading effect */}
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }} // Start with opacity 0 and slight offset from the bottom
                  animate={{ opacity: 1, y: 0 }} // Fade in and slide up
                  exit={{ opacity: 0, y: 20 }} // Fade out and slide down
                  transition={{ duration: 0.4 }} // Smooth transition
                  className="pl-9 pt-3"
                >
                  <p className="text-left text-gray-600 font-serif">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
