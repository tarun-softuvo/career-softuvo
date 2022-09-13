import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header";
import Footer from "../../components/footer";
import JoinImg from "../../assets/images/home1.png";
import JoinImg2 from "../../assets/images/meenu-gupta.png";
import JoinImg3 from "../../assets/images/quote-top.svg";
import JoinImg4 from "../../assets/images/quote-bottom.svg";
import JoinImg5 from "../../assets/images/amit-saini.png";
import JoinImg6 from "../../assets/images/open-quote.svg";
import JoinImg7 from "../../assets/images/close-quote.svg";
import JoinImg8 from "../../assets/images/navkiran.png";
import JoinImg9 from "../../assets/images/open-quote.svg";
import JoinImg10 from "../../assets/images/close-quote.svg";
import JoinImg11 from "../../assets/images/white-star-lg.svg";
import JoinImg12 from "../../assets/images/gray-star.svg";
import JoinImg13 from "../../assets/images/white-star-sm.svg";
import JoinImg14 from "../../assets/images/Shanky Gupta-1.svg";
import JoinImg15 from "../../assets/images/Deepak Kumar-2.svg";
import JoinImg16 from "../../assets/images/we-believe.png";
import JoinImg17 from "../../assets/images/neha-employee.svg";
import JoinImg18 from "../../assets/images/tandeep-employee.svg";
import JoinImg19 from "../../assets/images/diksha-employee.svg";
import JoinImg20 from "../../assets/images/rohit-employee.svg";
import JoinImg21 from "../../assets/images/gamanjit-employee.svg";
import images from "../../data/imageUpload";
import Blog from "../../components/blogs";

const benefitsData = [
  {
    src: JoinImg11,
    src2: JoinImg12,
    src3: JoinImg13,
    heading: "Health and Wellness",
    description:
      "We at Softuvo make sure that our team members are mentally and physically fit at all times. We provide them with proper health insurance benefits, so that finances do not pose a problem at such difficult times!",
    class: "exploreBenefits__inner exploreBenefits__inner--bgGreen",
  },
  {
    src: JoinImg11,
    src2: JoinImg12,
    src3: JoinImg13,
    heading: "Equal Opportunities",
    description:
      "We strive to create a culture in which all employees are treated equally irrespective of their gender, titles, or seniority. Hence, we appreciate the efforts put in by all employees and keep encouraging them to give their best.",
    class: "exploreBenefits__inner exploreBenefits__inner--bgOrange",
  },
  {
    src: JoinImg11,
    src2: JoinImg12,
    src3: JoinImg13,
    heading: "Upskill Programs",
    description:
      "Learning and Development are two core components of Softuvo. This is why we believe in investing in paid courses and holding training programs so that you continue to climb up the professional ladder.",
    class: "exploreBenefits__inner exploreBenefits__inner--bgPurple",
  },
  {
    src: JoinImg11,
    src2: JoinImg12,
    src3: JoinImg13,
    heading: "Paid Corporate Retreats",
    description:
      "Who doesn’t like to take a few short breaks after working every day from 9 to 6? Well, at Softuvo we hold get-togethers twice every year at amazing locations so that all you do is have fun!",
    class: "exploreBenefits__inner exploreBenefits__inner--bgRed",
  },
];

