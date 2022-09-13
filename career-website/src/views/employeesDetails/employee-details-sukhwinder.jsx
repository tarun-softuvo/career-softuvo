import React from "react";
import Blog from "../../components/blogs";
import images from "../../data/imageUpload";
import Header from "../../components/header";
import Footer from "../../components/footer";
function EmployeeDetailSukhwinder() {
  return (
    <div>
      <Header/>
      <section class="employeeDetailsSection commonPY">
        <div class="container">
          <h2>
            Knowledge Is Not Skill.
            <br />
            Knowledge Plus Ten Thousand Times Is Skill!
          </h2>
          <p>
            <img
              src={images["ES-sukhwinder.png"]}
              alt="Sukhwinder Kaur"
              class="img-fluid float-end"
            />
            When I am always asked about my journey here, well I have this one
            answer that remains true to its words - Softuvo offered a kickstart
            in my chosen career path!
          </p>
          <p>
            Because when I joined this firm, I already had an experience of five
            to six years, but one thing I was unsatisfied with was that it
            wasn’t aiding a boost in my career the way I always wanted. But as
            the saying goes, “
            <strong>
              <i>
                Knowledge is not skill. Knowledge plus ten thousand times is
                skill
              </i>
            </strong>
            ”, I started believing that maybe that’s just one of my learning
            phases. With this really long incessant learning phase of mine, I
            did get hit with the opportunity I was waiting for a very long time,
            by Softuvo. So the day I joined, the only thing I could feel around
            me was - progression. The company encapsulated an environment
            dedicated to encouraging employees to reach their full potential.
            And this is what truly inspired me to work here, fulfill client
            projects with ease, and share the knowledge I gained over the years
            to enhance the skillsets of my fellow employees.
          </p>

          <p>
            Now when I look back after spending five more years in this firm,
            this journey was an incredible one. One of which I’ll cherish in my
            entire career path because it was here that I was able to fulfill my
            professional goals, enhance my “coding” skills, share my knowledge
            with fellow teammates and stand proud of the title I worked really
            hard for all these 11 years in the IT industry!
          </p>

          <h6>
            Sukhwinder Kaur
            <br />
            <span>Team Manager</span>
          </h6>
        </div>
      </section>
      <Blog />
      <Footer/>
    </div>
  );
}

export default EmployeeDetailSukhwinder;
