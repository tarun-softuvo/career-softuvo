import React from "react";
import Blog from "../../components/blogs";
import TeamImg from "../../assets/images/ourteam-banner.svg";
import Header from "../../components/header";
import Footer from "../../components/footer";
function Team() {
  const data = [
    {
      url: "https://career.softuvo.click/images/meenu-gupta1.png",
      full_name: "Meenu Gupta",
      designation: "HR Head",
    },
    {
      url: "https://career.softuvo.click/images/amit-saini1.png",
      full_name: "Amit Saini",
      designation: "HR Manager",
    },
    {
      url: "https://career.softuvo.click/images/navkiran1.png",
      full_name: "Navkiran",
      designation: "Marketing Head",
    },
    {
      url: "https://career.softuvo.click/images/akanksha.png",
      full_name: "Akanksha",
      designation: "HR Executive",
    },
    {
      url: "https://career.softuvo.click/images/tandeep.png",
      full_name: "Tandeep Sangra",
      designation: "Marketing Head",
    },
    {
      url: "https://career.softuvo.click/images/anita-mehra.png",
      full_name: "Anita Mehra",
      designation: "Project Manager",
    },
    {
      url: "https://career.softuvo.click/images/neha.png",
      full_name: "Neha Guleria",
      designation: "Sr. UI/UX Designer",
    },
    {
      url: "https://career.softuvo.click/images/navdeep.png",
      full_name: "Navdeep Singh",
      designation: "Team Lead (UI Developer)",
    },
    {
      url: "https://career.softuvo.click/images/Jigs.jpeg",
      full_name: "Jignesh",
      designation: "Software Engineer/Developer (Python)",
    },
    {
      url: "https://career.softuvo.click/images/amit.png",
      full_name: "Amit Kumar",
      designation: "Sr. Software Tester",
    },
  ];
  return (
    <div>
      <Header />
      <section className="banner banner--ourTeam">
        <div className="banner__commonBanner">
          <div className="commonPY">
            <div className="container">
              <div className="row">
                <div className="col-md-5 alignCenter">
                  <div>
                    <h1>Our Team</h1>
                    <p>
                      As a team, we grow, we lead, we innovate! As colleagues,
                      we support, we challenge and we inspire one another every
                      day! Get a chance to know the people behind the soaring
                      success of Softuvo!
                    </p>
                  </div>
                </div>
                <div className="col-md-7 text-end">
                  <img src={TeamImg} alt="team" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="ourteam">
          <div className="ourteam__inner commonPY">
            <div className="container">
              <div className="row">
                {data.map((row) => {
                  return (
                    <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3">
                      <div className="ourteamBox">
                        <div className="ourteamBox__profile">
                          <div className="employeeImg">
                            <img
                              src={row.url}
                              alt={row.full_name}
                              className="img-fluid"
                            />
                          </div>
                          <div className="employeeDetails">
                            <h4>{row.full_name}</h4>
                            <p>{row.designation}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
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
export default Team;
