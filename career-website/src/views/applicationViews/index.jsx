import React from "react";
import { Link } from "react-router-dom";
import ApplicationImg from "../../assets/images/application-process-banner.svg";
import ApplicationviewImg from "../../assets/images/application-process.svg";
import AppSkill from "../../assets/images/apply-icon.svg";
import AppSkill1 from "../../assets/images/screening-icon.svg";
import AppSkill2 from "../../assets/images/assessment-icon.svg";
import AppSkill3 from "../../assets/images/interview-icon.svg";
import AppSkill4 from "../../assets/images/decision-icon.svg";
import Blog from "../../components/blogs";
import Header from "../../components/header";
import Footer from "../../components/footer";

function ApplicationViews() {
  return (
    <div>
      <Header />
      <section className="banner banner--applicationProcess">
        <div className="banner__commonBanner">
          <div className="commonPY">
            <div className="container">
              <div className="row">
                <div className="col-md-6 alignCenter">
                  <div>
                    <h1>How We Hire You</h1>
                    <p>
                      At Softuvo we aim to provide an inclusive and authentic
                      candidate experience. This is why we strive to create a
                      process that allows you to be your best - and to do that
                      you need to understand how our hiring process works! Be
                      ready to make your tips!
                    </p>
                  </div>
                </div>
                <div className="col-md-6  text-end">
                  <img
                    src={ApplicationImg}
                    alt="Application Process Banner"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="applicationProcessDetails commonPY">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="applicationProcessDetails__left">
                  <img
                    src={ApplicationviewImg}
                    alt="Application Process"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="applicationProcessDetails__right">
                  <h2>Application Process</h2>
                  <p>New Beginnings awaits a Bang On “Yes” from your side!</p>
                  <p>
                    Because we are on a mission to onboard some of the greatest
                    and brightest talents - who are team players, leaders, and
                    knows, how to set their priorities right! So if you want to
                    be a part of a company that is recognized by its colleagues,
                    clients, and community as an organization that draws
                    strength, opportunity, and growth, from the diversity of its
                    workplace, come join us and become a part of our “Softuvo
                    Family”!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="applicationProcess commonPY">
          <div className="container">
            <div className="row">
              <div className="col-md-12 sectionContent">
                <h2>
                  Let’s Go Through Our Application Process And Help You
                  <br /> Land To Your Dream Job!{" "}
                </h2>
              </div>
            </div>
          </div>
          <div className="applicationProcess__inner">
            <div className="applicationProcess__inner__header">
              <div className="container">
                <div className="applicationProcess__inner__header__flex">
                  <div className="applicationProcess__inner__header__num">
                    1
                  </div>
                  <h3>Apply</h3>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="applicationProcess__inner__des">
                <div className="applicationProcess__inner__des__leftIcon me-5">
                  <img src={AppSkill} alt="Apply Icon" />
                </div>
                <div className="applicationProcess__inner__des__right">
                  <p>
                    We primarily believe in fostering a culture that blooms on
                    the concept of growth ideology. It means having a firm
                    belief that everyone can grow and develop individually and
                    that potential can be nurtured with the right mentorship,
                    not pre-determined, to harbor a mindset that focuses on
                    growth and development. Proceeding ahead with this ideology
                    requires each one of us to keep the fire of constant
                    learning ignited. We need to give in to uncertainty, take
                    risks, make mistakes, recognize failures, and pave our way
                    towards mastery.
                  </p>
                </div>
              </div>
            </div>
            <div className="applicationProcess__inner__header">
              <div className="container">
                <div className="applicationProcess__inner__header__flex applicationProcess__inner__header__flex--odd">
                  <div className="applicationProcess__inner__header__num">
                    2
                  </div>
                  <h3>Screening</h3>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="applicationProcess__inner__des">
                <div className="applicationProcess__inner__des__right">
                  <p>
                    Your resume will be reviewed by our experienced
                    professionals. And if you meet the requirements of the
                    position for which you have applied, a member of our HR
                    Department will contact you to schedule a good time to
                    discuss your experience, background, career interests, and
                    details of the position are interested in.
                  </p>
                </div>
                <div className="applicationProcess__inner__des__leftIcon ms-5">
                  <img src={AppSkill1} alt="Screening Icon" />
                </div>
              </div>
            </div>
            <div className="applicationProcess__inner__header">
              <div className="container">
                <div className="applicationProcess__inner__header__flex">
                  <div className="applicationProcess__inner__header__num">
                    3
                  </div>
                  <h3>Assessment</h3>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="applicationProcess__inner__des">
                <div className="applicationProcess__inner__des__leftIcon me-5">
                  <img src={AppSkill2} alt="Assessment Icon" />
                </div>
                <div className="applicationProcess__inner__des__right">
                  <p>
                    After a little chit-chat session wherein we both get to know
                    each other, you might be asked to complete an easy-to-do
                    assignment, which varies depending on the role you have
                    applied. Don't fret! They are peculiarly designed keeping
                    your skill sets in mind and are super engaging, fair, and of
                    course relevant to your job role. We tend to use these
                    assessment methods to measure your skills and abilities that
                    may submerge during the interview. So this is the most
                    crucial stage for you. You have this fairest chance to truly
                    showcase who you really are, your abilities, and what can
                    you bring to the table with your exceptional set of skills.
                    So be prepared, this is your chance to outright everyone
                    else!
                  </p>
                </div>
              </div>
            </div>
            <div className="applicationProcess__inner__header">
              <div className="container">
                <div className="applicationProcess__inner__header__flex applicationProcess__inner__header__flex--odd">
                  <div className="applicationProcess__inner__header__num">
                    4
                  </div>
                  <h3>Interview</h3>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="applicationProcess__inner__des">
                <div className="applicationProcess__inner__des__right">
                  <p>
                    Get ready to shine as bright as you can!! Your
                    qualifications have matched our requirements and we have
                    found your resume quite impressive. So now it's time for us
                    to meet and have some Big Talk with a cup of coffee over
                    your position and basically what you can bring to the role.
                    Through our conversation, we want to learn a little bit of
                    everything about you, like how well can you fit in the team,
                    whether you identify with our goals and values and where do
                    you see yourself professionally, now, and in the near
                    future. In a jist, there's a lot for us to talk about, so
                    make sure you grab this chance and bring forward your
                    questions for us as well.
                  </p>
                </div>
                <div className="applicationProcess__inner__des__leftIcon ms-5">
                  <img src={AppSkill3} alt="Interview Icon" />
                </div>
              </div>
            </div>
            <div className="applicationProcess__inner__header">
              <div className="container">
                <div className="applicationProcess__inner__header__flex">
                  <div className="applicationProcess__inner__header__num">
                    5
                  </div>
                  <h3>The Decision</h3>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="applicationProcess__inner__des">
                <div className="applicationProcess__inner__des__leftIcon me-5">
                  <img src={AppSkill4} alt="Decision Icon" />
                </div>
                <div className="applicationProcess__inner__des__right">
                  <p>
                    Well, the wait will not be that long! After your final
                    interview, we will get in touch to let you know the status
                    of your application. If you are successful with it we'll
                    send you the appropriate documentation, to begin, your
                    onboarding process with us! After hopping in, you'll start
                    your journey as a "Softuvian" and rule the tech world with
                    us! If you’d like to hear feedback following your interview,
                    simply ask us. We’ll be more than happy to help you!!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <Link
                  to="/job-detail"
                  className="btn applicationProcess__button"
                >
                  Explore Your Job Opportunities
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="exploreBenefits exploreBenefits--bgGreen">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="sectionContent">
                  <h2>
                    Explore The Benefits Of Starting Your
                    <br /> Career At Softuvo
                  </h2>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="exploreBenefits__inner exploreBenefits__inner--bgLightGreen">
                    <div className="exploreBenefits__inner__whiteStarBig">
                      {/* <img src="images/white-star-lg.svg" alt="White Star Large" className="img-fluid" /> */}
                    </div>
                    <div className="exploreBenefits__inner__grayStar">
                      {/* <img src="images/gray-star.svg" alt="Gray Star" className="img-fluid" /> */}
                    </div>
                    <div className="exploreBenefits__inner__whiteStarSmall">
                      {/* <img src="images/white-star-sm.svg" alt="White Star Small" className="img-fluid" /> */}
                    </div>
                    <h4>Health and Wellness</h4>
                    <p>
                      We at Softuvo make sure that our team members are mentally
                      and physically fit at all times. We provide them with
                      proper health insurance benefits, so that finances do not
                      pose a problem at such difficult times!{" "}
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="exploreBenefits__inner exploreBenefits__inner--bgLightGreen">
                    <div className="exploreBenefits__inner__whiteStarBig">
                      {/* <img src="images/white-star-lg.svg" alt="White Star Large" className="img-fluid" /> */}
                    </div>
                    <div className="exploreBenefits__inner__grayStar">
                      {/* <img src="images/gray-star.svg" alt="Gray Star" className="img-fluid" /> */}
                    </div>
                    <div className="exploreBenefits__inner__whiteStarSmall">
                      {/* <img src="images/white-star-sm.svg" alt="White Star Small" className="img-fluid" /> */}
                    </div>
                    <h4>Equal Opportunities</h4>
                    <p>
                      We strive to create a culture in which all employees are
                      treated equally irrespective of their gender, titles, or
                      seniority. Hence, we appreciate the efforts put in by all
                      employees and keep encouraging them to give their best.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="exploreBenefits__inner exploreBenefits__inner--bgLightGreen">
                    <div className="exploreBenefits__inner__whiteStarBig">
                      {/* <img src="images/white-star-lg.svg" alt="White Star Large" className="img-fluid" /> */}
                    </div>
                    <div className="exploreBenefits__inner__grayStar">
                      {/* <img src="images/gray-star.svg" alt="Gray Star" className="img-fluid" /> */}
                    </div>
                    <div className="exploreBenefits__inner__whiteStarSmall">
                      {/* <img src="images/white-star-sm.svg" alt="White Star Small" className="img-fluid" /> */}
                    </div>
                    <h4>Upskill Programs</h4>
                    <p>
                      Learning and Development are two core components of
                      Softuvo. This is why we believe in investing in paid
                      courses and holding training programs so that you continue
                      to climb up the professional ladder.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="exploreBenefits__inner exploreBenefits__inner--bgLightGreen">
                    <div className="exploreBenefits__inner__whiteStarBig">
                      {/* <img src="images/white-star-lg.svg" alt="White Star Large" className="img-fluid" /> */}
                    </div>
                    <div className="exploreBenefits__inner__grayStar">
                      {/* <img src="images/gray-star.svg" alt="Gray Star" className="img-fluid" /> */}
                    </div>
                    <div className="exploreBenefits__inner__whiteStarSmall">
                      {/* <img src="images/white-star-sm.svg" alt="White Star Small" className="img-fluid" /> */}
                    </div>
                    <h4>Paid Corporate Retreats</h4>
                    <p>
                      Who doesn’t like to take a few short breaks after working
                      every day from 9 to 6? Well, at Softuvo we hold
                      get-togethers twice every year at amazing locations so
                      that all you do is have fun!
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 text-center sectionContent">
                  <Link
                    to="/why-join-softuvo"
                    className="commonButton commonButton--black m-auto"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div>
          <Blog />
        </div>
      </section>
      <Footer />
    </div>
  );
}
export default ApplicationViews;
