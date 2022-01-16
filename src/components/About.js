import React from "react";

export const About = () => {
  return (
    <section id="about" className="bg-dark text-white">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div id="photoDisplay" className="col-lg-6 my-4  p-0">
            <div>
              <picture>
                <source
                  srcSet="
            /images/build/instagram02.webp"
                  type="image/webp"
                />
                <source
                  srcSet="
            /images/instagram02.jpg"
                  type="image/jpeg"
                />
                <img src="/images/build/instagram02.webp" alt="..." className="photos" id="stacked-photo-1" />
              </picture>
              <picture>
                <source
                  srcSet="
            /images/build/instagram01.webp"
                  type="image/webp"
                />
                <source
                  srcSet="
            /images/instagram01.jpg"
                  type="image/jpeg"
                />
                <img src="/images/build/instagram01.webp" alt="..." className="photos" id="stacked-photo-2" />
              </picture>
              <picture>
                <source
                  srcSet="
            /images/build/img-04.webp"
                  type="image/webp"
                />
                <source
                  srcSet="
            /images/img-04.jpg"
                  type="image/jpeg"
                />
                <img src="/images/build/img-04.webp" alt="..." className="photos" id="stacked-photo-3" />
              </picture>
            </div>
          </div>
          <div className="about-desc col-lg-6 my-4">
            <h3 className=" text-center">
              <i data-feather="smile"></i> About Salon Margo
            </h3>
            <p className="my-3 ">
              As the owner of Salon Margo, Marguerite Swan has carried out a vision far surpassing the expectations of a
              hair salon. Swan has worked diligently to recreate the hair salon as a place for community, familiarity,
              and a place to celebrate the local citizens that give back the most: first responders.
            </p>
            <p>
              Through Salon Margo, Swan has created a place that encourages first responders of the local community to
              have a place they can count on, develop relationships, and be in a space that affirms their bravery,
              courage, and civic duty. Additionally, Swan has uplifted child welfare non-profits, raised money for
              charity on a multitude of issues through the apparatus of her business, and has advocated at the state
              capital for child welfare reform. Swan has taken her passions of life and brought them into a space of
              positivity, encouragement, and community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
