import React from "react";
import { MdEmail, MdFacebook, MdGroups, MdLockClock, MdMenuBook, MdOutlineMap } from "react-icons/md";
import { FaInstagram, FaPhone, FaRegClock } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer
      className="bg-gray-600 flex  flex-col justify-around py-10  text-white"
      style={{ backgroundImage: 'url("/images/scissors-bg.jpg")', boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.9)" }}
    >
      <div className=" flex container  mx-auto flex-col lg:flex-row justify-around text-white py-3 px-10">
        <div className="pb-2 lg:w-1/4">
          <FooterHeader title="location" Icon={MdOutlineMap} />
          <div className=" py-1 flex justify-between">
            <a
              className="text-white "
              aria-label="Open Location"
              target="_blank"
              rel="noopener"
              href="https://www.google.com/maps/place/Salon+Margo/@41.6461054,-72.8749937,17z/data=!3m1!4b1!4m5!3m4!1s0x89e7ba83e34186cf:0x6b206121c02dda8d!8m2!3d41.6461054!4d-72.872805"
            >
              <address className="flex flex-col">
                <span> 1079 Queen St</span>
                <span> STE #11,</span>
                <span>Southington,</span>
                <span> CT 06489</span>
              </address>
            </a>
            <a
              href="https://www.google.com/maps/place/Salon+Margo/@41.6461054,-72.8749937,17z/data=!3m1!4b1!4m5!3m4!1s0x89e7ba83e34186cf:0x6b206121c02dda8d!8m2!3d41.6461054!4d-72.872805"
              target="_blank"
              rel="noopener noreferrer "
              className="-mt-6 shadow-lg border-dashed border rounded p-2 bg-gray-600 mr-4"
            >
              <picture>
                <source
                  srcSet="
                /images/build/map.webp"
                  type="image/webp"
                />
                <source
                  srcSet="
                /images/map.png"
                  type="image/png"
                />
                <img width="150" className="img rounded" src="/images/build/map.webp" alt="location map" />
              </picture>
            </a>
          </div>
        </div>

        <div className="lg:w-1/4 pb-2 ">
          <FooterHeader title="social" Icon={MdGroups} />
          <div className="flex justify-around py-6 text-xl ">
            <div className="  ">
              <a
                href="https://www.facebook.com/salonmargo2k17"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white flex  items-center"
              >
                <MdFacebook className="mr-2" /> Facebook
              </a>
            </div>
            <div className="col-lg-6 ">
              <a
                href="https://www.instagram.com/explore/locations/153012735297940/united-states/southington-connecticut/salon-margo/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white  flex  items-center"
              >
                <FaInstagram className="mr-2" /> Instagram
              </a>
            </div>
          </div>

          <div className=" pb-2 ">
            <FooterHeader title="contact" Icon={MdMenuBook} />

            <ul className="list-unstyled flex flex-col space-y-4 justify-around py-6 text-xl px-6">
              <li className="flex">
                <FaPhone className="mr-2" />
                <a href="tel:860-573-9228" className="text-white">
                  (860) 573-9228
                </a>
              </li>
              <li className="flex">
                <MdEmail className="mr-2" />
                <a href="mailto:salonmargo2k17@gmail.com" className="text-white">
                  salonmargo2k17@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-3">
          <FooterHeader title="open hours" Icon={FaRegClock} />

          <ul className="list-unstyled">
            <li>
              <strong>Mon - Closed / Appt Only</strong>
            </li>
            <li>Tue - 10 am - 8 pm</li>
            <li>Wed - 10 am - 6 pm</li>
            <li>Thu - 10 am - 8 pm</li>
            <li>Fri - 9:30 am - 6 pm</li>
            <li>Sat - 9 am - 4pm</li>
            <li>
              <strong>Sun - Closed / Appt Only</strong>
            </li>
            <li className="mt-2">
              Hours are <strong>flexible</strong>, so just ask!
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-copyright text-center py-5 text-muted">
        Salon Margo © 2020 - {new Date().getFullYear()} Copyright:
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://jelizarovas.com"
          className="font-bold hover:underline ml-2 text-orange-400"
        >
          jelizarovas.com
        </a>
      </div>
    </footer>
  );
};

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const FooterHeader = ({ Icon, title, ...props }) => {
  return (
    <h5 className="uppercase px-4 pb-2 flex items-center space-x-2 text-2xl border-b border-dashed ">
      <Icon /> <span> {title} </span>
    </h5>
  );
};
