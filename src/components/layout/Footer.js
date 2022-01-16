import React from "react";

export const Footer = () => {
  return (
    <footer className="page-footer font-small pt-4 bg-dark text-white">
      <div className="container text-md-left">
        <div className="row">
          <div className="col-md-4 mt-md-0 mt-3">
            <h5 className="text-uppercase pb-2">
              {/* style="border-bottom: 1px dashed white;" */}
              <i data-feather="map"></i> Location
            </h5>

            <div className="row py-1">
              <div className="col-lg-6">
                <a
                  className="text-white"
                  aria-label="Open Location"
                  target="_blank"
                  rel="noopener"
                  href="https://www.google.com/maps/place/Salon+Margo/@41.6461054,-72.8749937,17z/data=!3m1!4b1!4m5!3m4!1s0x89e7ba83e34186cf:0x6b206121c02dda8d!8m2!3d41.6461054!4d-72.872805"
                >
                  <address>
                    1079 Queen St
                    <br />
                    STE #11,
                    <br />
                    Southington,
                    <br />
                    CT 06489
                  </address>
                </a>
              </div>
              <div className="col-lg-6">
                <a
                  href="https://www.google.com/maps/place/Salon+Margo/@41.6461054,-72.8749937,17z/data=!3m1!4b1!4m5!3m4!1s0x89e7ba83e34186cf:0x6b206121c02dda8d!8m2!3d41.6461054!4d-72.872805"
                  target="_blank"
                  rel="noopener noreferrer "
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
          </div>

          <hr className="clearfix w-100 d-md-none pb-3" />

          <div className="col-md-4 mb-md-0 mb-3">
            <h5 className="text-uppercase mb-0 pb-2">
              {/* style="border-bottom: 1px dashed white;" */}
              <i data-feather="users"></i> Social
            </h5>
            <div className="row ">
              <div className="col-lg-6 pt-3">
                <a
                  href="https://www.facebook.com/salonmargo2k17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white py-3"
                >
                  <i data-feather="facebook"></i> Facebook
                </a>
              </div>
              <div className="col-lg-6 py-3">
                <a
                  href="https://www.instagram.com/explore/locations/153012735297940/united-states/southington-connecticut/salon-margo/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white py-3"
                >
                  <i data-feather="instagram"></i> Instagram
                </a>
              </div>
            </div>
            <h5 id="contact" className="text-uppercase mb-0 pt-4 pb-1">
              {/* style="border-bottom: 1px dashed white;" */}
              <i data-feather="book-open"></i> Contact
            </h5>

            <ul className="list-unstyled footer-social-links">
              <li>
                <i data-feather="phone" alt="Phone"></i>
                <a href="tel:860-573-9228" className="text-white">
                  (860) 573-9228
                </a>
              </li>
              <li>
                <i data-feather="at-sign" alt="Email"></i>
                <a href="mailto:salonmargo2k17@gmail.com" className="text-white">
                  salonmargo2k17@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <hr className="clearfix w-100 d-md-none pb-3" />

          <div className="col-md-4 mb-md-0 mb-3">
            <h5 className="text-uppercase pb-2">
              {/* style="border-bottom: 1px dashed white;" */}
              <i data-feather="clock"></i> Open hours
            </h5>

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
      </div>

      <div className="footer-copyright text-center py-5 text-muted">
        Salon Margo © 2020 Copyright:
        <a target="_blank" rel="noopener noreferrer" href="https://jelizarovas.com" className="text-white">
          jelizarovas.com
        </a>
      </div>
      <button onClick={topFunction} id="myBtn" title="Go to top">
        Top
      </button>
    </footer>
  );
};

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
