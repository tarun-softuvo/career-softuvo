import React from "react";
import images from "../../data/imageUpload";
import Header from "../../components/header";
import Footer from "../../components/footer";
function UpskillsessionMore() {
  return (
    <div>
      <Header />
      <section class="banner banner--upskill">
        <div class="banner__commonBanner">
          <div class="commonPY">
            <div class="container">
              <div class="row">
                <div class="col-md-5 alignCenter">
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
                <div class="col-md-7 text-end">
                  <img
                    src={images["upskill-banner.svg"]}
                    alt="Upskill Banner"
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="upskillVideos commonPY">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-7">
              <form class="upskillVideos__searchForm">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search..."
                />
                <button class="btn upskillVideos__searchForm__button">
                  Search
                </button>
              </form>
            </div>
            <div class="col-lg-6 col-md-5">
              <select class="form-select" aria-label="Default select example">
                <option selected>Sort by: Popular</option>
                <option value="1">Popular</option>
                <option value="2">Newest</option>
              </select>
              <div class="upskillVideos__filter">
                <img
                  src={images["filter-icon.svg"]}
                  alt="Filter Icon"
                  class="img-fluid"
                />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-4">
              <div class="upskillVideos__sessionVideo">
                <img
                  src={images["session-augmented.jpg"]}
                  alt="Upskill Session"
                  class="img-fluid"
                />
                <h5>Upskill Session on Augmented Reality!</h5>
                <p>
                  A great session on Augmented Reality was taken by Ramandeep
                  Kaur, Software Engineer (Flutter). In this session, she
                  elaborated the concept of Augmented Reality (AR), its history,
                  similarities and differences with VR, challenges, and more.
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="upskillVideos__sessionVideo">
                <img
                  src={images["session-buglife.jpg"]}
                  alt="Upskill Session"
                  class="img-fluid"
                />
                <h5>Upskill Session On Bug Life Cycle!</h5>
                <p>
                  A brainstorming session was taken by Diksha Patiyal, Software
                  Quality Analyst. In this session, she elaborated the whole
                  life bug and ways to inspect bugs to ensure quality software
                  delivery.
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="upskillVideos__sessionVideo">
                <img
                  src={images["session-sales-funnel1.jpg"]}
                  alt="Upskill Session"
                  class="img-fluid"
                />
                <h5>Upskill Session On Sales Funnel!</h5>
                <p>
                  A great session on Sales Funnel by Itender Singh, Business
                  Development Manager. In this session, he elaborated the
                  concept of a sales funnel to the sales and marketing team.
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="upskillVideos__sessionVideo">
                <img
                  src={images["session-technical-seo1.jpg"]}
                  alt="Upskill Session"
                  class="img-fluid"
                />
                <h5>Upskill Session On Technical SEO!</h5>
                <p>
                  A brainstorming session on Technical SEO was taken by Tandeep
                  Sangra, Head - Marketing & Business Strategy. In this session,
                  she elaborated how technical SEO helps in improving the
                  technical aspects of the website and boosts rankings on search
                  engines.
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="upskillVideos__sessionVideo">
                <img
                  src={images["session-github.jpg"]}
                  alt="Upskill Session"
                  class="img-fluid"
                />
                <h5>Upskill Session On Github!</h5>
                <p>
                  A brainstorming session on Github was taken by Satyandra
                  Shakya, Sr. Software Engineer. In this session, he elaborated
                  Github and its functionalities in detail to the team.
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="upskillVideos__sessionVideo">
                <img
                  src={images["session-vscode.jpg"]}
                  alt="Upskill Session"
                  class="img-fluid"
                />
                <h5>Upskill Session On VS Code Extension!</h5>
                <p>
                  A brainstorming session on VS Extension was taken by Jignesh
                  Kotadiya, Python Developer. In this session, he elaborated VS
                  Code Extension, and guided the team on different Python
                  extensions for VS Code.
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="upskillVideos__sessionVideo">
                <img
                  src={images["session-logo-design.jpg"]}
                  alt="Upskill Session"
                  class="img-fluid"
                />
                <h5>Upskill Session On Do’s And Don’ts of Logo Design</h5>
                <p>
                  An intense session on Do’s and Don’ts of Logo Design was taken
                  by Neha Guleria, our Sr. UI/UX Designer. In this session, she
                  elaborated ways to make the perfect logo design by keeping in
                  mind the do’s and don’ts of the same.
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="upskillVideos__sessionVideo">
                <img
                  src={images["session-tailwind.jpg"]}
                  alt="Upskill Session"
                  class="img-fluid"
                />
                <h5>Upskill Session On Tailwind UI!</h5>
                <p>
                  A great session on Tailwind UI was taken by Shamsheer Singh,
                  our UI Developer. In this session he elaborated Tailwind UI
                  installation dependencies and discussed the queries relating
                  to the same.
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="upskillVideos__sessionVideo">
                <img
                  src={images["session-agile-methodlogy.jpg"]}
                  alt="Upskill Session"
                  class="img-fluid"
                />
                <h5>Upskill Session On Agile Methodology!</h5>
                <p>
                  A great session on Agile Methodology was taken by Amit Kumar,
                  our Software Tester. In this session, he elaborated how agile
                  methodology can help in ensuring a smooth software delivery
                  successfully.
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="upskillVideos__sessionVideo">
                <img
                  src={images["session-docker.jpg"]}
                  alt="Upskill Session"
                  class="img-fluid"
                />
                <h5>Upskill Session on Docker Container!</h5>
                <p>
                  A great session on Docker Container was taken by Avtar Singh,
                  DevOps Engineer. In this session, he talked about Docker
                  Container software platform and how its helps to build, test,
                  and deploy applications quickly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="weHiring weHiring--paddingBottom">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="weHiring__left">
                <img
                  src={images["we-are-hiring.svg"]}
                  alt="We are hiring"
                  class="img-fluid"
                />
              </div>
            </div>
            <div class="col-md-6 sectionContent">
              <div class="weHiring__right">
                <h2>It’s Not Just A Job, It’s A Wonderful Opportunity!</h2>
                <p>
                  Explore our exciting job opportunities and fill the one
                  <br /> that fits your passion.
                </p>
                <a
                  href="job-detail"
                  class="commonButton commonButton--yellow m-auto"
                >
                  Explore More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default UpskillsessionMore;
