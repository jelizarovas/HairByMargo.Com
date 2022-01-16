import React from "react";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top" data-spy="affix" data-offset-top="95">
      <div className="container">
        <a className="navbar-brand" href="#top">
          <i data-feather="scissors" className="d-inline-block align-top" width="30" height="30"></i>
          Salon Margo
        </a>
        <div>
          <a href="tel:8605739228" aria-label="Call to Set Appointment">
            <i data-feather="phone" className="d-sm-inline-block d-md-none text-white mx-2"></i>
          </a>
          <a
            aria-label="Open Location"
            target="_blank"
            rel="noopener"
            href="https://www.google.com/maps/place/Salon+Margo/@41.6461054,-72.8749937,17z/data=!3m1!4b1!4m5!3m4!1s0x89e7ba83e34186cf:0x6b206121c02dda8d!8m2!3d41.6461054!4d-72.872805"
          >
            <i data-feather="map-pin" className="	d-sm-inline-block d-md-none text-white mx-3"></i>
          </a>
          <button
            type="button"
            aria-label="toggle menu"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ml-auto py-3 ">
            <a href="#top" className="px-3 nav-item nav-link active">
              Top
            </a>
            <a href="#services" className="px-3 nav-item nav-link">
              Services
            </a>
            <a href="#social" className="px-3 nav-item nav-link ">
              Gallery
            </a>
            <a href="#about" className="px-3 nav-item nav-link">
              About
            </a>
            <a href="#reviews" className="px-3 nav-item nav-link">
              Reviews
            </a>
            <a href="#work" className="px-3 nav-item nav-link ">
              Employment
            </a>
            <a href="#contact" className="px-3 nav-item nav-link ">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
