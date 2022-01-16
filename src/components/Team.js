import React from "react";

export const Team = () => {
  return (
    <section id="work">
      <div className="jumbotron-work">
        <div className="container ">
          <div className="row">
            <div className="col-md-6">
              <h3 className="text-center mb-4">
                <i data-feather="users"></i> Work Opportunities
              </h3>
              <p className="text-justify text-lg-left">Want to cut hair in my salon? We have chairs available.</p>
              <hr />
              <p>To schedule an interview please</p>
              <br />
              <p>
                Email me at
                <a
                  href="mailto:salonmargo2k17@gmail.com?subject=Rent-A-Chair!&body=Hi, I would like to rent a chair from you."
                  target="_blank"
                  rel="noreferrer"
                >
                  salonmargo2k17@gmail.com
                </a>
                or
              </p>
              <br />
              <p>
                Call/
                <a
                  className="platform-dependend-link"
                  data-phone="8605739228"
                  target="_blank"
                  rel="noreferrer"
                  data-sms="Hi, I would like to rent a chair from you."
                  href="tel:8605739228"
                >
                  Text
                </a>
                me at <a href="tel:8605739228">(860) 573-9228</a>
              </p>
            </div>
            <div className="col-md-6">
              <picture>
                <source
                  srcSet="
            /images/build/employment.webp"
                  type="image/webp"
                />
                <source
                  srcSet="
            /images/employment.jpg"
                  type="image/jpeg"
                />
                <img src="/images/build/employment.webp" alt="" className="img-fluid grow img-thumbnail" />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
