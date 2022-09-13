import React from "react";
import Blog from "../../components/blogs";
import { Link } from "react-router-dom";
import images from '../../data/imageUpload'
import Header from "../../components/header";
import Footer from "../../components/footer";

function Employeestories() {
  return (
    <div>
      <Header/>
      <section className="banner banner--employeeStories">
        <div className="banner__commonBanner">
          <div className="commonPY">
            <div className="container">
              <div className="row">
                <div className="col-md-6 alignCenter">
                  <div>
                    <h1>Our People Have Some Stories to Tell</h1>
                    <p>
                      Want To Know What It Feels Like To Work At Softuvo, First
                      Hand? Read Our Employees Talk On Their Journey With Us, So
                      Far!!
                    </p>
                  </div>
                </div>
                <div className="col-md-6  text-end">
                  <img
                    src={images["employee-stories-banner.svg"]}
                    alt="Employee Stories"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="employeeStories">
        <div className="container">
          <div className="employeeStories__inner">
            <div className="row">
              <div className="col-lg-6">
                <div className="employeeStories__inner__left">
                  <img src={images["ES-diksha.png"]} alt="Diksha Suri" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="employeeStories__inner__right">
                  <img
                    src={images["quote-left.svg"]}
                    alt="Quote Left"
                    className="img-fluid"
                  />
                  <p>
                    The day I stepped into Softuvo's office it seemed like a
                    young and growing company in the software service industry,
                    imparting vibes that I could not resist. So with the passage
                    of time, while I was sitting there for my...
                  </p>
                  <img
                    src={images["quote-right.svg"]}
                    alt="Quote Right"
                    className="img-fluid float-end"
                  />

                  <h6>
                    Diksha Suri
                    <br />
                    <span>Sr. Content Writer</span>
                  </h6>

                  <a href="employee-details-diksha">
                    Be Yourself, The Rest Follows!{" "}
                    <img
                      src={images["right-arrow-white.svg"]}
                      alt="Arrow Right"
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="employeeStories__inner">
            <div className="row">
              <div className="col-lg-6">
                <div className="employeeStories__inner__right">
                  <img
                    src={images["quote-left.svg"]}
                    alt="Quote Left"
                    className="img-fluid"
                  />
                  <p>
                    Throughout my life, I have always believed in simple
                    thinking and simple living!. I hail from a family that has
                    always taught me and my siblings to work hard for whatever
                    is served on our plates. Since then I imbibed the same...
                  </p>
                  <img
                    src={images["quote-right.svg"]}
                    alt="Quote Right"
                    className="img-fluid float-end"
                  />

                  <h6>
                    Amit Kumar
                    <br />
                    <span>Sr. Software Tester</span>
                  </h6>

                  <a href="employee-details-amit">
                    Hardwork Is The Key To Success!{" "}
                    <img
                      src={images["right-arrow-white.svg"]}
                      alt="Arrow Right"
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="employeeStories__inner__left">
                  <img src={images["ES-amit.png"]} alt="Amit Kumar" />
                </div>
              </div>
            </div>
          </div>

          <div className="employeeStories__inner">
            <div className="row">
              <div className="col-lg-6">
                <div className="employeeStories__inner__left">
                  <img src={images["ES-gaman.png"]} alt="Gamanjit Singh" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="employeeStories__inner__right">
                  <img
                    src={images["quote-left.svg"]}
                    alt="Quote Left"
                    className="img-fluid"
                  />
                  <p>
                    My main motivation to start working at Softuvo was to
                    participate in challenging, future-oriented projects in the
                    IT field and to grow my professional abilities. I enjoy
                    working in a young and motivated team...
                  </p>
                  <img
                    src={images["quote-right.svg"]}
                    alt="Quote Right"
                    className="img-fluid float-end"
                  />

                  <h6>
                    Gamanjit Singh
                    <br />
                    <span>Delivery Manager</span>
                  </h6>

                  <a href="employee-details-gaman">
                    Excellence Is Not Being The Best, It Is Doing Your Best!{" "}
                    <img
                      src={images["right-arrow-white.svg"]}
                      alt="Arrow Right"
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="employeeStories__inner">
            <div className="row">
              <div className="col-lg-6">
                <div className="employeeStories__inner__right">
                  <img
                    src={images["quote-left.svg"]}
                    alt="Quote Left"
                    className="img-fluid"
                  />
                  <p>
                    When I am always asked about my journey here, well I have
                    this one answer that remains true to its words - Softuvo
                    offered a kickstart in my chosen career path! Because when I
                    joined this firm...
                  </p>
                  <img
                    src={images["quote-right.svg"]}
                    alt="Quote Right"
                    className="img-fluid float-end"
                  />

                  <h6>
                    Sukhwinder Kaur
                    <br />
                    <span>Team Manager</span>
                  </h6>

                  <a href="employee-details-sukhwinder">
                    Knowledge Plus Ten Thousand Times Is Skill!
                    <img
                      src={images["right-arrow-white.svg"]}
                      alt="Arrow Right"
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="employeeStories__inner__left">
                  <img src={images["ES-sukhwinder.png"]}  alt="Sukhwinder Kaur" />
                </div>
              </div>
            </div>
          </div>

          <div className="employeeStories__inner">
            <div className="row">
              <div className="col-lg-6">
                <div className="employeeStories__inner__left">
                  <img src={images["ES-itender.png"]} alt="Itender Singh" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="employeeStories__inner__right">
                  <img
                    src={images["quote-left.svg"]}
                    alt="Quote Left"
                    className="img-fluid"
                  />
                  <p>
                    I come from an agricultural background, so staying curious
                    about little things and learning from them, flows in my
                    veins. So, as soon as I completed my education, I was quite
                    sure that I have to make my parents proud
                  </p>
                  <img
                    src={images["quote-right.svg"]}
                    alt="Quote Right"
                    className="img-fluid float-end"
                  />

                  <h6>
                    Itender Singh
                    <br />
                    <span>Sr. Business Development Executive</span>
                  </h6>

                  <a href="employee-details-itender">
                    Stay Curious, Keep Learning and Keep Growing!
                    <img
                      src={images["right-arrow-white.svg"]}
                      alt="Arrow Right"
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Blog />
      <Footer/>
    </div>
  );
}

export default Employeestories;
