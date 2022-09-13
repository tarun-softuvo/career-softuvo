import React from "react";
import images from "../../data/imageUpload";
function Footer() {
  return (
    <div>
      <section class="footer">
        <div class="container-lg">
          <div class="row">
            <div class="col-md-12">
              <div class="footer__contact">
                <div class="row">
                  <div class="col-md-6 p-0">
                    <div class="footer__contact__inner">
                      <h3>Unlock Your Professional Abilities With Softuvo!</h3>
                      <p>Come Join Us Today!!</p>
                      <div class="footer__contact__inner__list">
                        <ul>
                          <li>
                            <div class="footer__contact__inner__list__icon">
                              <img
                                src={images["address-icon.svg"]}
                                alt="Address Icon"
                                class="img-fluid"
                              />
                            </div>
                            <div class="footer__contact__inner__list__details">
                              <h5>Visit this Address</h5>
                              <a
                                href="https://www.google.com/maps/place/Softuvo+Solutions+Pvt.+Ltd./@30.7120987,76.6907246,17z/data=!3m1!4b1!4m5!3m4!1s0x390feeff40c78895:0x89cbe3ae3ebc2eb1!8m2!3d30.7120987!4d76.6929133"
                                target="_blank"
                              >
                                D-199, Industrial Area, Phase - 8B, Mohali
                              </a>
                            </div>
                          </li>
                          <li>
                            <div class="footer__contact__inner__list__icon">
                              <img
                                src={images["call-icon.svg"]}
                                alt="Call Icon"
                                class="img-fluid"
                              />
                            </div>
                            <div class="footer__contact__inner__list__details">
                              <h5>Call @</h5>
                              <a href="tel:01724670301">01724670301</a>
                            </div>
                          </li>
                          <li>
                            <div class="footer__contact__inner__list__icon">
                              <img
                                src={images["email-icon.svg"]}
                                alt="Email Icon"
                                class="img-fluid"
                              />
                            </div>
                            <div class="footer__contact__inner__list__details">
                              <h5>Email CV @</h5>
                              <a href="mailto:hr@softuvo.com">hr@softuvo.com</a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-6 p-0">
                    <div class="footer__contact__inner footer__contact__inner--bgPurple">
                      <h3>Looking For A Career Opportunity At Softuvo?</h3>
                      <p>Fill In The Details To Keep In Touch!</p>
                      <div class="footer__contact__inner__form">
                        <div class="row">
                          <div class="col-md-6 mb-3">
                            <input
                              type="text"
                              placeholder="Name"
                              class="form-control"
                            />
                          </div>
                          <div class="col-md-6 mb-3">
                            <input
                              type="text"
                              placeholder="Email Address"
                              class="form-control"
                            />
                          </div>
                          <div class="col-md-6 mb-3">
                            <input
                              type="text"
                              placeholder="Contact Number"
                              class="form-control"
                            />
                          </div>
                          <div class="col-md-6 mb-3">
                            <input
                              type="text"
                              placeholder="Skype"
                              class="form-control"
                            />
                          </div>
                          <div class="col-md-12 mb-3">
                            <textarea
                              class="form-control"
                              placeholder="Message"
                              rows="5"
                            ></textarea>
                          </div>
                          <div class="col-md-12">
                            <button class="btn footer__contact__inner__form__button">
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-4">
              <div class="footer__inner">
                <img
                  src={images["logo-white.png"]}
                  alt="Footer Logo"
                  class="img-fluid"
                />
                <p>
                  Softuvo fosters a dynamic corporate culture that only agile IT
                  companies offer! So, if you are looking for an opportunity to
                  enhance your professional skills and work on the latest
                  technological trends, be a part of our team of IT experts,
                  bring in your ideas, and move your career forward!
                </p>
              </div>
            </div>
            <div class="col-md-2">
              <div class="footer__inner">
                <h4>Quick Links</h4>
                <ul class="footer__inner__links">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="why-join-softuvo">Why Join Softuvo</a>
                  </li>
                  <li>
                    <a href="life-at-softuvo">Life at Softuvo</a>
                  </li>
                  <li>
                    <a href="our-team">Our Team</a>
                  </li>
                  <li>
                    <a href="upskill-session">Upskill Sessions</a>
                  </li>
                  <li>
                    <a href="our-culture">Our Culture</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-3">
              <div class="footer__inner">
                <h4>Quick Links</h4>
                <ul class="footer__inner__links">
                  <li>
                    <a href="employee-saying">Employee Sayings</a>
                  </li>
                  <li>
                    <a href="job-search">Job Search</a>
                  </li>
                  <li>
                    <a href="news">News</a>
                  </li>
                  <li>
                    <a href="employee-contributions">Employee contribution</a>
                  </li>
                  <li>
                    <a href="contact-us">Contact Us</a>
                  </li>
                  <li>
                    <a href="blog">Blogs</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-3">
              <div class="footer__inner">
                <h4>Quick Links</h4>
                <ul class="footer__inner__links">
                  <li>
                    <a href="inclusion-diversion">Inclusion & Diversity</a>
                  </li>
                  <li>
                    <a href="equal-opportunity">Equal Opportunity</a>
                  </li>
                  <li>
                    <a href="hybrid-work-culture">Hybrid work culture</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="footer__softuvoRatings">
                <h3>Softuvo Ratings On Glassdoor</h3>

                <div class="row">
                  <div class="col-md-4">
                    <div class="footer__softuvoRatings__inner">
                      <h6>Overall Rating</h6>
                      <p>4.6</p>
                      <img
                        src={images["stars.svg"]}
                        class="img-fluid"
                        alt="Stars"
                      />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="footer__softuvoRatings__inner">
                      <h6>Recommend to a friend</h6>
                      <div class="progress progress-footer white">
                        <span class="progress-left">
                          <span class="progress-bar"></span>
                        </span>
                        <span class="progress-right">
                          <span class="progress-bar"></span>
                        </span>
                        <div class="progress-value">90%</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="footer__softuvoRatings__inner">
                      <h6>Approve of CEO</h6>
                      <div class="progress progress-footer yellow">
                        <span class="progress-left">
                          <span class="progress-bar"></span>
                        </span>
                        <span class="progress-right">
                          <span class="progress-bar"></span>
                        </span>
                        <div class="progress-value">91%</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-12">
                    <a
                      href="https://www.glassdoor.co.in/Overview/Working-at-Softuvo-Solutions-EI_IE1655590.11,28.htm"
                      target="_blank"
                      class="btn btn-link"
                    >
                      View More Info On Glassdoor
                      <img
                        src={images["right-arrow.svg"]}
                        alt="Right Arrow"
                        class="img-fluid"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="footer__copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="footer__copyright__inner">
                <p>
                  Copyright © 2022 | All Rights Reserved. Softuvo Solutions Pvt
                  Ltd.
                </p>
                <ul>
                  <li>
                    <a href="https://www.facebook.com/softuvo/" target="_blank">
                      <svg
                        className="svg-inline--fa fa-facebook-f"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="facebook-f"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        data-fa-i2svg
                      >
                        <path
                          fill="currentColor"
                          d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/softuvosolutions/"
                      target="_blank"
                    >
                      <svg
                        className="svg-inline--fa fa-instagram"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="instagram"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        data-fa-i2svg
                      >
                        <path
                          fill="currentColor"
                          d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.pinterest.com/softuvosolutions/"
                      target="_blank"
                    >
                      <svg
                        className="svg-inline--fa fa-pinterest-p"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="pinterest-p"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        data-fa-i2svg
                      >
                        <path
                          fill="currentColor"
                          d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/softuvo/"
                      target="_blank"
                    >
                      <svg
                        className="svg-inline--fa fa-linkedin-in"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="linkedin-in"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        data-fa-i2svg
                      >
                        <path
                          fill="currentColor"
                          d="M100.3 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.6 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.3 61.9 111.3 142.3V448z"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/channel/UCkPSDlnV3LYEnoHq-g3eHFw"
                      target="_blank"
                    >
                      <svg
                        className="svg-inline--fa fa-youtube"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="youtube"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        data-fa-i2svg
                      >
                        <path
                          fill="currentColor"
                          d="M549.7 124.1c-6.281-23.65-24.79-42.28-48.28-48.6C458.8 64 288 64 288 64S117.2 64 74.63 75.49c-23.5 6.322-42 24.95-48.28 48.6-11.41 42.87-11.41 132.3-11.41 132.3s0 89.44 11.41 132.3c6.281 23.65 24.79 41.5 48.28 47.82C117.2 448 288 448 288 448s170.8 0 213.4-11.49c23.5-6.321 42-24.17 48.28-47.82 11.41-42.87 11.41-132.3 11.41-132.3s0-89.44-11.41-132.3zm-317.5 213.5V175.2l142.7 81.21-142.7 81.2z"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/softuvo" target="_blank">
                      <svg
                        className="svg-inline--fa fa-twitter"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="twitter"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        data-fa-i2svg
                      >
                        <path
                          fill="currentColor"
                          d="M459.4 151.7c.325 4.548 .325 9.097 .325 13.65 0 138.7-105.6 298.6-298.6 298.6-59.45 0-114.7-17.22-161.1-47.11 8.447 .974 16.57 1.299 25.34 1.299 49.06 0 94.21-16.57 130.3-44.83-46.13-.975-84.79-31.19-98.11-72.77 6.498 .974 12.99 1.624 19.82 1.624 9.421 0 18.84-1.3 27.61-3.573-48.08-9.747-84.14-51.98-84.14-102.1v-1.299c13.97 7.797 30.21 12.67 47.43 13.32-28.26-18.84-46.78-51.01-46.78-87.39 0-19.49 5.197-37.36 14.29-52.95 51.65 63.67 129.3 105.3 216.4 109.8-1.624-7.797-2.599-15.92-2.599-24.04 0-57.83 46.78-104.9 104.9-104.9 30.21 0 57.5 12.67 76.67 33.14 23.72-4.548 46.46-13.32 66.6-25.34-7.798 24.37-24.37 44.83-46.13 57.83 21.12-2.273 41.58-8.122 60.43-16.24-14.29 20.79-32.16 39.31-52.63 54.25z"
                        />
                      </svg>
                      {/* <i class="fa-brands fa-twitter"></i> Font Awesome fontawesome.com */}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