const employyeExperienceData = [
  {
    src: images["employee-tandeep.svg"],
    alt: "Employee Tandeep",
    employeename: "Tandeep Sangra",
    joindate: "Joined Softuvo in 2019",
    title: "Let’s catch a glimpse of a few of them",
    content:
      "It’s been more than 2 years, I have been associated with thecompany. My tenure here has been so good till now and helped me in enhancing my knowledge in my domain as well as other domains.",
    srcfull: images["testimonial-img-tandeep.png"],
  },
  {
    src: images["testi-amit.svg"],
    alt: "Employee Amit",
    employeename: "Amit Kumar",
    joindate: "Joined Softuvo in 2017",
    title: "Let’s catch a glimpse of a few of them",
    content:
      "Working with Softuvo has been a wonderful experience. The entire team including team leads are always ready to help. I had been entrusted with opportunities and responsibilities early on, helping me accelerate my growth both on the personal and professional front!",
    srcfull: images["testimonial-img-amit.png"],
  },
  {
    src: images["employee-neha.svg"],
    alt: "Employee Neha",
    employeename: "Neha Guleria",
    joindate: "Joined Softuvo in 2017",
    title: "Let’s catch a glimpse of a few of them",
    content:
      "Of all the many things that I appreciate about working at Softuvo is the culture that embraces flexibility, celebrates difference of thought and approach. It’s been an awesome 3 years and I’m excitedly looking forward to the next 5!",
    srcfull: images["testimonial-img-neha.png"],
  },
  {
    src: images["employee-itender.svg"],
    alt: "Employee Itender",
    employeename: "Itender Minhas",
    joindate: "Joined Softuvo in 2018",
    title: "Let’s catch a glimpse of a few of them",
    content:
      "It’s been about four years working at Softuvo and it has indeed been a very enriching experience for me. I have not only learned a lot over these years about my own domain but there has also been a lot of cross-functional learning which has helped in overall growth in my career.",
    srcfull: images["testimonial-img-itender.png"],
  },
  {
    src: images["employee-gaman.svg"],
    alt: "Employee Gaman",
    employeename: "Gamanjit Singh",
    joindate: "Joined Softuvo in 2017",
    title: "Let’s catch a glimpse of a few of them",
    content:
      "Softuvo solution is a growing IT consultant firm that will be an emerging company in next coming years. It's almost been 4 years working with Softuvo Solutions as a TEAM. Every single person is more supportive and concerned with employees and management gives chance to everyone to show his/her Technical skills.",
    srcfull: images["testimonial-img-gaman.png"],
  },
];

