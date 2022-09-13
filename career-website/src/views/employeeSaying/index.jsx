import React from "react";
import Blog from "../../components/blogs";
import { Link } from 'react-router-dom';
import Header from "../../components/header";
import Footer from "../../components/footer";
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../../assets/images", false, /\.(png|jpe?g|svg)$/)
);
const employeData = [
  {
    name: "Amit kumar",
    designation: "Sr. Software Tester",
    content:
      "Working with Softuvo has been a wonderful experience. The entire team including team leads are always ready to help. I had been entrusted with opportunities and responsibilities early on, helping me accelerate my growth both on the personal and professional front!",
    src: images["testi-amit.svg"],
    alt: "Amit Kumar",
  },
  {
    name: "Neha Guleria",
    designation: "Sr. UI/UX Designer",
    content:
      "Softuvo Solutions is a great place to grow! It has provided me with the platform to learn and explore new technologies. We have wonderful upskilling sessions that guide us through our career path and help us in excelling at work! Joining Softuvo has definitely turned out to be a great decision for me!",
    src: images["testi-neha.svg"],
    alt: "Neha Guleria",
  },
  {
    name: "Rohit",
    designation: "Sr. Business Development Executive",
    content:
      "I am very glad to be a part of this wonderful family. Softuvo is a perfect place for finding the right opportunities, enthusiastic clients, and work-life balance. The managers, colleagues, and management people are always ready to help without a second thought.",
    src: images["testi-rohit.svg"],
    alt: "Rohit",
  },
  {
    name: "Sanjana",
    designation: "Software Developer",
    content:
      "It has been an amazing journey with Softuvo so far. I am glad to work in such a challenging and positive work environment where the focus is to solve problems through team cooperation and moving towards a common vision.",
    src: images["testi-sanjana.svg"],
    alt: "Sanjana",
  },
  {
    name: "Tandeep Sangra",
    designation: "Head- Marketing & Business Strategy",
    content:
      "Of all the many things that I appreciate about working at Softuvo is the culture that embraces flexibility, celebrates the difference of thought and approach. It’s been an awesome 3 years and I’m excitedly looking forward to the next 5!",
    src: images["testi-tandeep.svg"],
    alt: "Tandeep Sangra",
  },
  {
    name: "Pratyush",
    designation: "QA",
    content:
      "Softuvo is a company that values its employee’s work-life balance and promotes a holistic person-centered approach to motivate one’s best work. Apart from some amazing monetary perks and flexible work schedules, Softuvo hosts various activities like team-building, company outings, and annual events. I’m grateful to be a part of such a great workplace! ",
    src: images["testi-pratyush.svg"],
    alt: "Pratyush",
  },
  {
    name: "Itender",
    designation: "Sr. Business Developer",
    content:
      "It’s been about four years working at Softuvo and it has indeed been a very enriching experience for me. I have not only learned a lot over these years about my own domain but there has also been a lot of cross-functional learning which has helped in overall growth in my career. Overall Softuvo Solutions has been one of the best places to work. ",
    src: images["testi-itender.svg"],
    alt: "Itender",
  },
  {
    name: "Gamanjit Singh",
    designation: "Sr. Quality Analyst",
    content:
      "Softuvo solution is a growing IT consultant firm that will be an emerging company in next coming years. It's almost been 4 years working with Softuvo Solutions as a TEAM. Every single person is more supportive and concerned with employees and management gives chance to everyone to show his/her Technical skills.",
    src: images["gamanjit-employee.svg"],
    alt: "Gamanjit Singh",
  },
  {
    name: "Deepa",
    designation: "Software Engineer (Node JS)",
    content:
      "My experience working in Softuvo has been a very enriching and rewarding one! I have enjoyed working on a variety of interesting and exciting projects in collaboration with global teams. Moreover, the energy of this place is contagious and keeps me moving. I consider myself fortunate to be a part of Softuvo Solutions.",
    src: images["testi-deepa.svg"],
    alt: "Deepa",
  },
];

function Employeesaying() {
  return (
    <div>
      <Header/>
      <section className="banner banner--employeeSaying">
        <div className="banner__commonBanner">
          <div className="commonPY">
            <div className="container">
              <div className="row">
                <div className="col-md-5 alignCenter">
                  <div>
                    <h1>Employee Stories</h1>
                    <p>
                      What is it like to work at Softuvo? With our Employee
                      Stories, let’s explore the contributions made and the
                      journeys undertaken by our employees while working with
                      us!{" "}
                    </p>
                  </div>
                </div>
                <div className="col-md-7 text-end">
                  <img
                    src={images["employee-saying-banner.svg"]}
                    alt="Employee Saying Banner"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="employeeSaying">
        <div className="employeeSaying__inner commonPY">
          <div className="container-lg">
            <div className="row">
              {employeData.map((value) => {
                return (
                  <div className="col-sm-6 col-lg-4">
                    <div className="sayingBox">
                      <div className="sayingBox__content">
                        <p>{value.content} </p>
                      </div>
                      <div className="sayingBox__profile">
                        <img
                          src={value.src}
                          alt={value.alt}
                          className="img-fluid"
                        />
                        <div>
                          <h4>{value.name}</h4>
                          <p>{value.designation}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="row">
              <div className="col-md-12 text-center sectionContent">
                <Link
                  to="/employee-stories"
                  className="commonButton commonButton--black m-auto"
                >
                  View More
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Blog />
      </section>
      <Footer/>
    </div>
  );
}

export default Employeesaying;
