"use client";

import React, { useState } from "react";

export const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <section className="">
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 portfolio-container">
          <div className="mb-8">
            <h2 className="text-center text-3xl font-bold text-gray-800">
              Contact details
            </h2>
            <p className="text-lg w-2/2 font-merriweather text-center text-gray-600 mt-4">
              For any type of online project please don't hesitate to get in
              touch with me. The fastest way is to send me your message using
              the following email&nbsp;
              <a
                className="text-secondary-500 hover:text-gray-600"
                href="#my-link"
              >
                contact@domain.com
              </a>
            </p>
          </div>
          <div className="w-full max-w-lg mx-auto">
            <form id="contactForm">
              {/* Name Field */}
              <div className="mb-6 relative">
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full py-3 pl-6 pr-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 peer pt-6"
                />
                <label
                  htmlFor="name"
                  className={`absolute left-6 top-1/2 transform -translate-y-1/2 text-sm text-primary-500 transition-all duration-200 ${
                    name
                      ? "top-3 translate-y-0 text-black"
                      : "peer-placeholder-shown:top-1/2 peer-placeholder-shown:translate-y-1/2"
                  } peer-focus:top-3 peer-focus:translate-y-0 peer-focus:text-black peer-focus:text-sm font-medium `}
                >
                  Name
                </label>
              </div>
              {/* Email Field */}
              <div className="mb-6 relative">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full py-3 pl-6 pr-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 peer pt-6"
                />
                <label
                  htmlFor="email"
                  className={`absolute left-6 top-1/2 transform -translate-y-1/2 text-sm text-primary-500 transition-all duration-200 ${
                    email
                      ? "top-3 translate-y-0 text-black"
                      : "peer-placeholder-shown:top-1/2 peer-placeholder-shown:translate-y-1/2"
                  } peer-focus:top-3 peer-focus:translate-y-0 peer-focus:text-black peer-focus:text-sm font-medium`}
                >
                  Email
                </label>
              </div>
              {/* Project Details Field */}
              <div className="mb-6 relative">
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full py-3 pl-6 pr-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 peer pt-10 pb-40"
                />
                <label
                  htmlFor="message"
                  className={`absolute left-6 top-8 transform -translate-y-1/2 text-sm text-primary-500 transition-all duration-200 ${
                    message
                      ? "top-4 translate-y-0 text-black"
                      : "peer-placeholder-shown:top-1/2 peer-placeholder-shown:translate-y-1/2"
                  } peer-focus:top-4 peer-focus:translate-y-0 peer-focus:text-black peer-focus:text-sm font-medium`}
                >
                  Project details
                </label>
              </div>
              {/* Submit Button */}
              <div className="mb-6">
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-secondary-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-secondary-500 form-control-submit-button"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
