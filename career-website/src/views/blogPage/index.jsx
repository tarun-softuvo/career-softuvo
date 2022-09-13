import React from "react";
import images from "../../data/imageUpload";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Blog from "../../components/blogs";

const data = [
  {
    src: images["blog-img01.svg"],
  },
  {
    src: images["blog-img01.svg"],
  },
  {
    src: images["blog-img01.svg"],
  },
  {
    src: images["blog-img01.svg"],
  },
  {
    src: images["blog-img01.svg"],
  },
  {
    src: images["blog-img01.svg"],
  },
  {
    src: images["blog-img01.svg"],
  },
  {
    src: images["blog-img01.svg"],
  },
  {
    src: images["blog-img01.svg"],
  },
];
function Blogs() {
  return (
    <div>
      <Header />
      <section class="banner banner--blog">
        <div class="banner__commonBanner">
          <div class="commonPY">
            <div class="container">
              <div class="row">
                <div class="col-md-6 alignCenter">
                  <div>
                    <h1>Blog</h1>
                    <p>
                      Need some advice on how to make your workday better and
                      shoot your overall professional growth! What’s better than
                      getting some tips on career basics from the experts
                      themselves to help you pave a better career path in the IT
                      Industry!
                    </p>
                  </div>
                </div>
                <div class="col-md-6  text-end">
                  <img
                    src={images["blog-banner.svg"]}
                    alt="Blog Banner"
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="blogList commonPY">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="blogList__top">
                <form class="blogList__top__searchForm">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search..."
                  />
                </form>
              </div>
            </div>
          </div>

          <div class="row">
            {data.map((value) => {
              return (
                <div class="col-lg-4 col-md-6">
                  <div class="blogList__inner">
                    <div class="blogList__inner__img">
                      <img src={value.src} alt="Blog Image" class="img-fluid" />
                    </div>
                    <div class="blogList__inner__des">
                      <h6>UI/UX Designer</h6>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available
                      </p>
                      <div class="blogList__inner__des__date">
                        <p>
                          <img
                            src={images["date-icon.svg"]}
                            alt="Date Icon"
                            class="img-fluid"
                          />{" "}
                          05/04/2022
                        </p>
                        <a href="#">
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
          </div>

          <div class="row">
            <div class="col-md-12">
              <nav aria-label="Page navigation example">
                <ul class="pagination">
                  <li class="page-item disabled">
                    <a class="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">
                        <img
                          src={images["prev.svg"]}
                          alt="Previous Icon"
                          class="img-fluid"
                        />
                      </span>
                    </a>
                  </li>
                  <li class="page-item active" aria-current="page">
                    <a class="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">
                        <img
                          src={images["next.svg"]}
                          alt="Next Icon"
                          class="img-fluid"
                        />
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <Blog />
      <Footer />
    </div>
  );
}

export default Blogs;
