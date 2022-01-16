import React from "react";

export const Reviews = () => {
  return (
    <section id="reviews">
      <div className="container text-center my-5 p-1">
        <h3 className="h1-responsive font-weight-bold mt-5">
          <i data-feather="star"></i> Testimonials
        </h3>
        <p className="mb-3 text-center">
          Like my work? Don't be a stranger,
          <a
            href="https://www.google.com/search?rlz=1C1CHBD_enUS824US824&sxsrf=ACYBGNQJBL0Y4-tk5SRTzIm7wXYFHhlfgw%3A1579729889133&ei=4cMoXqveB5HU-gT17KWYAg&q=salon+margo&oq=salon+margo&gs_l=psy-ab.3..35i39l2j0l8.174243.174387..174540...0.0..0.63.286.5......0....1..gws-wiz.......0i22i30.KsXMB-8cWYI&ved=0ahUKEwjr0oe3mJjnAhURqp4KHXV2CSMQ4dUDCAs&uact=5#lrd=0x89e7ba83e34186cf:0x6b206121c02dda8d,1,,,"
            target="_blank"
            className="text-dark"
            rel="noopener noreferrer"
          >
            leave a review!
          </a>
        </p>

        <div className="row text-center mt-5">
          <div className="col-md-4 mb-md-0 mb-5">
            <div className="testimonial">
              <div className="avatar mx-auto">
                <picture>
                  <source
                    srcSet="
              /images/build/review-01.webp"
                    type="image/webp"
                  />
                  <source
                    srcSet="
              /images/review-01.jpg"
                    type="image/jpeg"
                  />
                  <img
                    src="/images/build/review-01.webp"
                    className="rounded-circle z-depth-1 img-fluid"
                    alt="Customer"
                  />
                </picture>
              </div>

              <h4 className="font-weight-bold dark-grey-text mt-4">Annie Franklin</h4>

              <p className="font-weight-normal dark-grey-text">
                Margo is the best! I work with individuals with special needs and my client struggles when getting his
                hair cut. He used to require two adults to sit still in the chair long enough to get his hair cut. After
                Margo cut his hair three times, he is able to sit by himself without an issue. This is amazing! Margo’s
                compassion and understanding were key to making this happen!.
              </p>

              <div className="orange-text">
                <i data-feather="star" className="text-warning filled"></i>
                <i data-feather="star" className="text-warning filled"></i>
                <i data-feather="star" className="text-warning filled"></i>
                <i data-feather="star" className="text-warning filled"></i>
                <i data-feather="star" className="text-warning filled"></i>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-md-0 mb-5">
            <div className="testimonial">
              <div className="avatar mx-auto">
                <picture>
                  <source
                    srcSet="
              /images/build/review-02.webp"
                    type="image/webp"
                  />
                  <source
                    srcSet="
              /images/review-02.png"
                    type="image/png"
                  />
                  <img
                    src="/images/build/review-02.webp"
                    className="rounded-circle z-depth-1 img-fluid"
                    alt="Customer"
                  />
                </picture>
              </div>

              <h4 className="font-weight-bold dark-grey-text mt-4">Kate Arana</h4>

              <p className="font-weight-normal dark-grey-text">
                I've found my place. I've been to so many other salons in the area and this one by far was the best
                experience. Owner knows what she's doing and cares about her clients. Both my daughter and I got
                blowouts and they were perfect. I also got my hair colored and didnt walk out with a colored framed face
                ( like all the other places Ive been too). My blunt cut is perfect. Salon Margo has made a long time
                client and I'm grateful..
              </p>

              <div className="orange-text">
                <i data-feather="star" className="text-warning filled"></i>
                <i data-feather="star" className="text-warning filled"></i>
                <i data-feather="star" className="text-warning filled"></i>
                <i data-feather="star" className="text-warning filled"></i>
                <i data-feather="star" className="text-warning filled"></i>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="testimonial">
              <div className="avatar mx-auto">
                <picture>
                  <source
                    srcSet="
              /images/build/review-03.webp"
                    type="image/webp"
                  />
                  <source
                    srcSet="
              /images/review-03.png"
                    type="image/png"
                  />
                  <img
                    src="/images/build/review-03.webp"
                    className="rounded-circle z-depth-1 img-fluid"
                    alt="Customer"
                  />
                </picture>
              </div>

              <h4 className="font-weight-bold dark-grey-text mt-4">Chelsea J. Hernandez</h4>

              <p className="font-weight-normal dark-grey-text ">
                Margo hands down my favorite hair stylist 🙌🏻 She creates an amazing welcoming atmosphere here that will
                always keep you coming back!!! Margo will always go above and beyond to ensure you love your new look!!
                I will not let anyone cut my hair or touch my hair besides her! 🙌🏻♥️
              </p>

              <div className="orange-text">
                <i data-feather="star" className="text-warning filled"></i>
                <i data-feather="star" className="text-warning filled"></i>
                <i data-feather="star" className="text-warning filled"></i>
                <i data-feather="star" className="text-warning filled"></i>
                <i data-feather="star" className="text-warning filled"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
