"use client";

import React, { useState } from "react";

export const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <section className="relative bg-slate-900 overflow-hidden">
      {/* Top curved edge with layered waves */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        {/* Back wave layer with subtle gradient */}
        <svg
          className="absolute bottom-0 w-full h-24 md:h-40 opacity-30"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="topBackWave" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                style={{ stopColor: "#fb923c", stopOpacity: 0.3 }}
              />
              <stop
                offset="50%"
                style={{ stopColor: "#a855f7", stopOpacity: 0.3 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#3b82f6", stopOpacity: 0.3 }}
              />
            </linearGradient>
          </defs>
          <path
            fill="url(#topBackWave)"
            d="M0,128L48,144C96,160,192,192,288,197.3C384,203,480,181,576,154.7C672,128,768,96,864,101.3C960,107,1056,149,1152,154.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>

        {/* Front wave layer */}
        <svg
          className="relative block w-full h-20 md:h-32"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="topGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                style={{ stopColor: "#0f172a", stopOpacity: 1 }}
              />
              <stop
                offset="25%"
                style={{ stopColor: "#1e293b", stopOpacity: 1 }}
              />
              <stop
                offset="75%"
                style={{ stopColor: "#1e293b", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#0f172a", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
          <path
            fill="url(#topGradient)"
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,208C960,192,1056,160,1152,154.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="relative pt-36 pb-32 md:pt-48 md:pb-40">
        <div className="portfolio-container">
          <div className="mb-12 text-center">
            <h2 className="font-opensans text-3xl lg:text-4xl font-bold text-white mb-4">
              Get In <span className="text-peach-500">Touch</span>
            </h2>
            <p className="text-lg font-merriweather text-gray-300 mt-4 max-w-2xl mx-auto">
              Have a project in mind or want to discuss opportunities? Feel free
              to reach out via email at{" "}
              <a
                className="text-peach-500 hover:text-peach-400 underline transition-colors duration-200"
                href="mailto:ballyzap@gmail.com"
              >
                ballyzap@gmail.com
              </a>{" "}
              or use the form below.
            </p>
          </div>

          <div className="w-full max-w-2xl mx-auto bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-xl shadow-2xl p-8">
            <form id="contactForm">
              <div className="mb-6 relative">
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full py-4 pl-6 pr-3 bg-slate-950 border border-slate-700 rounded-lg text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-peach-500 focus:border-transparent peer pt-6 transition-all duration-200"
                  placeholder="Name"
                />
                <label
                  htmlFor="name"
                  className={`absolute left-6 transition-all duration-200 pointer-events-none ${
                    name
                      ? "top-2 text-xs text-peach-500"
                      : "top-1/2 -translate-y-1/2 text-sm text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-peach-500"
                  }`}
                >
                  Name
                </label>
              </div>

              <div className="mb-6 relative">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full py-4 pl-6 pr-3 bg-slate-950 border border-slate-700 rounded-lg text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-peach-500 focus:border-transparent peer pt-6 transition-all duration-200"
                  placeholder="Email"
                />
                <label
                  htmlFor="email"
                  className={`absolute left-6 transition-all duration-200 pointer-events-none ${
                    email
                      ? "top-2 text-xs text-peach-500"
                      : "top-1/2 -translate-y-1/2 text-sm text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-peach-500"
                  }`}
                >
                  Email
                </label>
              </div>

              <div className="mb-6 relative">
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={6}
                  className="w-full py-4 pl-6 pr-3 bg-slate-950 border border-slate-700 rounded-lg text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-peach-500 focus:border-transparent peer pt-6 transition-all duration-200 resize-none"
                  placeholder="Message"
                />
                <label
                  htmlFor="message"
                  className={`absolute left-6 transition-all duration-200 pointer-events-none ${
                    message
                      ? "top-2 text-xs text-peach-500"
                      : "top-6 text-sm text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-peach-500"
                  }`}
                >
                  Project Details
                </label>
              </div>

              <div className="mb-6">
                <button
                  type="submit"
                  className="w-full bg-peach-500 text-white px-6 py-4 rounded-lg font-semibold hover:bg-peach-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-peach-500/50 focus:outline-none focus:ring-2 focus:ring-peach-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom curved edge with layered waves */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        {/* Back wave layer with subtle gradient */}
        <svg
          className="absolute bottom-0 w-full h-24 md:h-40 opacity-30"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="bottomBackWave"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "#fb923c", stopOpacity: 0.3 }}
              />
              <stop
                offset="50%"
                style={{ stopColor: "#a855f7", stopOpacity: 0.3 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#3b82f6", stopOpacity: 0.3 }}
              />
            </linearGradient>
          </defs>
          <path
            fill="url(#bottomBackWave)"
            d="M0,128L48,144C96,160,192,192,288,197.3C384,203,480,181,576,154.7C672,128,768,96,864,101.3C960,107,1056,149,1152,154.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>

        {/* Front wave layer */}
        <svg
          className="relative block w-full h-20 md:h-32"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="bottomGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "#0f172a", stopOpacity: 1 }}
              />
              <stop
                offset="25%"
                style={{ stopColor: "#1e293b", stopOpacity: 1 }}
              />
              <stop
                offset="75%"
                style={{ stopColor: "#1e293b", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#0f172a", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
          <path
            fill="url(#bottomGradient)"
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,208C960,192,1056,160,1152,154.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};
