import React from "react";
import { MdPhone, MdLocationPin, MdMenu } from "react-icons/md";

const links = [
  { linkId: "top", label: "Top", className: "bg-red-500 hover:bg-red-500    " },
  { linkId: "services", label: "Services" },
  { linkId: "social", label: "Gallery" },
  { linkId: "about", label: "About" },
  { linkId: "reviews", label: "Reviews" },
  { linkId: "work", label: "Employment" },
  { linkId: "contact", label: "Contact" },
];

export const Navbar = () => {
  return (
    <nav className="bg-gray-700 text-white flex justify-center fixed w-full py-3  ">
      <div className="container flex items-center justify-between">
        <div className="flex space-x-4 px-10">
          <img src="/images/favicon/favicon-32x32.png" width="30" height="30" />
          <span className="capitalize">Salon Margo</span>
        </div>

        <div className="lg:hidden flex space-x-8 text-white text-2xl px-10 ">
          <a href="tel:8605739228" aria-label="Call to Set Appointment">
            <MdPhone />
          </a>
          <a
            aria-label="Open Location"
            target="_blank"
            rel="noopener"
            href="https://www.google.com/maps/place/Salon+Margo/@41.6461054,-72.8749937,17z/data=!3m1!4b1!4m5!3m4!1s0x89e7ba83e34186cf:0x6b206121c02dda8d!8m2!3d41.6461054!4d-72.872805"
          >
            <MdLocationPin />
          </a>

          <button
            type="button"
            aria-label="toggle menu"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <MdMenu />
          </button>
        </div>

        <div className="hidden lg:block">
          {links.map(({ linkId, label, ...rest }) => (
            <NavButton linkId={linkId} label={label} {...rest} />
          ))}
        </div>
      </div>
    </nav>
  );
};

const NavButton = ({ linkId, label, yOffset = -95, className = "" }) => {
  return (
    <button
      className={
        "cursor-pointer px-4 py-2 m-1 transition-all rounded hover:bg-indigo-500 bg-opacity-20 hover:bg-opacity-60" +
        className
      }
      onClick={() => {
        const anchor = document.querySelector(`#${linkId}`);
        const y = anchor.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }}
    >
      {label}
    </button>
  );
};
