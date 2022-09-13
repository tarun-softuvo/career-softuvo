import React from "react";
import images from "../../data/imageUpload";
import Header from "../../components/header";
import Footer from "../../components/footer";
function Newsdetail() {
  return (
    <div>
      <Header />
      <section class="banner banner--news">
        <div class="banner__commonBanner">
          <div class="commonPY">
            <div class="container">
              <div class="row">
                <div class="col-md-5 alignCenter">
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
                <div class="col-md-7 text-end">
                  <img src={images["news-banner.svg"]} alt="News Banner" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="newsDetail commonPY">
        <div class="container">
          <div class="newsContent">
            <div class="row">
              <div class="col-lg-6">
                <h5>Web Design</h5>
                <h3>Lorem Ipsum is simply dummy text of the printing</h3>
                <p class="newsContent__textLeft">
                  {" "}
                  If you are going to use a passage of Lorem Ipsum, you need to
                  be sure there isn't anything embarrassing hidden in the middle
                  of text. All the Lorem Ipsum generators on the Internet tend
                  to repeat predefined chunks as necessary, making this the
                  first true generator on the Internet. It uses a dictionary of
                  over 200 Latin words, combined with a handful of model
                  sentence structures, to generate Lorem Ipsum which looks
                  reasonable. The generated Lorem Ipsum is therefore always free
                  from repetition, injected humour, or non-characteristic words
                  etc.
                </p>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text.
                </p>
              </div>
              <div class="col-lg-6">
                <img
                  src={images["news-detail2.png"]}
                  alt="News Detail"
                  class="img-fluid newsContent__rightImg"
                />
              </div>
            </div>
            <div class="newsContent__textcontent">
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet. It uses a
                dictionary of over 200 Latin words, combined with a handful of
                model sentence structures, to generate Lorem Ipsum which looks
                reasonable. The generated Lorem Ipsum is therefore always free
                from repetition, injected humour, or non-characteristic words
                etc.
                <br />
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text.
              </p>

              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet. It uses a
                dictionary of over 200 Latin words, combined with a handful of
                model sentence structures, to generate Lorem Ipsum which looks
                reasonable. The generated Lorem Ipsum is therefore always free
                from repetition, injected humour, or non-characteristic words
                etc.
                <br />
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text.
              </p>
              <ul>
                <li>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.
                </li>
                <li>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour,.
                </li>
                <li>
                  There are many variation by injected humour, or randomised
                  words which don't look even slightly believable.
                </li>
                <li>
                  There are many variations of passages of Lorem Ipsum
                  available, but the major.
                </li>
                <li>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.
                </li>
              </ul>

              <div class="row mt-5">
                <div class="col-lg-7">
                  <p class="newsContent__textLeft">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text. All the
                    Lorem Ipsum generators on the Internet tend to repeat
                    predefined chunks as necessary, making this the first true
                    generator on the Internet. It uses a dictionary of over 200
                    Latin words, combined with a handful of model sentence
                    structures, to generate Lorem Ipsum which looks reasonable.
                    The generated Lorem Ipsum is therefore always free from
                    repetition, injected humour, or non-characteristic words
                    etc.
                  </p>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text.
                  </p>
                </div>
                <div class="col-lg-5">
                  <img
                    src={images["news-detail2.png"]}
                    alt="News Detail"
                    class="img-fluid newsContent__rightImg"
                  />
                </div>
              </div>
              <div class="clearfix"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Newsdetail;
