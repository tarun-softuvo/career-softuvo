import React from "react";
import { Link } from "react-router-dom";
import BlogImg from "../../assets/images/blog-img01.svg";
import BlogImg1 from "../../assets/images/blog-img02.svg";
import images from "../../data/imageUpload";

function Blog() {
  return (
    <section className="latestNews">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <div className="row">
              <div className="col-md-12 sectionContent">
                <h2>
                  Hello?? Don't Scroll Too Fast!!
                  <br />
                  You'll Miss The Fun Brewing Inside!!
                </h2>
                <p>
                  Let's Check The Latest News At Softuvo &gt;&gt;&gt;&gt;&gt;
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="latestNews__inner">
                  <div className="latestNews__inner__img">
                    <img src={BlogImg} alt="blog" />
                  </div>
                  <div className="latestNews__inner__des">
                    <h6>UI/UX Designer</h6>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available
                    </p>
                    <div className="latestNews__inner__des__date">
                      <p>
                        <img
                          src={images["date-icon.svg"]}
                          alt="Date Icon"
                          className="img-fluid"
                        />
                        05/04/2022
                      </p>
                      <Link to="/news-detail">
                        Read more
                        <img
                          src={images["right-arrow2.svg"]}
                          alt="Right Arrow"
                          className="img-fluid"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="latestNews__inner">
                  <div className="latestNews__inner__img">
                    <img src={BlogImg1} alt="blog1" />
                  </div>
                  <div className="latestNews__inner__des">
                    <h6>UI/UX Designer</h6>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available
                    </p>
                    <div className="latestNews__inner__des__date">
                      <p>
                        <img
                          src={images["date-icon.svg"]}
                          alt="Date Icon"
                          className="img-fluid"
                        />
                        05/04/2022
                      </p>
                      <Link to="/news-detail">
                        Read more
                        <img
                          src={images["right-arrow2.svg"]}
                          alt="Right Arrow"
                          className="img-fluid"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <h3>Stay connected with us!</h3>
            <div className="latestNews__inner latestNews__inner--bgBlack">
              <ul class="latestNews__inner__blogList">
                <li>
                  <div class="latestNews__inner__blogList__img">
                    <img
                      src={images["logo-white-s.png"]}
                      alt="Blog Image"
                      class="img-fluid"
                    />
                  </div>
                  <div class="latestNews__inner__blogList__des">
                    <a href="#">
                      <h5 class="float-end">2 Days ago</h5>
                      <h4>Softuvo</h4>
                    </a>
                    <div class="twitterWidget">
                      <a
                        class="twitter-timeline"
                        href="https://twitter.com/softuvo?ref_src=twsrc%5Etfw"
                      >
                        Tweets by softuvo
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
              {/* <ul className="latestNews__inner__blogList">
                <li>
                  <div class="latestNews__inner__blogList__img">
                    <img
                      src={images["logo-white-s.png"]}
                      alt="Blog Image"
                      class="img-fluid"
                    />
                  </div>
                  <div class="latestNews__inner__blogList__des">
                    <Link to="#">
                      <h5 class="float-end">2 Days ago</h5>
                      <h4>Softuvo</h4>
                      <a
                        class="twitter-timeline"
                        href="https://twitter.com/softuvo?ref_src=twsrc%5Etfw"
                      >
                        Tweets by softuvo
                      </a>
                    </Link>
                  </div>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center sectionContent">
            <Link
              to="/news"
              className="commonButton commonButton--yellow m-auto"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Blog;
