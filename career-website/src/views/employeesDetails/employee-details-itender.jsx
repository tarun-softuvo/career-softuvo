import React from "react";
import Blog from "../../components/blogs";
import images from "../../data/imageUpload";
import Header from "../../components/header";
import Footer from "../../components/footer";
function EmployeeDetailsItender() {
  return (
    <div>
      <Header/>
      <section class="employeeDetailsSection commonPY">
        <div class="container">
          <h2>
            Stay Curious, Keep Learning and Keep Growing!
            <br />
            Always Strive To Be More Interested Than Interesting!!
          </h2>
          <p>
            <img
              src={images["ES-itender.png"]}
              alt="Itender Singh"
              class="img-fluid float-end"
            />
            I come from an agricultural background, so{" "}
            <strong>
              <i>
                staying curious about little things and learning from them,
                flows in my veins
              </i>
            </strong>
            . So, as soon as I completed my education, I was quite sure that I
            have to make my parents proud and earn more and more money seeing
            the struggles they did so as to help me pursue my education and
            support them in whichever way possible.
          </p>
          <p>
            Therefore, I started exploring and found my calling in the IT
            industry as Business Development Executive. But planting my foot in
            this particular field was not easy. Being in such a department you
            are vested with the responsibility of bringing new clients and
            forming cordial relationships with the existing ones to continue the
            purpose of sales. So, during my first job, I really struggled a lot
            and found myself low in various situations. But I guess that’s how
            you grow. While I was cribbing at my failures, one day I decided
            that this should come to an end and it is at this point that I
            should transform this situation into a learning experience and move
            forward. So, I started exploring new job opportunities and finally
            found{" "}
            <strong>
              <i>Softuvo Solutions</i>
            </strong>
            , the
            <strong>
              <i>top mobile app and web development company</i>
            </strong>
            . Well, entering into this new space{" "}
            <strong>
              <i>committed to growth and flourishment</i>
            </strong>{" "}
            was quite amusing to me. And I certainly thought that I may not
            survive here for a longer period of time.
          </p>

          <p>
            But today more than four years have passed in this organization and
            my very{" "}
            <strong>
              <i>zeal to learn and accomplish</i>
            </strong>{" "}
            has turned me into a senior business professional here! For me, this
            place is nothing less than a family because I was guided as a child
            at every step I took, corrected at every failure, and evolved as a
            professional, every industry expert seeks. So,{" "}
            <strong>
              <i>never stop learning because that’s the only way you’ll grow</i>
            </strong>{" "}
            in your personal and professional life!{" "}
          </p>

          <h6>
            Itender Minhas
            <br />
            <span>Sr. Business Development Executive</span>
          </h6>
        </div>
      </section>
      <Blog />
      <Footer/>
    </div>
  );
}

export default EmployeeDetailsItender;