function Home() {
  return (
    <div>
      <Header />
      <section className="banner homeBanner">
        <div className="banner__home">
          <div className="banner__overlay commonPY">
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <div>
                    <h1>
                      We Put <span>People First, Work Inspired</span> By Them
                      Follows!!
                    </h1>
                    <p>
                      At Softuvo, our purpose is to “value people”. Be it our
                      employees or our clients, we strive to create an
                      atmosphere that empowers and equips them, to bring about
                      their most inspired work!
                    </p>
                    <p>
                      So, if you are interested in becoming a part of a culture
                      that breeds a sense of belonging and innovation, We
                      Welcome You On Our Team!
                    </p>
                    <div className="banner__buttons">
                      <Link
                        to="job-detail"
                        className="commonButton commonButton--yellow commonButton--banner"
                      >
                        Jobs
                      </Link>
                      <Link
                        to="why-join-softuvo"
                        className="commonButton commonButton--white-bordered commonButton--banner"
                      >
                        Join Us Today!
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bgPurple commonPY">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="section__image">
                <img src={JoinImg} className="img-fluid m-auto" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="sectionContent">
                <h2>Why Softuvo Is A “Home” Away From Home For You?</h2>
                <p>
                  Working at Softuvo goes way beyond, than just having a job to
                  make ends meet.
                  <b>
                    We believe that our people are the heart of the company and
                    the key to future success, which is why we aim to foster a
                    culture, that values its “people first”,
                  </b>
                  and gives them the flexibility to nurture their ideas and
                  innovate, to remain ahead of the industry curve. <br />
                  <i>
                    Hence, you are not a team member joining in, you’re a Buddy
                    to us!
                  </i>
                </p>
                <Link
                  to="why-join-softuvo"
                  className="commonButton commonButton--yellow"
                >
                  Know More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hrDepartment">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="sectionContent">
                <h2>Bring On Your Passion</h2>
                <p>
                  Meet The HR. Department a.k.a the Department With A Personnel
                  Touch!
                </p>
              </div>
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="hrDepartment__left">
                <img src={JoinImg2} alt="Meenu Gupta" />
                <div className="hrDepartment__left__nameRole">
                  <p>
                    Meenu Gupta
                    <br />
                    <span>Head HR</span>
                  </p>
                </div>
                <div className="hrDepartment__left__quote">
                  <img src={JoinImg3} className="mb-2 img-fluid" />
                  <p>
                    The secret to attracting and holding onto the best talent
                    isn’t about the perks—it’s about relationships and that is
                    how we have made the foundation of a great culture. The fact
                    SOFTUVO gets glowing is the understanding among Management
                    and Employees, who do really well to support each other's
                    goal.
                    <br />
                    Every company says it values employees. Here at Softuvo,
                    they don't say it; they show it.
                  </p>
                  <img src={JoinImg4} className="float-end img-fluid" />
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
              <div className="sectionContent">
                <h3>Our Talent Spotters Are Ready To Shape Your Future!</h3>
              </div>
              <div className="hrDepartment__right hrDepartment__right--borderBottom">
                <div className="hrDepartment__right__inner__hrImg">
                  <div className="rounded-image">
                    <img src={JoinImg5} className="img-fluid" />
                  </div>
                  <p>
                    Amit Saini
                    <br />
                    <span>HR Manager</span>
                  </p>
                </div>
                <div className="hrDepartment__right__inner__hrQuote">
                  <img src={JoinImg6} className="img-fluid" />
                  <p>
                    Softuvo recognizes that for a better work culture one needs
                    to cultivate a bond with their resources, that is why we
                    consider our team members as our family!! We keep on
                    challenging and improvising ourselves in order to meet their
                    expectations.
                  </p>
                  <img src={JoinImg7} className="img-fluid float-end" />
                </div>
              </div>

              <div className="hrDepartment__right">
                <div className="hrDepartment__right__inner__hrImg">
                  <div className="rounded-image">
                    <img src={JoinImg8} className="img-fluid" />
                  </div>
                  <p>
                    Navkiran Kaur
                    <br />
                    <span>HR Manager</span>
                  </p>
                </div>
                <div className="hrDepartment__right__inner__hrQuote">
                  <img src={JoinImg9} className="img-fluid" />
                  <p>
                    The best part about Softuvo is "its vision to invest in its
                    People", The learning environment they provide to all the
                    employees, makes it stand out.
                  </p>
                  <img src={JoinImg10} className="img-fluid float-end" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="exploreBenefits">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="sectionContent">
                <h2>Explore The Benefits Of Starting Your Career At Softuvo</h2>
                <p>Because Your Well Being Is Our Priority!</p>
              </div>
            </div>

            {benefitsData.map((value) => {
              return (
                <div className="col-lg-3 col-md-6">
                  <div className={value.class}>
                    <div className="exploreBenefits__inner__whiteStarBig">
                      <img
                        src={value.src}
                        alt="White Star Large"
                        className="img-fluid"
                      />
                    </div>
                    <div className="exploreBenefits__inner__grayStar">
                      <img src={value.src2} alt="Gray Star" class="img-fluid" />
                    </div>
                    <div className="exploreBenefits__inner__whiteStarSmall">
                      <img
                        src={value.src3}
                        alt="White Star Small"
                        className="img-fluid"
                      />
                    </div>

                    <h4>{value.heading}</h4>
                    <p>{value.description}</p>
                  </div>
                </div>
              );
            })}

            <div className="row">
              <div className="col-md-12 text-center sectionContent">
                <Link
                  to="why-join-softuvo"
                  className="commonButton commonButton--black m-auto"
                >
                  Know More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="weBelieve">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 sectionContent">
              <div className="weBelieve__left">
                <h2>We Believe In Building Possibilities For You!</h2>
                <p>
                  Softuvo sights on emerging and staying as the primary source
                  of technology that everyone can rely on.
                  <strong>
                    Our aim is to stand as a symbol of quality, reliability, and
                    professionalism in the IT sector by enabling our clients to
                    achieve their desired objectives by developing innovative
                    and sustainable technological solutions.
                  </strong>
                  And to achieve this goal one needs to have resources that
                  swear by three golden principles - Teamwork, Hardwork, and
                  Consistency. So, choose your career with us, and let’s shape a
                  better future, together!
                </p>
                <div className="weBelieve__left__signatures">
                  <img
                    src={JoinImg14}
                    alt="Shanky Gupta Signature"
                    className="img-fluid"
                  />
                  <img
                    src={JoinImg15}
                    alt="Deepak Kumar Signature"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="weBelieve__right text-center">
                <img src={JoinImg16} alt="We Believe" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="employeeStoriesHome">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 sectionContent">
              <div className="employeeStoriesHome__left">
                <h2>Employee Stories</h2>
                <p>
                  Get a feel for what working at Softuvo is really like and meet
                  the bright talents behind our soaring success!
                </p>

                <div className="employeeStoriesHome__left__video">
                  <div className="employeeStoriesHome__left__video__playIcon"></div>
                  <img
                    src={JoinImg17}
                    alt="Neha Guleria"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="employeeStoriesHome__right">
                <div className="row">
                  <div className="col-md-6">
                    <div className="employeeStoriesHome__right__inner">
                      <img
                        src={JoinImg18}
                        alt="Tandeep Sangra"
                        className="img-fluid"
                      />
                      <h4>Tandeep Sangra</h4>
                      <h6>
                        Head Marketing & Business
                        <br />
                        Strategy
                      </h6>
                      <p>
                        Of all the many things that I appreciate about working
                        at Softuvo is the culture that embraces flexibility,
                        celebrates the difference of thought and approach. It’s
                        been an awesome 3 years and I’m excitedly looking
                        forward to the next 5!
                      </p>
                    </div>

                    <div className="employeeStoriesHome__right__inner">
                      <img
                        src={JoinImg19}
                        alt="Diksha Suri"
                        className="img-fluid"
                      />
                      <h4>Diksha Suri</h4>
                      <h6>Sr. Content Writer</h6>
                      <p>
                        Working with Softuvo has been an overwhelming
                        experience. The company fosters a work-life balance and
                        enormous work opportunities. Glad to be part of the
                        Softuvo family!
                      </p>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="employeeStoriesHome__right__inner employeeStoriesHome__right__inner--marginTop">
                      <img src={JoinImg20} alt="Rohit" className="img-fluid" />
                      <h4>Rohit</h4>
                      <h6>
                        Sr. Business Development <br />
                        Executive
                      </h6>
                      <p>
                        I am very glad to be a part of this wonderful family.
                        Softuvo is a perfect place for finding the right
                        opportunities, enthusiastic clients, and work-life
                        balance.
                      </p>
                    </div>
                    <div className="employeeStoriesHome__right__inner">
                      <img
                        src={JoinImg21}
                        alt="Gamanjit Singh"
                        className="img-fluid"
                      />
                      <h4>Gamanjit Singh</h4>
                      <h6>Sr. Quality Analyst</h6>
                      <p>
                        Softuvo solution is a growing IT consultant firm that
                        will be an emerging company in next coming years. It's
                        almost been 4 years working with Softuvo Solutions as a
                        TEAM.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 text-center sectionContent">
              <Link
                to="employee-saying"
                className="commonButton commonButton--yellow m-auto"
              >
                View All Stories
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="weHiring">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="weHiring__left">
                <img
                  src={images["we-are-hiring.svg"]}
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
                  <br />
                  that fits your passion.
                </p>
                <Link
                  to="job-detail"
                  className="commonButton commonButton--yellow m-auto"
                >
                  Explore More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lifeSoftuvo commonPY">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>Have A Sneak Peek Into The Life At Softuvo!!</h2>

              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="all-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#all"
                    type="button"
                    role="tab"
                    aria-controls="all"
                    aria-selected="true"
                  >
                    All
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="annualParty-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#annualParty"
                    type="button"
                    role="tab"
                    aria-controls="annualParty"
                    aria-selected="false"
                  >
                    Annual Party
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="birthdayCelebrations-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#birthdayCelebrations"
                    type="button"
                    role="tab"
                    aria-controls="birthdayCelebrations"
                    aria-selected="false"
                  >
                    Birthday Celebrations
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="funActivities-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#funActivities"
                    type="button"
                    role="tab"
                    aria-controls="funActivities"
                    aria-selected="false"
                  >
                    Fun Activities
                  </button>
                </li>
              </ul>
              <div className="tab-content mt-5" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="all"
                  role="tabpanel"
                  aria-labelledby="all-tab"
                >
                  <img
                    src={images["life-at-softuvo.png"]}
                    alt="Life at Softuvo"
                    className="img-fluid"
                  />
                </div>
                <div
                  className="tab-pane fade"
                  id="annualParty"
                  role="tabpanel"
                  aria-labelledby="annualParty-tab"
                >
                  <img
                    src={images["annual-party-collage.png"]}
                    alt="Annual Party"
                    className="img-fluid"
                  />
                </div>
                <div
                  className="tab-pane fade"
                  id="birthdayCelebrations"
                  role="tabpanel"
                  aria-labelledby="birthdayCelebrations-tab"
                >
                  <img
                    src={images["bday-celebrations-collage.png"]}
                    alt="Birthday Celebrations"
                    className="img-fluid"
                  />
                </div>
                <div
                  className="tab-pane fade"
                  id="funActivities"
                  role="tabpanel"
                  aria-labelledby="funActivities-tab"
                >
                  <img
                    src={images["fun-activities-collage.png"]}
                    alt="Fun Activities"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 text-center sectionContent">
              <Link
                to="life-at-softuvo"
                className="commonButton commonButton--yellow m-auto"
              >
                View More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="hearFromSoftuvoEmp commonPY">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4>
                Hear Our Employees Share Their Ecstatic
                <br />
                Experience, Working With Us!!
              </h4>
            </div>
          </div>

          {employyeExperienceData.map((value) => {
            return (
              <div id="sync2" className="owl-carousel">
                <div className="item">
                  <img src={value.src} alt={value.alt} className="img-fluid" />
                </div>
              </div>
            );
          })}
          {employyeExperienceData.map((value) => {
            return (
              <div id="sync1" className="owl-carousel">
                <div className="item">
                  <div className="hearFromSoftuvoEmp__left">
                    <img
                      src={images["quote-left.svg"]}
                      alt="Quote Left"
                      className="img-fluid"
                    />
                    <p>{value.content}</p>
                    <img
                      src={images["quote-right.svg"]}
                      alt="Quote Right"
                      className="img-fluid float-end"
                    />
                    <h6>
                      {value.employeename}
                      <br />
                      <span>{value.joindate}</span>
                    </h6>

                    <h5>
                      <a href="employee-saying">{value.title}</a>
                      <img
                        src={images["right-arrow3.svg"]}
                        alt="Right Arrow"
                        className="img-fluid"
                      />
                    </h5>
                  </div>
                  <div className="hearFromSoftuvoEmp__right">
                    <img
                      src={value.srcfull}
                      alt="Tandeep Sangra"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="glassdoorReviews commonPY">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>Glassdoor Reviews</h2>
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

                <div className="progress white">
                  <span className="progress-left">
                    <span className="progress-bar"></span>
                  </span>
                  <span className="progress-right">
                    <span className="progress-bar"></span>
                  </span>
                  <div className="progress-value">90%</div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="glassdoorReviews__inner">
                <h6>Approve of CEO</h6>

                <div className="progress yellow">
                  <span class="progress-left">
                    <span className="progress-bar"></span>
                  </span>
                  <span class="progress-right">
                    <span className="progress-bar"></span>
                  </span>
                  <div className="progress-value">91%</div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <a
                href="https://www.glassdoor.co.in/Overview/Working-at-Softuvo-Solutions-EI_IE1655590.11,28.htm"
                target="_blank"
                className="btn btn-link"
              >
                View More Info On Glassdoor
                <img
                  src={images["right-arrow.svg"]}
                  alt="Right Arrow"
                  className="img-fluid"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <Blog />
      <Footer />
    </div>
  );
}

export default Home;
