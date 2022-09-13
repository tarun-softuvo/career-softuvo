import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import ContactImg from "../../assets/images/contact-banner.svg";
import ApplicationProcess from "../applicationProcess";
import Blog from "../../components/blogs";
import images from "../../data/imageUpload";
import Header from "../../components/header";
import Footer from "../../components/footer";
function Jobs() {
  console.log("jobs");


  return (
    // <section className="jobSearch">
    <div>
      <Header/>
      <section class="jobSearch">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h2>Jobs</h2>
              <p>
                We are always on the hunt for talented people!
                <br />
                Find jobs that match your skills and get ready to start your
                journey with us!
              </p>

              <form class="jobSearch__form">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter the job title, skill"
                />
                <button class="btn jobSearch__form__button">Search</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>Jobs</h2>
            <p>
              We are always on the hunt for talented people!
              <br />
              Find jobs that match your skills and get ready to start your
              journey with us!
            </p>
            <form className="jobSearch__form">
              <input
                type="text"
                className="form-control"
                placeholder="Enter the job title, skill"
              />
              <button className="btn jobSearch__form__button">Search</button>
            </form>
          </div>
        </div>
      </div> */}

      <section className="jobListing">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3>50 User Exprerience Jobs</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="jobListing__left">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="jobListing__left__inner">
                      <h4>
                        UI/UX Designer
                        <br />
                        <span>Remote</span>
                      </h4>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          Senior Level
                        </label>
                      </div>
                      <button className="btn jobListing__left__inner__applyButton">
                        Apply
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="jobListing__left__inner">
                      <h4>
                        UI/UX Designer
                        <br />
                        <span>Remote</span>
                      </h4>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          Senior Level
                        </label>
                      </div>
                      <button className="btn jobListing__left__inner__applyButton">
                        Apply
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="jobListing__left__inner">
                      <h4>
                        UI/UX Designer
                        <br />
                        <span>Remote</span>
                      </h4>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          Senior Level
                        </label>
                      </div>
                      <button className="btn jobListing__left__inner__applyButton">
                        Apply
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="jobListing__left__inner">
                      <h4>
                        UI/UX Designer
                        <br />
                        <span>Remote</span>
                      </h4>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          Senior Level
                        </label>
                      </div>
                      <button className="btn jobListing__left__inner__applyButton">
                        Apply
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="jobListing__left__inner">
                      <h4>
                        UI/UX Designer
                        <br />
                        <span>Remote</span>
                      </h4>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          Senior Level
                        </label>
                      </div>
                      <button className="btn jobListing__left__inner__applyButton">
                        Apply
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="jobListing__left__inner">
                      <h4>
                        UI/UX Designer
                        <br />
                        <span>Remote</span>
                      </h4>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          Senior Level
                        </label>
                      </div>
                      <button className="btn jobListing__left__inner__applyButton">
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="jobListing__right">
                <div className="jobListing__right__registerJobAlerts">
                  <h3>Register for new job alerts!</h3>
                  <form className="jobListing__right__registerJobAlerts__form">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your email address"
                    />
                    <button className="btn jobListing__right__registerJobAlerts__form__button">
                      Activate
                    </button>
                  </form>
                </div>
                <div className="jobListing__right__currentJobOpenings">
                  <h3>Current Job Openings</h3>
                  <ul>
                    <li>
                      <h4>UI/UX Designer</h4>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority...
                      </p>
                    </li>
                    <li>
                      <h4>UI/UX Designer</h4>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority...
                      </p>
                    </li>
                    <li>
                      <h4>UI/UX Designer</h4>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority...
                      </p>
                    </li>
                    <li>
                      <h4>UI/UX Designer</h4>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority...
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ApplicationProcess />

      <section className="weHiring weHiring--bgPurple">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="weHiring__left">
                <img
                  src={images["we-are-hiring2.svg"]}
                  alt="We are hiring"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-md-6 sectionContent">
              <div className="weHiring__right">
                <h2>It’s Not Just A Job, It’s A Wonderful Opportunity!</h2>
                <p>
                  Explore our exciting job opportunities and fill the one
                  <br /> that fits your passion.
                </p>
                <Link
                  to="/job-detail"
                  className="commonButton commonButton--yellow m-auto"
                >
                  Explore More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <Blog />
      </div>
      <Footer/>
    </div>
  );
}
export default Jobs;
