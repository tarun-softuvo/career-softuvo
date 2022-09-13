import React from 'react'
import Header from '../../components/header';
import Footer from "../../components/footer";
import images from "../../data/imageUpload";
import Blog from "../../components/blogs";

function OurCulture() {
  return (
    <div>
        <Header />
      <section class="banner banner--ourCulture">
            <div class="banner__commonBanner">
                <div class="commonPY">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 alignCenter">
                                <div>
                                    <h1>Our Culture,<br/> Our Values! </h1>
                                    <p>It is the Culture at Softuvo that defines our very present and shapes the path of
                                        our future success! So break the monotonous shackles, and strike the right
                                        work-life balance with us!
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-6  text-end">
                                <img src={images["our-culture.svg"]} alt="Our Culture" class="img-fluid"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="ourCulture commonPY">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-12">
                        <div class="ourCulture__left">
                            <img src={images["cultureAtSoftuvo.svg"]} alt="Culture at Softuvo" class="img-fluid"/>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="ourCulture__right">
                            <p>Culture at Softuvo defines our values and basically who we are. These values guide us to
                                make appropriate decisions, respect each other well, and serve our clients with the best
                                possible IT solutions, impacting people's lives in some way or the other. They describe
                                what we believe in and sets clear goals and expectations for how we work around things
                                and lead. Thus forming the foundation of what all we have achieved to date and for the
                                road of success ahead of us!
                            </p>
                            <h6>
                                This is Our Culture, Our Values - Common Threads That Bind Us All Together!!</h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="values commonPY">
            <div class="container">

                <div class="row">
                    <div class="col-md-12">
                        <h2>Values That Defines Us, Unites Us!</h2>
                    </div>
                </div>

                <div class="row align-items-center mb-5">

                    <div class="col-md-6">
                        <h3>Growth Ideology</h3>
                        <p>We primarily believe in fostering a culture that blooms on the concept of growth ideology. It
                            means having a firm belief that everyone can grow and develop individually and that
                            potential can be nurtured with the right mentorship, not pre-determined, to harbor a mindset
                            that focuses on growth and development. Proceeding ahead with this ideology requires each
                            one of us to keep the fire of constant learning ignited. We need to give in to uncertainty,
                            take risks, make mistakes, recognize failures, and pave our way towards mastery.
                        </p>
                    </div>
                    <div class="col-md-6 text-center">
                        <img src={images["growth-ideology.svg"]} alt="Growth Ideology" class="img-fluid"/>
                    </div>

                </div>

                <div class="row align-items-center mb-5">

                    <div class="col-md-6 text-center">
                        <img src={images["clients-first-approach.svg"]} alt="Clients First Approach" class="img-fluid"/>
                    </div>
                    <div class="col-md-6">
                        <h3>Clients First Approach</h3>
                        <p>We make sure to listen and learn about our client's requirements and their businesses with an
                            open and beginner's mindset and then cater to them with the best possible solutions that
                            meet their needs effectively. We make it a point to fulfill our client commitments with
                            transparency, simplicity, efficiency, and quickly. Because we believe in nurturing
                            partnerships!
                        </p>
                    </div>


                </div>

                <div class="row align-items-center mb-5">

                    <div class="col-md-6">
                        <h3>Winning Together</h3>
                        <p>We believe in valuing our people and their work! And most importantly, we affirm that working
                            together in a team aids us in performing better and smarter, hence helping us win and
                            overcoming any challenges that fall our way!
                        </p>
                    </div>
                    <div class="col-md-6 text-center">
                        <img src={images["winning-together.svg"]} alt="Winning Together" class="img-fluid"/>
                    </div>

                </div>

                <div class="row align-items-center mb-5">

                    <div class="col-md-6 text-center">
                        <img src={images["diversity-inclusion.svg"]} alt="Diversity and Inclusion" class="img-fluid"/>
                    </div>
                    <div class="col-md-6">
                        <h3>Diversity and Inclusion</h3>
                        <p>We embrace diverse cultures and value people’s unique diversity. We are open to learning
                            about our own biases and changing our behaviors so that we can tap into the collective power
                            of everyone working at Softuvo. Therefore we are more into building inclusive teams where
                            everyone does their best work, shares ideas that are better, has fun, and last but not the
                            least, serves the clients better.
                        </p>
                    </div>


                </div>

                <div class="row align-items-center mb-5">

                    <div class="col-md-6">
                        <h3>Quality Oriented</h3>
                        <p>We have been always focused on products and services that our clients can rely on. We dwell
                            on setting and achieving high quality and security standards so that our clients are catered
                            to the best of services. Therefore we cultivate talent that works efficiently without
                            compromising the quality of the efforts they put in.
                        </p>
                    </div>
                    <div class="col-md-6 text-center">
                        <img src={images["quality-oriented.svg"]} alt="Quality Oriented" class="img-fluid"/>
                    </div>

                </div>

                <div class="row align-items-center">

                    <div class="col-md-6 text-center">
                        <img src={images["integrity.svg"]} alt="Integrity" class="img-fluid"/>
                    </div>
                    <div class="col-md-6">
                        <h3>Integrity</h3>
                        <p>Softuvo's dealing with client and employee relationships is always truthful, and transparent
                            and acts with the utmost integrity. We strive on creating a safe and healthy workplace that
                            harbors technological solutions for good.
                        </p>
                    </div>


                </div>



            </div>
        </section>

        <section class="testimonials testimonials--bgPurple commonPY">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-12">
                        <div class="testimonials__left">
                            <img src={images["testimonial-img-tandeep.png"]} alt="Testimonial User 01" class="img-fluid"/>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="testimonials__right">
                            <img src={images["quote-left.svg"]} alt="Quote Left" class="img-fluid"/>
                            <p>It’s been more than 2 years, I have been associated with the company. My tenure here has
                                been so good till now and helped me in enhancing my knowledge in my domain as well as
                                other domains.</p>
                            <img src={images["quote-right.svg"]} alt="Quote Right" class="img-fluid float-end"/>
                            <h6>
                                Tandeep Sangra<br/>
                                <span>Joined Softuvo in 2019</span>
                            </h6>
                            <h5><a href="employee-saying">Let’s catch a glimpse of a few of them</a> <img src={images["right-arrow3.svg"]}
                                    alt="Right Arrow" class="img-fluid"/></h5>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <section class="cultureInAction commonPY">
            <div class="container">

                <div class="row">
                    <div class="col-md-12">
                        <h2>Our culture in action</h2>
                        <p>There is a hidden talent in everyone! Let’s have a look at the secret skills of our
                            employees!</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-3 col-md-6">
                        <div class="cultureInAction__inner">
                            <img src={images["fun-activities2.svg"]} alt="Fun Activities" class="img-fluid"/>
                            <div class="cultureInAction__inner__des">
                                <h4>Fun Activities</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="cultureInAction__inner">
                            <img src={images["bday-celebration.svg"]} alt="Birthday Celebration" class="img-fluid"/>
                            <div class="cultureInAction__inner__des">
                                <h4>Birthday Celebration</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="cultureInAction__inner">
                            <img src={images["festival-celebration.svg"]} alt="Festival Celebration" class="img-fluid"/>
                            <div class="cultureInAction__inner__des">
                                <h4>Festival Celebration</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="cultureInAction__inner">
                            <img src={images["annual-party2.svg"]} alt="Annual Party" class="img-fluid"/>
                            <div class="cultureInAction__inner__des">
                                <h4>Annual Party</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12 text-center">
                        <a href="employee-contributions" class="btn cultureInAction__button">Read More</a>
                    </div>
                </div>

            </div>
        </section>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default OurCulture;
