import React from "react";
import NewsImg from "../../assets/images/news-banner.svg";
import Blog from "../../components/blogs";
import images from "../../data/imageUpload";
import Header from "../../components/header";
import Footer from "../../components/footer";
const data = [
  {
    src: images["blog-img01.svg"],
  },
  {
    src: images["blog-img02.svg"],
  },
  {
    src: images["blog-img02.svg"],
  },
  {
    src: images["blog-img01.svg"],
  },
];

function News() {
  return (
    <div>
      <Header />
      <section className="banner banner--news">
        <div className="banner__commonBanner">
          <div className="commonPY">
            <div className="container">
              <div className="row">
                <div className="col-md-5 alignCenter">
                  <div>
                    <h1>Inside Softuvo</h1>
                    <p>
                      {" "}
                      Sip your coffee and browse through the latest happenings
                      at Softuvo! From a collection of little stories about our
                      people, our capabilities to the changing face of our
                      company all under one umbrella!
                    </p>
                  </div>
                </div>
                <div className="col-md-7 text-end">
                  <img src={NewsImg} alt="News Banner" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="latestNews latestNews--news">
          <div class="container-lg">
            <div class="row">
              <div class="col-md-12 sectionContent">
                <h2>Our Latest News</h2>
                <p>There is a hidden talent in everyone! Let’s have a look</p>
              </div>
            </div>

            <div class="row flip-co">
              <div class="col-sm-12 col-md-8">
                <div class="row">
                  {data.map((value) => {
                    return (
                      <div class="col-sm-6 col-md-6">
                        <div class="latestNews__inner">
                          <div class="latestNews__inner__img">
                            <img
                              src={value.src}
                              alt="Blog Image"
                              class="img-fluid"
                            />
                          </div>
                          <div class="latestNews__inner__des">
                            <h6>UI/UX Designer</h6>
                            <p>
                              There are many variations of passages of Lorem
                              Ipsum available
                            </p>
                            <div class="latestNews__inner__des__date">
                              <p>
                                <img
                                  src={images["date-icon.svg"]}
                                  alt="Date Icon"
                                  class="img-fluid"
                                />
                                05/04/2022
                              </p>
                              <a href="news-detail">
                                Read more{" "}
                                <img
                                  src={images["right-arrow2.svg"]}
                                  alt="Right Arrow"
                                  class="img-fluid"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  {/* <div class="col-sm-6 col-md-6">
                                <div class="latestNews__inner">
                                    <div class="latestNews__inner__img">
                                        <img src="images/blog-img01.svg" alt="Blog Image" class="img-fluid" />
                                    </div>
                                    <div class="latestNews__inner__des">
                                        <h6>UI/UX Designer</h6>
                                        <p>There are many variations of passages of Lorem Ipsum available</p>
                                        <div class="latestNews__inner__des__date">
                                            <p><img src="images/date-icon.svg" alt="Date Icon" class="img-fluid" />
                                                05/04/2022</p>
                                            <a href="news-detail.html">Read more <img src="images/right-arrow2.svg"
                                                    alt="Right Arrow" class="img-fluid" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6">
                                <div class="latestNews__inner">
                                    <div class="latestNews__inner__img">
                                        <img src="images/blog-img02.svg" alt="Blog Image" class="img-fluid" />
                                    </div>
                                    <div class="latestNews__inner__des">
                                        <h6>UI/UX Designer</h6>
                                        <p>There are many variations of passages of Lorem Ipsum available</p>
                                        <div class="latestNews__inner__des__date">
                                            <p><img src="images/date-icon.svg" alt="Date Icon" class="img-fluid" />
                                                05/04/2022</p>
                                            <a href="news-detail.html">Read more <img src="images/right-arrow2.svg"
                                                    alt="Right Arrow" class="img-fluid" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-6">
                                <div class="latestNews__inner">
                                    <div class="latestNews__inner__img">
                                        <img src="images/blog-img02.svg" alt="Blog Image" class="img-fluid" />
                                    </div>
                                    <div class="latestNews__inner__des">
                                        <h6>UI/UX Designer</h6>
                                        <p>There are many variations of passages of Lorem Ipsum available</p>
                                        <div class="latestNews__inner__des__date">
                                            <p><img src="images/date-icon.svg" alt="Date Icon" class="img-fluid" />
                                                05/04/2022</p>
                                            <a href="news-detail.html">Read more <img src="images/right-arrow2.svg"
                                                    alt="Right Arrow" class="img-fluid" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-sm-6 col-md-6">
                                <div class="latestNews__inner">
                                    <div class="latestNews__inner__img">
                                        <img src="images/blog-img01.svg" alt="Blog Image" class="img-fluid" />
                                    </div>
                                    <div class="latestNews__inner__des">
                                        <h6>UI/UX Designer</h6>
                                        <p>There are many variations of passages of Lorem Ipsum available</p>
                                        <div class="latestNews__inner__des__date">
                                            <p><img src="images/date-icon.svg" alt="Date Icon" class="img-fluid" />
                                                05/04/2022</p>
                                            <a href="news-detail.html">Read more <img src="images/right-arrow2.svg"
                                                    alt="Right Arrow" class="img-fluid" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                </div>
              </div>
              <div class="col-md-4">
                <div class="recentNews">
                  <form>
                    <h3>Search...</h3>
                    <div class="recentNews__searchOuter">
                      <img
                        src={images["search-white.svg"]}
                        alt="Search White"
                        class="img-fluid"
                      />
                      <input
                        type="text"
                        placeholder="Search"
                        class="form-control"
                      />
                    </div>
                  </form>
                  <div class="recentTags">
                    <h3>Tags</h3>
                    <div>
                      <ul
                        class="nav nav-tabs recentTags__tabs"
                        id="myTab"
                        role="tablist"
                      >
                        <li class="nav-item">
                          <button
                            class="nav-link active"
                            data-bs-toggle="tab"
                            data-bs-target="#all"
                            type="button"
                          >
                            All
                          </button>
                        </li>
                        <li class="nav-item">
                          <button
                            class="nav-link"
                            data-bs-toggle="tab"
                            data-bs-target="#ui-ux"
                            type="button"
                          >
                            UI/UX
                          </button>
                        </li>
                        <li class="nav-item">
                          <button
                            class="nav-link"
                            data-bs-toggle="tab"
                            data-bs-target="#php"
                            type="button"
                          >
                            PHP
                          </button>
                        </li>
                        <li class="nav-item">
                          <button
                            class="nav-link"
                            data-bs-toggle="tab"
                            data-bs-target="#devops"
                            type="button"
                          >
                            Devops
                          </button>
                        </li>
                        <li class="nav-item">
                          <button
                            class="nav-link"
                            data-bs-toggle="tab"
                            data-bs-target="#ios"
                            type="button"
                          >
                            iOS
                          </button>
                        </li>
                      </ul>

                      <div class="tab-content mt-3 mt-sm-5" id="recentTags">
                        <div class="tab-pane fade show active" id="all">
                          All
                        </div>
                        <div class="tab-pane fade" id="ui-ux">
                          UI/UX
                        </div>
                        <div class="tab-pane fade" id="php">
                          PHP
                        </div>
                        <div class="tab-pane fade" id="devops">
                          Devops
                        </div>
                        <div class="tab-pane fade" id="ios">
                          iOS
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3>Recent News</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div>{/* <Blog /> */}</div>
      </section>
      <Footer />
    </div>
  );
}
export default News;
