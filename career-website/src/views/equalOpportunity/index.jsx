import React from 'react'
import images from "../../data/imageUpload";
import Blog from "../../components/blogs";
import Header from "../../components/header";
import Footer from "../../components/footer";
function EqualOpportunity() {
  return (
    <div>
        <Header/>
        <section class="banner banner--equalOpportunity">
            <div class="banner__commonBanner">
                <div class="commonPY">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 alignCenter">
                                <div>
                                    <h1>Workplace Equality: An Entitelimement For All At Softuvo</h1>
                                    <p>We strive to drive progress for Everyone with Champions<br/> that are Equal, No
                                        Matter
                                        from where they Belong
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-6  text-end">
                                <img src={images["equal-opportunity-banner.svg"]} alt="Equal Opportunity Banner"
                                    class="img-fluid"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="promises commonPY">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 sectionContent">
                        <h2>Promises We Make To Build A Workplace Equal For All</h2>
                        <p>Equality lies at the core of Softuvo. We certainly believe that businesses can be a powerful
                            hub for social change, thus it becomes our responsibility to propagate equality for all.
                            Also in our view, a culture exhibiting equality isn't the right thing, but also the smartest
                            thing to build. It pushes us to innovate, build strong connections with our clients, and
                            ultimately build a better company and a place to work at!</p>
                    </div>
                </div>

                <div class="row align-items-center mb-115">
                    <div class="col-lg-6 col-md-12 text-center">
                        <img src={images["equal-pay-for-equal-work.svg"]} alt="Equal Pay For Equal Work" class="img-fluid"/>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="promises__inner">
                            <h4>Equal Pay For Equal Work</h4>
                            <p>At Softuvo we do not encourage discrimination or pay gaps on the basis of caste, color,
                                creed, or religion, it has always been an equal co-working space for all. So no matter
                                what gender you belong to or what place or religion you hail from, we welcome you with
                                open arms and practice a fair pay or equal pay for equal work policy. The only factor
                                that counts during our pay gradation is only your quality of work. The more effort you
                                put in, the more enhanced your capabilities are, and the more you’ll rise up the success
                                ladder.</p>
                        </div>
                    </div>
                </div>

                <div class="row align-items-center mb-115">

                    <div class="col-lg-6 col-md-12">
                        <div class="promises__inner">
                            <h4>Gender Equality</h4>
                            <p>We aspire to build a better world for all of us — inside and outside of Softuvo. A world
                                free from gender bias, with equal voices and equal representation for all individuals at
                                each and every level. A world where everyone is and sees equal. When we do this,
                                economies grow, communities get healthier, businesses thrive, and the world becomes a
                                better place for everyone. We’re also committed to creating a culture where everyone is
                                treated equally and can contribute to their full potential. This is why achieving a
                                50/50 representation in all parts of our company is a top priority.</p>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 text-center">
                        <img src={images["gender-equality.svg"]} alt="Gender Equality" class="img-fluid"/>
                    </div>
                </div>

                <div class="row align-items-center mb-115">
                    <div class="col-lg-6 col-md-12 text-center">
                        <img src={images["equal-opportunity.svg"]} alt="Equal Opportunity" class="img-fluid"/>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="promises__inner">
                            <h4>Equal Opportunity</h4>
                            <p>Great Opportunity is every employee’s right! Yes, this is what we believe in and this is
                                what we practice at all levels. Therefore we ensure that no team member is devoid of any
                                budding opportunity only on the basis of what gender he or she is. As a co-working
                                space, we never promoted this unhealthy idea of “biases” or “favoritism”. All we are
                                focused on is quality innovation, unmatched skills, great learning abilities, and
                                efficient work output. So, if you foster any such thing in your professional abilities,
                                don’t be afraid of what people say or what gender you are, because, for us, you are a
                                Champion, as Equal as others.</p>
                        </div>
                    </div>
                </div>

                <div class="row align-items-center mb-115">

                    <div class="col-lg-6 col-md-12">
                        <div class="promises__inner">
                            <h4>Women At Softuvo</h4>
                            <p>We’re committed to gender diversity and women in leadership because we believe gender
                                equality in India is key to the future of its workforce. With the world being at this
                                critical phase, our commitment to making a positive difference together has never been
                                stronger. Because we believe they hold the power of being the actual Game Changers.
                                Believe it or not, 40% of our employee strength is Women In Lead, heading each of their
                                respective departments, crushing each challenge falling their way! So, if you feel you
                                are a woman and cannot lead the IT world, you have never seen the women working at
                                Softuvo. Stop self-doubting yourselves and join our #GirlTribe today, and rule the world
                                with the strengths you hold!</p>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 text-center">
                        <img src={images["women-at-softuvo.svg"]} alt="Women At Softuvo" class="img-fluid"/>
                    </div>
                </div>

                <div class="row align-items-center mb-5">
                    <div class="col-lg-6 col-md-12 text-center">
                        <img src={images["equal-rights.svg"]} alt="Advocacy For Equal Rights" class="img-fluid"/>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="promises__inner">
                            <h4>Advocacy For Equal Rights</h4>
                            <p>Racial, Ethnic, and Cultural Diversity, equal representation of the LQBTQIA+ community,
                                and disabilities are a normal-thing at Softuvo, and we try nothing less than to empower
                                them in whatever way possible. Thus we continue to advocate Equal Rights for all
                                communities across the world so that none of them feels underrepresented at such a
                                global level.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <section class="ourTrajectory commonPY">
            <div class="container">

                <div class="row">
                    <div class="col-md-12 sectionContent">
                        <h2>Our Trajectory Ahead...</h2>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-5 col-md-12">
                        <div class="ourTrajectory__left">
                            <img src={images["our-trajectory.svg"]} alt="Our Trajectory" class="img-fluid"/>
                        </div>
                    </div>
                    <div class="col-lg-7 col-md-12">
                        <div class="ourTrajectory__right">
                            <div class="ourTrajectory__right__promoting">
                                <h4>Promoting Greater Representation</h4>
                                <p>Our final aim is to create a company that reflects the community and the larger world
                                    around us! To get there, we re-framed our hiring processes to ensure that equality
                                    and inclusivity lie at the center. This includes training our hiring professionals
                                    to recruit top talent from communities that are Underrepresented at the corporate
                                    level, and advance them the opportunities they rightly deserve.</p>
                            </div>
                            <div class="ourTrajectory__right__promoting ourTrajectory__right__promoting--light">
                                <h4>Leading Our Diverse Team Of IT Professionals At The Global Market</h4>
                                <p>As our company grows, we would like to advance more towards the global market and get
                                    into being a more inclusive workspace. One of the biggest investments we would like
                                    to make in the following years is in our team flourishing across countries and
                                    global innovation strategies. With so much to deliver to the world, we wish to
                                    become a platform for change, a platform where success is achievable only if you
                                    have the skills and zeal to grab it! </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12">
                        <h3>Hence, We Promise Equal Opportunity, Equal Outcome Is In Your Hands!!</h3>
                    </div>
                </div>

            </div>
        </section>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default EqualOpportunity
