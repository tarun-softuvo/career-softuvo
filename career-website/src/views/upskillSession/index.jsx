import React from "react";
import { Link } from "react-router-dom";
import Blog from "../../components/blogs";
import UpskillImg from "../../assets/images/upskill-banner.svg";
import SessionImg from "../../assets/images/skill-session.png";
import SkillVector1Img from "../../assets/images/skill-vector1.svg";
import SkillVector2Img from "../../assets/images/skill-vector2.svg";
import SkillVector3Img from "../../assets/images/skill-vector3.svg";
import AppSkill from "../../assets/images/apply-icon.svg";
import AppSkill1 from "../../assets/images/screening-icon.svg";
import AppSkill2 from "../../assets/images/assessment-icon.svg";
import AppSkill3 from "../../assets/images/interview-icon.svg";
import AppSkill4 from "../../assets/images/decision-icon.svg";
import images from "../../data/imageUpload";
import Header from "../../components/header";
import Footer from "../../components/footer";
const sessionData = [
  {
    src: images["session-augmented.jpg"],
    title: "Upskill Session on Augmented Reality!",
    content:
      "A great session on Augmented Reality was taken by Ramandeep Kaur, Software Engineer (Flutter). In this session, she elaborated the concept of Augmented Reality (AR), its history, similarities and differences with VR, challenges, and more.",
  },
  {
    src: images["session-buglife.jpg"],
    title: "Upskill Session On Bug Life Cycle!",
    content:
      "A brainstorming session was taken by Diksha Patiyal, Software Quality Analyst. In this session, she elaborated the whole life bug and ways to inspect bugs to ensure quality software delivery.",
  },
  {
    src: images["session-sales-funnel1.jpg"],
    title: "Upskill Session On Sales Funnel!",
    content:
      "A great session on Sales Funnel by Itender Singh, Business Development Manager. In this session, he elaborated the concept of a sales funnel to the sales and marketing team.",
  },
  {
    src: images["session-technical-seo1.jpg"],
    title: "Upskill Session On Technical SEO!",
    content:
      "A brainstorming session on Technical SEO was taken by Tandeep Sangra, Head - Marketing & Business Strategy. In this session, she elaborated how technical SEO helps in improving the technical aspects of the website and boosts rankings on search engines.",
  },
  {
    src: images["session-github.jpg"],
    title: "Upskill Session On Github!",
    content:
      "A brainstorming session on Github was taken by Satyandra Shakya, Sr. Software Engineer. In this session, he elaborated Github and its functionalities in detail to the team.",
  },
  {
    src: images["session-vscode.jpg"],
    title: "Upskill Session On VS Code Extension!",
    content:
      "A brainstorming session on VS Extension was taken by Jignesh Kotadiya, Python Developer. In this session, he elaborated VS Code Extension, and guided the team on different Python extensions for VS Code.",
  },
];

