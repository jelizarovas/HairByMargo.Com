import React from "react";

export const Welcome = () => {
  return (
    <section id="welcome">
      <div className="jumbotron">
        <div className="container justify-content-center">
          <h1 className="text-center display-5 welcome-h1">
            Welcome to <i data-feather="scissors"></i> Salon Margo
          </h1>
          <div className="row">
            <div className="col-lg-6 justify-content-center">
              <picture>
                <source
                  srcSet="
            images/build/img-05.webp"
                  type="image/webp"
                />
                <source
                  srcSet="
            images/img-05.jpg"
                  type="image/jpeg"
                />
                <img className="img-fluid w-full img-thumbnail" src="images/build/img-05.webp" alt="" />
              </picture>
            </div>
            <div className="col-lg-6">
              <p className="lead d-none d-sm-block">
                Unique place located in Southington, CT to have your hair styled! Call/text me at (860) 573-9228 to make
                an appointment. Or drop in any time we're open, walk-ins welcome!
              </p>
              <p className="lead d-none d-md-block">
                Marguerite Swan is an up and coming young entrepreneur and community activist who built her own custom
                salon through hard work and word of mouth recommendations. In addition to hair, she has renovated two
                salon spaces. Swan is a former foster child who passionately advocates for better resources and care for
                foster and adoptive youth. She also pushes for recognition and support for the first responders in her
                community. also born 11/11 Marguerite brings a joyful spark to everything she does rarely without a
                smile and laugh that naturally draws people in.
              </p>
            </div>
          </div>

          <div className=" row justify-content-center">
            <a
              href="tel:8605739228"
              className="btn btn-dark btn-lg  text-center"
              role="button"
              aria-label="Call to Set Appointment"
            >
              <i data-feather="phone"></i> Set Appointment
            </a>
            <a
              aria-label="Open Location"
              target="_blank"
              className="btn btn-dark btn-lg   text-center"
              role="button"
              rel="noopener"
              href="https://www.google.com/maps/place/Salon+Margo/@41.6461054,-72.8749937,17z/data=!3m1!4b1!4m5!3m4!1s0x89e7ba83e34186cf:0x6b206121c02dda8d!8m2!3d41.6461054!4d-72.872805"
            >
              <i data-feather="map-pin"></i> Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
