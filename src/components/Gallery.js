import React from "react";

export const Gallery = () => {
  return (
    <section id="social">
      <div className="container">
        <h3 className="mt-5 text-center">
          <i data-feather="instagram"></i> Gallery
        </h3>
        <p className="my-2 text-muted text-center">
          Visit my
          <a
            href="https://www.instagram.com/explore/locations/153012735297940/united-states/southington-connecticut/salon-margo/?hl=en"
            target="_blank"
            className="text-dark"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          to see my scissors in action!
        </p>
        <hr />
        <div className="row justify-content-center">
          <div className="col-6 col-md-4">
            <a data-fancybox="gallery" href="/images/instagram01.jpg">
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
                <img className="img-fluid grow img-thumbnail" src="/images/build/instagram01.webp" alt="" />
              </picture>
            </a>
          </div>
          <div className="col-6 col-md-4">
            <a data-fancybox="gallery" href="/images/instagram02.jpg">
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
                <img className="img-fluid grow img-thumbnail" src="/images/build/instagram02.webp" alt="" />
              </picture>
            </a>
          </div>
          <div className="col-6 col-md-4">
            <a data-fancybox="gallery" href="/images/instagram03.jpg">
              <picture>
                <source
                  srcSet="
          /images/build/instagram03.webp"
                  type="image/webp"
                />
                <source
                  srcSet="
          /images/instagram03.jpg"
                  type="image/jpeg"
                />
                <img className="img-fluid grow img-thumbnail" src="/images/build/instagram03.webp" alt="" />
              </picture>
            </a>
          </div>
          <div className="col-6 col-md-4">
            <a data-fancybox="gallery" href="/images/img-01.jpg">
              <picture>
                <source
                  srcSet="
          /images/build/img-01.webp"
                  type="image/webp"
                />
                <source
                  srcSet="
          /images/img-01.jpg"
                  type="image/jpeg"
                />
                <img className="img-fluid grow img-thumbnail" src="/images/build/img-01.webp" alt="" />
              </picture>
            </a>
          </div>
          <div className="col-6 col-md-4">
            <a data-fancybox="gallery" href="/images/instagram05.jpg">
              <picture>
                <source
                  srcSet="
          /images/build/instagram05.webp"
                  type="image/webp"
                />
                <source
                  srcSet="
          /images/instagram05.jpg"
                  type="image/jpeg"
                />
                <img className="img-fluid grow img-thumbnail" src="/images/build/instagram05.webp" alt="" />
              </picture>
            </a>
          </div>
          <div className="col-6 col-md-4">
            <a data-fancybox="gallery" href="/images/instagram06.jpg">
              <picture>
                <source
                  srcSet="
          /images/build/instagram06.webp"
                  type="image/webp"
                />
                <source
                  srcSet="
          /images/instagram06.jpg"
                  type="image/jpeg"
                />
                <img className="img-fluid grow img-thumbnail" src="/images/build/instagram06.webp" alt="" />
              </picture>
            </a>
          </div>
        </div>
        <hr className="mb-5" />
      </div>
    </section>
  );
};
