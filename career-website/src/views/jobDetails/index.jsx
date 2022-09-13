import React from "react";
import { Link } from "react-router-dom";
import JobDetailImg from "../../assets/images/jobdetail-banner.svg";
import Blog from "../../components/blogs";
import images from "../../data/imageUpload";
import Header from "../../components/header";
import Footer from "../../components/footer";
import GoToTop from "../../components/scrollToTop";

const data = [
  {
    class: "jobDetail",
    title: "Mobile App Developers",
    content1:
      "If you have a thing for mobile apps, then why not program the best of them with us!! Our mobile app developers have a proven record of developing high-impact, and result-driven mobile apps for clients all across the globe. Being a top mobile app development company, Softuvo is renowned for delivering professional Android app development, iOS app development, and cross-platform app development services to build robust applications using the latest technology stack so that clients that partner with us are catered with solutions that drive their business goals the best!",
    content2:
      "So if you think you have the right tech skills, and background with a major in Computer Science, send in your resumes today!",
  },
  {
    class: "jobDetail jobDetail--bgPink",
    title: "Web Developers",
    content1:
      "Are you a certified developer and hold expertise in working with the latest web technologies? If it is a yes, Softuvo is the right place to enhance your expert skills. Being the leading web development company, our developers are trained to deliver custom web solutions covering a broad spectrum of frameworks, including, Angular, Vue.JS, Django, Laravel, PHP, Ruby On Rails, etc. for creating a strong web presence for our clients projects.",
    content2:
      "So if you share the same passion for creating revenue-driving websites, web apps, or progressive web apps, just hit us with your resumes, and we’ll make sure the most worthy of the lot gets a chance to work with our top website developers!",
  },
  {
    class: "jobDetail jobDetail--bgGreen",
    title: "Frontend Developers",
    content1:
      "Softuvo houses leading front-end developers that adhere to agile methodologies and frameworks like React, Angular, Vue JS, etc, to create a digital product that is robust, interactive, scalable, and most importantly user friendly. It is these developers who determine where to place images, what the navigation should be like, and how to present the site to the end-users. All in all, they are the creators of how well the website or the app will look and feel to a user! We are well known in the industry for making the best use of markup languages, scripts, designs, and frameworks, delivering the perfect environment for the users to interact.",
    content2:
      "Hop in and become a part of our Softuvo Family, if you possess experience or if you wish    to learn any of the above-stated technicalities. Your very zeal to be a part of it and    works towards achieving the skills involved in it is more than welcome.",
  },
  {
    class: "jobDetail jobDetail--bgPurple",
    title: "Backend Developers",
    content1:
      "Here's a call for all the coding ninjas! If you harbor the right tech skills to write codes that make a product hit in the market with absolutely edging functionalities, Softuvo is the right place for you! With extensive experience in diverse programming languages like PHP, Python, Node JS, ROR, etc. our qualified backend developers are skilled to build scalable, and high-performing back-end layers for tailored business needs. Our team of professional backend developers doesn't believe in shady coding. Instead, they put in all the eyes and sweat to research, design, implement and test to create products that meet our client's requirements and quality standards the best.",
    content2:
      "So if you have a background in Computer Science, Cloud Architecture, and hold experience in Development and the latest tech frameworks, just hit us with your resumes and we'll be more than happy to have you on board",
  },
  {
    class: "jobDetail jobDetail--bgSkyBlue",
    title: "UI/UX Developers",
    content1:
      "Softuvo holds a place among the top app and website development companies, therefore we ensure that any project completed at our end should have a smooth user journey, great usability, and intuitive design to make it stand out in the market. Hence we make it a point to hire resources that are skilled at designing apps and websites for our clients to help them get more engaged customers. Because it is the user experience and overall look and feel of a website or application that determines its success in the long run. With a unique blend of the latest technologies and innovative approaches, our expert UI/UX designers create responsive and adaptive designs with uniform cross-platform compatibility.",
    content2:
      "If you believe you have the creativity to create eye-catchy designs that have the power of impacting users' minds and increasing brand awareness, Softuvo can be your next abode! Any experience in Art/Design, Interaction Design, Information Architecture, Prototyping, Figma, Adobe, and Visual Design, is absolutely a match for this job role!!",
  },
  {
    class: "jobDetail jobDetail--bgLightGreen",
    title: "Quality Assurance (QA) And Testing Team",
    content1:
      "SQuality assurance and software testing form the core of our working mechanism. Softuvo is known to have testing experts whose exceptionally great skills and methodologies help in faster releases with uncompromised quality. Our QA experts perform various tests such as Functions, GUI, Usability, Security, Database testing, Cross-browser, Cross-platform, Accessibility, etc. for faster and bug-free delivery.",
    content2:
      "A background in computer science, engineering, or related field, with good knowledge of test management software, programming languages, and QA methodologies is preferred to be a part of our skilled QA team.",
  },
  {
    class: "jobDetail jobDetail--bgDarkPurple",
    title: "DevOps Engineers",
    content1:
      "At Softuvo we believe great ideas deserve great implementation. Therefore we ensure this by delivering stability, reliability, and cost-efficiency of DevOps Services to companies in the USA and all across the globe. Our team of DevOps engineers is skilled at bridging the gap between the core operating teams i.e., Development and Operations, by applying automated processes to deliver a feature-rich product into the market at a lower cost and timeframe. Our DevOps services incorporate - DevOps Consulting, Monitoring & Logging, DevOps Automation, Infrastructure Management, Continuous Integration and Deployment, Configuration Management, and Testing & Security.",
    content2:
      "If DevOps-as-a-Service is one of our core areas of expertise, don't hold yourself back, just hit the Open Jobs section to view that is there a good opportunity for you or not with us!",
  },
  {
    class: "jobDetail jobDetail--bgRed",
    title: "Digital Marketers",
    content1:
      "Are you passionate about leading businesses and products to great heights? Well, our digital marketing team can be your rocket to launch your career as well as your client's business. With analytical problem-solving skills, excellent Search Engine Optimization techniques, results targetted marketing campaigns, social media, and audience-oriented content writing we are a hype among our clients all over the world. So if you think, you have the zeal to make products or business start-ups a hit in the market and their competitors, be a part of the market launch pad today!",
    content2:
      "If you hold expertise in the fields of Business Marketing, Statistics, Economics, English Major, Mass Communication, and Computer Science, we welcome you to our team!",
  },
  {
    class: "jobDetail jobDetail--bgPurple",
    title: "Clients Success Team",
    content1:
      "Our clients share ideas and we specialize in bringing them to life! Therefore our client project managers are vested with the duty of co-creation between client requirements and our product programming team. Clients are always on the lookout for trusted technical experts to help them deploy, adopt, and get the value from the software and services initiated. This is why project managers at Softuvo ensure to work with our clients even post-sales to make sure their business goals are met with our products and services offered.",
    content2:
      "So, anybody who loves to interact with people, and can ensure they get the best possible solutions, this is the perfect career area for you! All you have to do is have expertise in Business Relations, Computer Science, and Communication.",
  },
  {
    class: "jobDetail jobDetail--bgDarkGreen",
    title: "Business Development Team",
    content1:
      "Do you believe you are a great problem solver? Well if you are, you can become a trusted client advisor by bringing them the best possible business solutions they need. By joining our business development or sales team, you can transform businesses with innovative tech solutions and build long-lasting connections with them. Because Softuvo is not just about delivering projects on time, it is also about building cordial relationships with its clients. So that they always have our hand to hold when needed!",
    content2:
      "To join our team, you need to be great at communicating, Business Relations, have the know-how of latest tech solutions in the IT industry, and passion to drive prospects into customers.",
  },
];

