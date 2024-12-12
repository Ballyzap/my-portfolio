import { footerIcons } from "@/components/navs";
export const Footer = () => {
  return (
    <footer className="bg-primary-800 pt-24 pb-8 text-center">
      <div className="flex space-x-10 items-center justify-center">
        {footerIcons.map(({ href, icon: Icon, label }) => (
          <a
            key={label}
            href={href}
            className="  transition-colors bg-transparent"
            aria-label={label}
          >
            <Icon className="h-10 w-10 text-white p-[8px] rounded-full bg-secondary-500 hover:bg-white hover:text-secondary-500  duration-200" />
          </a>
        ))}
      </div>
      <div className=" mt-8 p-8 text-center text-sm text-slate-400">
        <p className="text-sm py-1">
          Copyright ©{" "}
          <a className="no-underline" href="#your-link">
            Joshua Bala Noma
          </a>
        </p>
      </div>
    </footer>
  );
};
