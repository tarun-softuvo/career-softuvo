import React from 'react'
import images from "../../data/imageUpload";
import Blog from "../../components/blogs";
import Header from "../../components/header";
import Footer from "../../components/footer";
function HybridWorkCulture () {
  return (
    <div>
        <Header/>
       <section class="banner banner--hybridWorkCulture">
            <div class="banner__commonBanner">
                <div class="commonPY">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 alignCenter">
                                <div>
                                    <h1>Breaking The Shackles Of 9-5 Culture With Our Hybrid Work Culture!</h1>
                                    <p>Workspace ≠ Office Anymore - It’s Wherever You Start Your Job!
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-6  text-end">
                                <img src={images["hybrid-work-culture-banner.svg"]} alt="Hybrid Work Culture Banner"
                                    class="img-fluid"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="rethinkWorkCulture commonPY">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 sectionContent">
                        <h2>It’s Time To Rethink The Work Culture With Softuvo:
                            Centering Around The Work We Do, Not Where We Work
                        </h2>
                        <p>The COVID-19 pandemic is radically transforming employee and customer expectations. And
                            there’s definitely no turning back. At Softuvo, there are as many ways of working as there
                            are “employees” that form the core of our organization. As a top software development
                            company, we value and support flexibility as part of our hybrid workplace where every
                            employee can perform their best work by working the way they prefer to work best.</p>
                        <p class="mb-5">A “hybrid workplace” at Softuvo is considered as a mix of work styles across the
                            following
                            three dimensions for our employees as well as within our organization. While going through
                            the recruiting process, you can discuss flexibility with our recruiter and hiring manager to
                            understand the degrees of flexibility offered by the organization. </p>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-4 col-md-6">
                        <div class="rethinkWorkCulture__inner">
                            <img src={images["work-spot.svg"]} alt="Work Spot" class="img-fluid"/>
                            <h4>Work Spot</h4>
                            <p>This is the physical place where you chose to work. Employees at Softuvo are given the
                                option to work from home less than 40% of their work time (on average) and are expected
                                to adhere to team agreements around in-person expectations.</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="rethinkWorkCulture__inner">
                            <img src={images["work-locale.svg"]} alt="Work Locale" class="img-fluid"/>
                            <h4>Work Locale</h4>
                            <p>This is the geographic location of where you chose to work. The geographic work location
                                of employees acts as an important element in organizational operations.
                                We want to accommodate as many well-deserved talents as we can, while meeting the needs
                                of the business and continuing to create the culture we aspire to have.
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="rethinkWorkCulture__inner">
                            <img src={images["work-hours.svg"]}  alt="Work Hours" class="img-fluid"/>
                            <h4>Work Hours</h4>
                            <p>This basically comprises the hours and days when you work. In our organization, work
                                schedule flexibility is considered standard for most job roles.
                                We believe in supporting employees who wish to work in the hours that work for them and
                                that allows them to deliver on expectations if any “unforeseen circumstances” demand
                                this out of them. Flexibility is an integral part of the employee experience at Softuvo.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <section class="embraceWorkCulture commonPY">
            <div class="container">

                <div class="row">
                    <div class="col-md-12 sectionContent">
                        <h2>How Are We Embracing A Hybrid Work Culture!</h2>
                        <p>The global pandemic has stimulated a revolutionary shift in the way people had been working
                            over the years. Thus enabling us to foster a hybrid workplace that empowers people to work
                            on-site, off-site, or in-between locations to drive the highest levels of productivity and
                            engagement, keeping in mind their overall well-being.<br/>
                            <strong>Have a look at some of the best hybrid workplace practices we follow to ensure a
                                “Happy-Flexi” culture!</strong>
                        </p>
                    </div>
                </div>

                <div class="row align-items-center mb-5">
                    <div class="col-md-6">
                        <div class="embraceWorkCulture__left">
                            <h3>Excellent Two-Way Communication</h3>
                            <ul class="embraceWorkCulture__left__list">
                                <li>
                                    <div class="embraceWorkCulture__left__list__icon">
                                        <img src={images["check-icon.svg"]}  class="img-fluid" alt="Check Icon"/>
                                    </div>
                                    <div class="embraceWorkCulture__left__list__des">
                                        <p>Clear communication channels are used for the transparent conveying of
                                            information.</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="embraceWorkCulture__left__list__icon">
                                        <img src={images["check-icon.svg"]}  class="img-fluid" alt="Check Icon"/>
                                    </div>
                                    <div class="embraceWorkCulture__left__list__des">
                                        <p>The managers are vested with the responsibility to answer their teams'
                                            queries or questions irrespective of which hybrid model they are a part of.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-6 text-center">
                        <div class="embraceWorkCulture__right">
                            <img src={images["2-way-communication.svg"]} class="img-fluid"
                                alt="Excellent Two-Way Communication"/>
                        </div>
                    </div>
                </div>

                <div class="row align-items-center mb-5">
                    <div class="col-md-6 text-center">
                        <div class="embraceWorkCulture__right">
                            <img src={images["right-tools.svg"]} class="img-fluid"
                                alt="Deployment Of Right Tools, Technologies, and Equipments"/>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="embraceWorkCulture__left">
                            <h3>Deployment Of Right Tools, Technologies, and Equipments</h3>
                            <ul class="embraceWorkCulture__left__list">
                                <li>
                                    <div class="embraceWorkCulture__left__list__icon">
                                        <img src={images["check-icon.svg"]} class="img-fluid" alt="Check Icon"/>
                                    </div>
                                    <div class="embraceWorkCulture__left__list__des">
                                        <p>We provide up-to-date productivity tracking and communication tools that are
                                            mobile/all device enabled.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div class="row align-items-center mb-5">
                    <div class="col-md-6">
                        <div class="embraceWorkCulture__left">
                            <h3>Focused On Employee Experience And Engaged Work Culture</h3>
                            <ul class="embraceWorkCulture__left__list">
                                <li>
                                    <div class="embraceWorkCulture__left__list__icon">
                                        <img src={images["check-icon.svg"]} class="img-fluid" alt="Check Icon"/>
                                    </div>
                                    <div class="embraceWorkCulture__left__list__des">
                                        <p>No Friday is fun at Softuvo until and unless our work from home employees
                                            also pave their way to it through their mini-screens. </p>
                                    </div>
                                </li>
                                <li>
                                    <div class="embraceWorkCulture__left__list__icon">
                                        <img src={images["check-icon.svg"]} class="img-fluid" alt="Check Icon"/>
                                    </div>
                                    <div class="embraceWorkCulture__left__list__des">
                                        <p>Always open to employee feedback so that no concern is left unheard and
                                            unresolved.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-6 text-center">
                        <div class="embraceWorkCulture__right">
                            <img src={images["employee-experience.svg"]} class="img-fluid"
                                alt="Focussed On Employee Experience And Engaged Work Culture"/>
                        </div>
                    </div>
                </div>

                <div class="row align-items-center mb-5">
                    <div class="col-md-6 text-center">
                        <div class="embraceWorkCulture__right">
                            <img src={images["consistent-career-progress.svg"]} class="img-fluid"
                                alt="Consistent Career Progress Meetings and Team Check-Ins"/>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="embraceWorkCulture__left">
                            <h3>Consistent Career Progress Meetings and Team Check-Ins</h3>
                            <ul class="embraceWorkCulture__left__list">
                                <li>
                                    <div class="embraceWorkCulture__left__list__icon">
                                        <img src={images["check-icon.svg"]} class="img-fluid" alt="Check Icon"/>
                                    </div>
                                    <div class="embraceWorkCulture__left__list__des">
                                        <p>Our Managers are Pro at holding team meetings every week with all their mates
                                            to Check work in progress and impart knowledge in whichever possible to
                                            boost their career growth.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div class="row align-items-center mb-5">
                    <div class="col-md-6">
                        <div class="embraceWorkCulture__left">
                            <h3>Circulate Educational Opportunities Through Upskill Sessions</h3>
                            <ul class="embraceWorkCulture__left__list">
                                <li>
                                    <div class="embraceWorkCulture__left__list__icon">
                                        <img src={images["check-icon.svg"]} class="img-fluid" alt="Check Icon"/>
                                    </div>
                                    <div class="embraceWorkCulture__left__list__des">
                                        <p>We make it a point that every employee is made available with distinct
                                            learning and development opportunities through paid educational courses
                                            sponsored by the organization. </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-6 text-center">
                        <div class="embraceWorkCulture__right">
                            <img src={images["educational-opportunities.svg"]} class="img-fluid"
                                alt="Circulate Educational Opportunities Through Upskill Sessions"/>
                        </div>
                    </div>
                </div>

                <div class="row align-items-center mb-5">
                    <div class="col-md-6 text-center">
                        <div class="embraceWorkCulture__right">
                            <img src={images["track-goals.svg"]} class="img-fluid"
                                alt="Track Goals and Performance Metrics"/>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="embraceWorkCulture__left">
                            <h3>Track Goals and Performance Metrics</h3>
                            <ul class="embraceWorkCulture__left__list">
                                <li>
                                    <div class="embraceWorkCulture__left__list__icon">
                                        <img src={images["check-icon.svg"]} class="img-fluid" alt="Check Icon"/>
                                    </div>
                                    <div class="embraceWorkCulture__left__list__des">
                                        <p>Whichever model you choose under the Hybrid culture we make it a point to
                                            closely observe your performance and provide help in any way possible, if
                                            needed, so that you fulfill your professional goals without any hindrances.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>
        </section>

        <section class="exploreJobOpportunities commonPY">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h2>At Softuvo, Work is not Where you Go, it’s What you Do!
                            Come, Join The Future Of Sustainable Workplace Today!!
                        </h2>
                        <button class="btn exploreJobOpportunities__button">
                            Explore Jobs Opportunities
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default HybridWorkCulture;