function JobDetails() {
  return (
    <div>
      <Header />

      <section className="banner banner--jobDetail">
        <div className="banner__commonBanner">
          <div className="commonPY">
            <div className="container">
              <div className="row">
                <div className="col-md-6 alignCenter">
                  <div>
                    <h1>
                      Welcome To A Career
                      <br /> That Inspires You Back
                    </h1>
                    <p>
                      From tech leaders, innovators, and exceptionally reliable
                      coders to market-rocket launchers, you’ll find them all at
                      Softuvo! So get going with the career path that matches
                      your interest and watch it love you back under our
                      Umbrella!!{" "}
                    </p>
                  </div>
                </div>
                <div className="col-md-6  text-end">
                  <img
                    src={JobDetailImg}
                    alt="Job Detail Banner"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {data.map((value) => {
          return (
            <section className={value.class}>
              <div className="container">
                <div className="row">
                  <div className="col-md-5">
                    <div className="jobDetail__inner__left">
                      <h2>
                        {value.title}
                        <br /> At Softuvo
                      </h2>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="jobDetail__inner__right">
                      <p>{value.content1}</p>
                      <p>{value.content2}</p>
                      <Link to="/job-search" className="btn btn-link">
                        View open jobs
                        <img
                          src={images["right-arrow4.svg"]}
                          alt="Right Arrow"
                          className="img-fluid"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
        <section class="haveLookSlider commonPY">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h2>
                  Have A Look At How Our Professional IT Experts Roll When
                  <br /> Jamming With Their Keyboard!!
                </h2>

                <div
                  id="carouselExampleControls"
                  class="carousel slide carousel-fade"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        src={images["slide01.png"]}
                        class="d-block w-100"
                        alt="Slide 01"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src={images["slide02.png"]}
                        class="d-block w-100"
                        alt="Slide 02"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src={images["slide03.png"]}
                        class="d-block w-100"
                        alt="Slide 03"
                      />
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="applicationProcessSection applicationProcessSection--bgBlue commonPY">
          <div class="container-lg">
            <div class="sectionContent text-center">
              <h2>Application Process</h2>
            </div>
            <div class="stepsOuter">
              <div class="stepsInner">
                <img src={images["apply-icon.svg"]} alt="Apply Form" />
                <h4>Apply</h4>
                <img
                  src={images["step-arrow.svg"]}
                  alt=""
                  class="stepsInner__steparrow"
                />
              </div>
              <div class="stepsInner">
                <img src={images["screening-icon.svg"]} alt="Screening" />
                <h4>Screening</h4>
                <img
                  src={images["step-arrow.svg"]}
                  alt=""
                  class="stepsInner__steparrow"
                />
              </div>
              <div class="stepsInner">
                <img src={images["assessment-icon.svg"]} alt="Assessment" />
                <h4>Online Assessment</h4>
                <img
                  src={images["step-arrow.svg"]}
                  alt=""
                  class="stepsInner__steparrow"
                />
              </div>
              <div class="stepsInner">
                <img src={images["interview-icon.svg"]} alt="Interview" />
                <h4>Interview</h4>
                <img
                  src={images["step-arrow.svg"]}
                  alt=""
                  class="stepsInner__steparrow"
                />
              </div>
              <div class="stepsInner">
                <img src={images["decision-icon.svg"]} alt="Decision" />
                <h4>Decision/Offer</h4>
              </div>
            </div>
            <div class="">
              <a
                href="application-process"
                class="commonButton commonButton--yellow mx-auto"
              >
                Learn More About Our Application Process
              </a>
            </div>
          </div>
        </section>
        <section class="glassdoorReviews commonPY">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h2>Glassdoor Reviews</h2>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4">
                <div class="glassdoorReviews__inner">
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
                <div class="glassdoorReviews__inner">
                  <h6>Recommend to a friend</h6>
                  <div class="progress white">
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
                <div class="glassdoorReviews__inner">
                  <h6>Approve of CEO</h6>
                  <div class="progress yellow">
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
                  View More Info On Glassdoor{" "}
                  <img
                    src={images["right-arrow.svg"]}
                    alt="Right Arrow"
                    class="img-fluid"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
        <div>
          <Blog />
        </div>
      </section>
      <Footer />
      <GoToTop />
    </div>
  );
}
export default JobDetails;
