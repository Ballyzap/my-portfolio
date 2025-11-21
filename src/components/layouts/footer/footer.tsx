// import { footerIcons } from "@/components/navs";
// export const Footer = () => {
//   return (
//     <footer className="bg-primary-800 pt-24 pb-8 text-center">
//       <div className="flex space-x-10 items-center justify-center">
//         {footerIcons.map(({ href, icon: Icon, label }) => (
//           <a
//             key={label}
//             href={href}
//             className="  transition-colors bg-transparent"
//             aria-label={label}
//           >
//             <Icon className="h-10 w-10 text-white p-[8px] rounded-full bg-indigo hover:bg-white hover:text-indigo  duration-200" />
//           </a>
//         ))}
//       </div>
//       <div className=" mt-8 p-8 text-center text-sm text-slate-400">
//         <p className="text-sm py-1">
//           Copyright ©{" "}
//           <a className="no-underline" href="#your-link">
//             Joshua Bala Noma
//           </a>
//         </p>
//       </div>
//     </footer>
//   );
// };

import { footerIcons } from "@/components/navs";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8">
      <div className="portfolio-container">
        <div className="flex flex-col items-center justify-center space-y-8">
          {/* Social Icons */}
          <div className="flex space-x-6">
            {footerIcons.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                className="group transition-all duration-300"
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="h-12 w-12 text-gray-300 p-3 rounded-full bg-slate-800 hover:bg-peach-500 hover:text-white transition-all duration-300 hover:scale-110" />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-slate-800"></div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Built with passion by{" "}
              <a
                className="text-peach-500 hover:text-peach-400 font-semibold transition-colors duration-300"
                href="#home"
              >
                Joshua Bala Noma
              </a>
            </p>
            <p className="text-xs text-gray-500 mt-2">All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
