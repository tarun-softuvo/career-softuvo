import React from "react";
import Blog from "../../components/blogs";
import images from "../../data/imageUpload";
import Header from "../../components/header";
import Footer from "../../components/footer";

function EmployeeDetailAmit() {
  return (
    <div>
      <Header/>
      <main id="main">
        <section class="employeeDetailsSection commonPY">
          <div class="container">
            <h2>“Hardwork Is The Key To Success!”</h2>
            <p>
              <img
                src={images["ES-amit.png"]}
                alt="Amit Kumar"
                class="img-fluid float-end"
              />
              Throughout my life, I have always believed in simple thinking and
              simple living!. I hail from a family that has always taught me and
              my siblings to work hard for whatever is served on our plates.
              Since then I imbibed the same values in my personality.
            </p>
            <p>
              So when I started my career in the IT industry I was determined to
              “
              <strong>
                <i>work as hard as I could and pave my way towards success</i>
              </strong>
              ”. I was always on the hunt for a good opportunity during my
              initial days. Not much time had passed before I got an offer from
              Softuvo. For me, the company was just a startup, but so was I. So
              I took the leap of faith and joined as a Software Tester.
            </p>

            <p>
              Today 5 years have passed by in this organization, and the only
              thing I have observed is that it is a sheer{" "}
              <strong>
                <i>dedication</i>
              </strong>{" "}
              that can help us reach the heights that we have always dreamt
              about!{" "}
            </p>

            <p>
              Be it Softuvo becoming the{" "}
              <strong>
                <i>best web and app development company</i>
              </strong>{" "}
              or me evolving as a QA, the ride was not a smooth road over these
              years. From strict deadlines to a seamless user experience for our
              client’s products, as a team, we always shared the zeal to perform
              the best in every situation and inspire one another!
              #OneTeam#OneGoal
            </p>

            <h6>
              Amit Kumar
              <br />
              <span>Sr. Software Tester</span>
            </h6>
          </div>
        </section>
      </main>
      <Blog />
      <Footer/>
    </div>
  );
}

export default EmployeeDetailAmit;
