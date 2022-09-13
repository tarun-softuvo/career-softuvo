import React from "react";
import { Link } from "react-router-dom";
import Blog from "../../components/blogs";
import images from "../../data/imageUpload";
import Header from "../../components/header";
import Footer from "../../components/footer";
function LifePage() {
  console.log("LifePage");
  return (
    <div>
      <Header/>
    <section className="banner banner--lifeAtSoftuvo">
      <div className="banner__commonBanner">
        <div className="commonPY">
          <div className="container">
            <div className="row">
              <div className="col-md-6 alignCenter">
                <div>
                  <h1>Life @ Softuvo</h1>
                  <p>
                    Celebrations, functions, events, memories...
                    <br />
                    Everything Happy, that defines the soul of Softuvo!
                  </p>
                </div>
              </div>
              <div className="col-md-6  text-end">
                <img
                  src={images["life-at-softuvo-banner.svg"]}
                  alt="Life at Softuvo Banner"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="whatSoftuviansDo commonPY">
        <div className="container">
          <div className="row">
            <div className="col-md-12 sectionContent">
              <h2>#WeLoveWhereWeWork</h2>
              <p>It’s Nothing Short Of A Party Working At Softuvo!!</p>
              <div className="whatSoftuviansDo__video">
                <div
                  className="whatSoftuviansDo__video__playIcon"
                  data-bs-toggle="modal"
                  data-bs-target="#lifeAtSoftuvoVideo"
                >
                  <img
                    src={images["play-icon.svg"]}
                    alt="Play Icon"
                    className="img-fluid"
                  />
                </div>
                <img
                  src={images["what-softuvians-do-video.svg"]}
                  alt="What Softuvions do"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lifeSoftuvo commonPY">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>Life At Softuvo!!</h2>
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
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
        </div>
      </section>
      <div>
        <Blog />
      </div>
    </section>
    <Footer/>
    </div>
  );
}
export default LifePage;
