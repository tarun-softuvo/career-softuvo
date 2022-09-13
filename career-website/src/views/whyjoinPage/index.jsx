import React from "react";
import { Link } from "react-router-dom";
import Blog from "../../components/blogs";
import JoinImg from "../../assets/images/why-join-softuvo.svg";
import JoinImg1 from "../../assets/images/why-softuvo.png";
import JoinImg2 from "../../assets/images/white-star-lg.svg";
import JoinImg3 from "../../assets/images/gray-star.svg";
import images from "../../data/imageUpload";
import Header from "../../components/header";
import Footer from "../../components/footer";
const culture = [
  {
    title: "Health and Wellness",
    content:
      "We at Softuvo make sure that our team members are mentally and physically fit at all times. We provide them with proper health insurance benefits, so that finances do not pose a problem at such difficult times!",
  },
  {
    title: "Equal Opportunities",
    content:
      "We strive to create a culture in which all employees are treated equally irrespective of their gender, titles, or seniority. Hence, we appreciate the efforts put in by all employees and keep encouraging them to give their best.",
  },
  {
    title: "Upskill Programs",
    content:
      "Learning and Development are two core components of Softuvo. This is why we believe in investing in paid courses and holding training programs so that you continue to climb up the professional ladder.",
  },
  {
    title: "Paid Corporate Retreats",
    content:
      "Who doesn’t like to take a few short breaks after working every day from 9 to 6? Well, at Softuvo we hold get-togethers twice every year at amazing locations so that all you do, is have fun!",
  },
  {
    title: "5-Day Working",
    content:
      "We believe in fun and carefree weekends, so we follow a 5-days working policy for the employees. You can enjoy your workdays with us and give time to your family and friends on the weekends.",
  },
  {
    title: "Referral Bonus",
    content:
      "Help others and get paid! We offer referral bonuses to our employees for referring the right fit candidate. For this, we offer a special employee referral bonus of Rs. 7000.",
  },
  {
    title: "Rewards",
    content:
      "No work should go unrecognized and that’s why we have curated reward policies that appreciate the excellent efforts of employees. Rewards like - Employee of the Month or Quarter and Quarterly Rewards of Rs. 10,000 on exemplary performance are given to boost employee morale.",
  },
  {
    title: "Family Support",
    content:
      "Life is a roller coaster ride and we support our employees in their joys and sorrows. We offer paid maternity and paternity leave to welcome new additions to the family. We also offer bereavement leaves to support employees in their tough times.",
  },
  {
    title: "On-Time Salary",
    content:
      "At Softuvo, we make sure all our employees get salaries credited to their accounts right on time. No delays, no unnecessary deductions, just on-time salaries.",
  },
  {
    title: "Recreational Activities",
    content:
      "A little fun never hampers work! We host fun and entertainment activities on a fortnight basis where all employees join to have a fun time.",
  },
  {
    title: "Open-Communication",
    content:
      "We don’t believe in corporate politics. We foster an open line of communication where employees get the freedom to give opinions or suggestions or indulge in discussions to make a point.",
  },
  {
    title: "Flexible Timings",
    content:
      "Enjoy the perfect work-life balance with our flexible work timings. Of course, we follow the 9-6 work time rule, but we also offer flexible timings as and when needed by the employees. We also give Work from Home facility to employees in case of emergency.",
  },
  {
    title: "Celebrations",
    content:
      "There is never a dull moment at Softuvo. From Birthday celebrations to festival celebrations, we don’t miss any special occasions for celebrations. We also host Annual parties and Occasional parties to give employees a break from the regular work structure.",
  },
  {
    title: "Training",
    content:
      "We believe in nurturing skills. Our employees get a great advantage to learn and get trained by expert mentors. We have a supportive team and admirable work environment where you can learn and nurture your skills to create a better version of yourself.",
  },
  {
    title: "Leave Encashment",
    content:
      "What’s more exciting is our employees are entitled to leave encashment as well. The employee is eligible for the encashment of unutilized leaves (CL & SL as per the policies) at the end of each fiscal year.",
  },
  {
    title: "Get Paid Extra",
    content:
      "Working extra and want to get credited for the same? Employees at Softuvo hold the privilege to get paid if they spend extra hours at work. We value your time and appreciate your hard work always.",
  },
];
function JoinPage() {
  return (
    <div>
      <Header />
      <section className="banner banner--whyJoinSoftuvo">
        <div className="banner__commonBanner">
          <div className="commonPY">
            <div className="container">
              <div className="row">
                <div className="col-md-6 alignCenter">
                  <div>
                    <h1>What Makes Softuvo A Great Place To Work?</h1>
                    <p>
                      As we believe in a "people-first" approach, we stand for
                      the well-being of our people and make conscious efforts to
                      facilitate our work family with a favorable work
                      environment!
                    </p>
                  </div>
                </div>
                <div className="col-md-6  text-end">
                  <img src={JoinImg} alt="Logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="whySoftuvo">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="whySoftuvo__left">
                  <img src={JoinImg1} alt="join" />
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="whySoftuvo__right">
                  <h2>Why Softuvo Is A “Home” Away From Home For You?</h2>
                  <p>
                    Working at Softuvo goes way beyond, than just having a job
                    to make ends meet. We believe that our people are the heart
                    of the company and the key to future success, which is why
                    we aim to foster a culture, that values its “people first”,
                    and gives them the flexibility to nurture their ideas and
                    innovate, to remain ahead of the industry curve.
                  </p>
                  <p>
                    Hence, you are not a team member joining in, you’re a Buddy
                    to us!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="perksBenefits commonPY">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2>
                  Perks, Benefits, And Other Goodies That Are
                  <br /> A Part Of Softuvo’s Work Culture!
                </h2>
              </div>
            </div>
            <div className="row">
              {culture.map((value) => {
                return (
                  <div className="item col-md-3 col-sm-6">
                    <div className="perksBenefits__inner">
                      <div className="perksBenefits__inner__whiteStarBig">
                        <img src={JoinImg2} alt="star" />
                      </div>
                      <div className="perksBenefits__inner__grayStar">
                        <img src={JoinImg3} alt="star" />
                      </div>
                      <div className="perksBenefits__inner__whiteStarSmall">
                        <img src={JoinImg2} alt="star" />
                      </div>
                      <h4>{value.title}</h4>
                      <p>{value.content} </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="becomePart commonPY">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2>
                  So, Are You Ready To Become A<br /> Part Of The Softuvo
                  Family?
                </h2>
                <Link to="/contact-us" className="btn becomePart__button">
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="glassdoorReviews glassdoorReviews--softuvoRatings commonPY">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2>Softuvo Ratings On Glassdoor</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="glassdoorReviews__inner">
                  <h6>Overall Rating</h6>
                  <p>4.6</p>
                  <img
                    src={images["stars.svg"]}
                    className="img-fluid"
                    alt="Stars"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="glassdoorReviews__inner">
                  <h6>Recommend to a friend</h6>
                  <div className="progress progress-inner white">
                    <span className="progress-left">
                      <span className="progress-bar" />
                    </span>
                    <span className="progress-right">
                      <span className="progress-bar" />
                    </span>
                    <div className="progress-value">90%</div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="glassdoorReviews__inner">
                  <h6>Approve of CEO</h6>
                  <div className="progress progress-inner yellow">
                    <span className="progress-left">
                      <span className="progress-bar" />
                    </span>
                    <span className="progress-right">
                      <span className="progress-bar" />
                    </span>
                    <div className="progress-value">91%</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <Link
                  to="https://www.glassdoor.co.in/Overview/Working-at-Softuvo-Solutions-EI_IE1655590.11,28.htm"
                  target="_blank"
                  className="btn btn-link"
                >
                  View More Info On Glassdoor
                  <img
                    src={images["right-arrow.svg"]}
                    alt="Right Arrow"
                    className="img-fluid"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonials commonPY">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="testimonials__left">
                  <img
                    src={images["testimonial-img-tandeep.png"]}
                    alt="Testimonial User 01"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="testimonials__right">
                  <img
                    src={images["quote-left.svg"]}
                    alt="Quote Left"
                    className="img-fluid"
                  />
                  <p>
                    It’s been more than 2 years, I have been associated with the
                    company. My tenure here has been so good till now and helped
                    me in enhancing my knowledge in my domain as well as other
                    domains.
                  </p>
                  <img
                    src={images["quote-right.svg"]}
                    alt="Quote Right"
                    className="img-fluid float-end"
                  />
                  <h6>
                    Tandeep Sangra
                    <br />
                    <span>Joined Softuvo in 2019</span>
                  </h6>
                  <h5>
                    <Link to="/employee-saying">
                      Let’s catch a glimpse of a few of them
                    </Link>
                    <img
                      src={images["right-arrow3.svg"]}
                      alt="Right Arrow"
                      className="img-fluid"
                    />
                  </h5>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-center">
                <Link
                  to="/employee-saying"
                  className="btn testimonials__button"
                >
                  View All Testimonials
                </Link>
              </div>
            </div>
          </div>
        </section>
        <Blog />
      </section>
      <Footer />
    </div>
  );
}
export default JoinPage;
