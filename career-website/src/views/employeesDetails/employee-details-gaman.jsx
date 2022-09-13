import React from 'react'
import Blog from '../../components/blogs';
import images from "../../data/imageUpload";
import Header from "../../components/header";
import Footer from "../../components/footer";
function EmployeeDetailsGaman() {
  return (
    <div>
        <Header/>
       <section class="employeeDetailsSection commonPY">
            <div class="container">
                <h2>“Excellence Is Not Being The Best,
                    It Is Doing Your Best!
                    ”</h2>
                <p>
                    <img src={images["ES-gaman.png"]} alt="Gamanjit Singh" class="img-fluid float-end"/>

                    My main motivation to start working at Softuvo was to participate in challenging, future-oriented
                    projects in the IT field and to grow my professional abilities. I enjoy working in a young and
                    motivated team, in a company with a very strong thought process, conceptualization, and
                    communication that enables everyone to feel involved in the progress of our company and have the
                    opportunity to undertake varying tasks together with the chance for personal and professional
                    development.
                </p>
                <p>I like what I do and my team here, there is a good team spirit amongst us. Our workload has been full
                    of challenges in these particular times of growth, but it is never hectic or too stressful because
                    of the mentors involved with their skills that impart nothing except wisdom.</p>

                <p>Hence we <strong><i>harbor excellence in what we do!</i></strong> The company is supportive of each
                    and every person working
                    here and is an exciting place to grow and learn – especially as the industry is developing so
                    quickly.</p>

                <p>When I look back at my journey of five years I see myself as a much more confident person who is able
                    to handle client queries, project management, and product deliveries, just as easily as walking on a
                    piece of cake. Ummm cake, because that’s my favourite!!
                </p>

                <h6>
                    Gamanjit Singh<br/>
                    <span>Delivery Manager</span>
                </h6>
            </div>
        </section>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default EmployeeDetailsGaman