function UpskillSession() {
  return (
    <div>
      <Header />
      <section className="banner banner--upskill">
        <div className="banner__commonBanner">
          <div className="commonPY">
            <div className="container">
              <div className="row">
                <div className="col-md-5 alignCenter">
                  <div>
                    <h1>Upskill Sessions</h1>
                    <p>
                      What makes us better? Continuous Learning and Development!{" "}
                      <br />
                      So, hackathons, workshops, and knowledge management
                      sessions are an everyday thing for us!
                    </p>
                  </div>
                </div>
                <div className="col-md-7 text-end">
                  <img src={UpskillImg} alt="Upskill Banner" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="skillSession commonPY">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <img
                  src={SessionImg}
                  alt="Skill Session"
                  className="img-fluid"
                />
              </div>
              <div className="col-lg-6">
                <div className="skillSession__content">
                  <h3>
                    <i>
                      Are you somebody who dreams big? Yes?
                      <br />
                      We do too!
                    </i>
                  </h3>
                  <p>
                    Therefore at Softuvo we are committed to individual career
                    development and help you in curating personalised career
                    goals. As soon as you step into our premises, more than a
                    job, you get a career to develop and the freedom to be who
                    you wish to be. Hence Learning becomes an integral part of
                    our work culture. Having multiple Upskill Sessions and
                    Online Courses in the house, we enable you to further your
                    career and foster specific skills to develop and succeed in
                    life!{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="skillSteps commonPY">
          <div className="container">
            <div className>
              <div className="row skillSteps__stepRow alignCenter">
                <div className="col-lg-6">
                  <h3>
                    Develop The Right Tech Skills Under Our Weekly Sessions
                  </h3>
                  <p>
                    Develop The Right Tech Skills Under Our Weekly Sessions At
                    Softuvo, you get your hands on our library of online
                    learning courses that give you access to world-class
                    training programs, anytime, anywhere. Apart from these our
                    distinguishedly experienced staff members hold Upskill
                    Sessions every week imparting their knowledge to enhance
                    people's tech skills in distinct IT fields, so that you do
                    nothing less than excelling at your comfy-worky desks!
                  </p>
                </div>
                <div className="col-lg-6 text-center">
                  <img
                    src={SkillVector1Img}
                    alt="Skill Vector1"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="row skillSteps__stepRow alignCenter">
                <div className="col-lg-6 text-center">
                  <img
                    src={SkillVector2Img}
                    alt="Skill Vector2"
                    className="img-fluid"
                  />
                </div>
                <div className="col-lg-6">
                  <h3>Leaders That All Ears To You!</h3>
                  <p>
                    As part of our People-First policy and commitment to our
                    employee’s success, our team managers are equipped with the
                    best skills and resources to help you understand your
                    strengths, development needs, and key areas that require a
                    combined effort! Because if you have the zeal and ambition
                    to grow, your manager can help you build those key skills,
                    you definitely need to get there!
                  </p>
                </div>
              </div>
              <div className="row skillSteps__stepRow alignCenter">
                <div className="col-lg-6">
                  <h3>
                    Don’t Miss Your Opportunity For Professional And Personal
                    Development
                  </h3>
                  <p>
                    It is our employees that transform us into the industry
                    leaders that we are today and shape our tomorrow's future.
                    Your very desire to grow and take on new responsibilities is
                    something we extremely value and want to cultivate. So while
                    you are in the driver's seat of your own career, we make
                    sure to support your ambition through state-of-the-art
                    training that not only helps you climb up the success ladder
                    of your career but also your personal life.
                  </p>
                </div>
                <div className="col-lg-6 text-center">
                  <img
                    src={SkillVector3Img}
                    alt="Skill Vector3"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="upskillVideos commonPY">
          <div className="container">
            <div className="row">
              <div className="col-md-7 sectionContent">
                <h2>Upskills Session</h2>
                <p>
                  What makes us better? Continuous learning and Development!
                  <br />
                  So, hackathons, workshops, and knowledge managment sessions
                  are an everyday thing for us!
                </p>
              </div>
            </div>

            <div className="row">
              {sessionData.map((value) => {
                return (
                  <div className="col-md-4">
                    <div className="upskillVideos__sessionVideo">
                      <div class="upskillVideos__sessionVideo__play"></div>
                      <img
                        src={value.src}
                        alt="Upskill Session"
                        className="img-fluid"
                      />
                      <h5>{value.title}</h5>
                      <p>{value.content}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-sm-12">
            <Link
              to="/upskill-session-more"
              className="commonButton commonButton--black"
            >
              View more Sessions
            </Link>
          </div>
        </section>

        <section className="applicationProcessSection commonPY">
          <div className="container-lg">
            <div className="sectionContent text-center">
              <h2>Application Process</h2>
            </div>
            <div className="stepsOuter">
              <div className="stepsInner">
                <img src={AppSkill} alt="Apply Form" className="img-fluid" />
                <h4>Apply</h4>
                <img
                  src={images["step-arrow.svg"]}
                  alt=""
                  className="stepsInner__steparrow"
                />
              </div>
              <div className="stepsInner">
                <img src={AppSkill1} alt="Screening" />
                <h4>Screening</h4>
                <img
                  src={images["step-arrow.svg"]}
                  alt=""
                  className="stepsInner__steparrow"
                />
              </div>
              <div className="stepsInner">
                <img src={AppSkill2} alt="Assessment" />
                <h4>Online Assessment</h4>
                <img
                  src={images["step-arrow.svg"]}
                  alt=""
                  className="stepsInner__steparrow"
                />
              </div>
              <div className="stepsInner">
                <img src={AppSkill3} alt="Interview" />
                <h4>Interview</h4>
                <img
                  src={images["step-arrow.svg"]}
                  alt=""
                  className="stepsInner__steparrow"
                />
              </div>
              <div className="stepsInner">
                <img src={AppSkill4} alt="Decision" />
                <h4>Decision/Offer</h4>
              </div>
            </div>
            <div className>
              <Link
                to="/application-process"
                className="commonButton commonButton--yellow mx-auto"
              >
                Learn More About Our Application Process
              </Link>
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
export default UpskillSession;
