import React from 'react'
import images from "../../data/imageUpload";
import Blog from "../../components/blogs";
import Header from "../../components/header";
import Footer from "../../components/footer";
function InclusionAndDiversity () {
  return (
    <div>
        <Header/>
              <section class="banner banner--inclusion">
            <div class="banner__commonBanner">
                <div class="commonPY">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 alignCenter">
                                <div>
                                    <h1>Fostering A Culture Of Inclusivity and Diversity At Softuvo</h1>
                                    <p>Feel Welcomed, to our House of Diverse Team with Unique Perspectives, but United
                                        by Purpose, Culture, Abilities, and Tech Interests!
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-6  text-end">
                                <img src={images["inclusion-banner.svg"]} alt="Inclusion & Diversity Banner"
                                    class="img-fluid"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="ourPromise commonPY">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 sectionContent">
                        <h2>Our Promise To Inspire A Workplace That Aspires You<br/> To Be The Best Version Of Yourself!
                        </h2>
                        <p>At Softuvo, we believe in the power of Differences and the Change we can make, when we decide
                            to come Together, United by values and purposes shared together! Therefore we strive to
                            create a company where equality and inclusion is available for all, where respect and
                            diversity are considered the foundation of Our Culture, and where the opportunity to learn,
                            grow and succeed, is always in season for everyone!</p>
                    </div>
                </div>

                <div class="ourPromise__inner">
                    <div class="row g-0">
                        <div class="col-lg-6 col-md-12">
                            <div class="ourPromise__inner__left">
                                <img src={images["workplace.png"]} class="img-fluid"
                                    alt="Commitment To Create An Un-Gendered Workplace"/>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12">
                            <div class="ourPromise__inner__right">
                                <h3>Commitment To Create An Un-Gendered Workplace</h3>
                                <p>Not Only Men, Not Only Women, But They Work at Softuvo!<br/>
                                    We aim to transform our workplace, and the community at large, by applying a
                                    gender-neutral lens to everything we do for and beyond this company, in the pursuit
                                    of our belief that no one should be left behind in this world only because of
                                    gender. Rather they should be recognized on the basis of their abilities, talent,
                                    and intellectual capabilities and not on the physiological construct they withhold.
                                    So we make it a point that every individual working with us participates, held
                                    responsible, leads our global operations on a gender-neutral basis, and cultivates
                                    an all-inclusive culture. </p>
                            </div>
                        </div>
                    </div>


                </div>

                <div class="ourPromise__inner ourPromise__inner--bgPink">
                    <div class="row g-0">

                        <div class="col-lg-6 col-md-12">
                            <div class="ourPromise__inner__right">
                                <h3>Commitment To Embrace People With Disabilities</h3>
                                <p>At Softuvo we believe that every individual has a unique set of strengths and skills
                                    to contribute to any workplace. Therefore we strive to create a corporate culture
                                    that is inclusive, and easily accessible to inspire people with disabilities to
                                    learn, thrive and succeed. Our motive is to shun barriers that limit an individual
                                    from fully exhibiting their true capabilities and potential. So, even if you bear a
                                    disability, do not let that stop you from building your name in the outside world.
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12">
                            <div class="ourPromise__inner__left">
                                <img src={images["embrace-people.png"]} class="img-fluid"
                                    alt="Commitment To Embrace People With Disabilities"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="ourPromise__inner ourPromise__inner--bgGreen">
                    <div class="row g-0">
                        <div class="col-lg-6 col-md-12">
                            <div class="ourPromise__inner__left">
                                <img src={images["empower.png"]} class="img-fluid"
                                    alt="Commitment To Epower LGBTQIA+ Team Mates"/>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12">
                            <div class="ourPromise__inner__right">
                                <h3>Commitment To Epower LGBTQIA+ Team Mates</h3>
                                <p>Living in a world influenced by social stigmas, we are committed to creating an
                                    all-inclusive workplace, where every individual is respected and valued irrespective
                                    of their sexual orientation, gender identity, or expression. They had fought for
                                    intolerance, tackled biases, and put themselves at risk just for the sake of equal
                                    treatment. Their journey so far has not been easy, and still continues in the
                                    outside world. Therefore we believe in nurturing a work culture that encourages gay,
                                    lesbian, bisexual, queer, intersex, asexual, and transgender employees to be their
                                    best selves and showcase their distinguished capabilities.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="ourPromise__inner ourPromise__inner--bgPurple">
                    <div class="row g-0">

                        <div class="col-lg-6 col-md-12">
                            <div class="ourPromise__inner__right">
                                <h3>Commitment To Ethnic and Cultural Inclusion</h3>
                                <p>As a company dedicated to continued growth and innovation, we are committed to
                                    inclusion and equality. Hence, we continuously work towards building a workforce
                                    that reflects the diversity of our clients and partners from all across the world on
                                    a single platform.<br/>
                                    Be it socio-economic status, race, religion, caste, or other dimensions of
                                    diversity, we believe in supporting them, and bringing them together, for people as
                                    a whole hailing from different backgrounds, but as top talents in the industry
                                    paving their way for success, and innovative solutions.
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12">
                            <div class="ourPromise__inner__left">
                                <img src={images["ethnic-cultural.png"]} class="img-fluid"
                                    alt="Commitment To Ethnic and Cultural Inclusion"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="ourPromise__inner ourPromise__inner--bgDarkGreen">
                    <div class="row g-0">
                        <div class="col-lg-6 col-md-12">
                            <div class="ourPromise__inner__left">
                                <img src={images["mental-health.png"]} class="img-fluid"
                                    alt="Commitment To Prioritizing Mental Health and Wellness"/>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12">
                            <div class="ourPromise__inner__right">
                                <h3>Commitment To Prioritizing Mental Health and Wellness</h3>
                                <p>The concept of work-life balance is not something new in workplaces. But due to
                                    ever-increasing professional pressure, it has taken a back seat and a toll on the
                                    health of our employees. Above all, mental health in our country is not recognized
                                    or we may say prioritized at any level and is often termed as a psychological
                                    disorder by many. Since we recognize this fact and understand the importance of the
                                    mental well-being of our employees, we ensure to work towards breaking down such
                                    stigmas by encouraging open conversations on the well-being of “our people’s” minds,
                                    having honest conversations with them, and providing them with any professional help
                                    on matters that require acute attention. Because, Your Well-Being Is Equally
                                    Important To Us!
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>

        <section class="waysToSupport commonPY">
            <div class="container">

                <div class="row">
                    <div class="col-md-12 sectionContent">
                        <h2>Ways In Which Softuvo Supports Inclusion And Togetherness</h2>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-4 col-md-6">
                        <div class="waysToSupport__inner">
                            <img src={images["flexible-time-icon.svg"]} class="img-fluid"
                                alt="Flexible Working Environment"/>
                            <h4>Flexible Working Environment</h4>
                            <p>Our approach to a flexible working environment revolves around striking the perfect
                                work-life balance amid the times when our employees are tied up in fulfilling
                                professional as well as personal commitments. This way they’ll have the liberty to serve
                                the ones that matter the most and come up working more efficiently.</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="waysToSupport__inner">
                            <img src={images["wellness-icon.svg"]} class="img-fluid" alt="Wellness Retreats"/>
                            <h4>Wellness Retreats</h4>
                            <p>Who likes to have a monotonous working schedule? Well, none at Softuvo. We strongly
                                believe that having little breaks out and about the town for prioritizing mental and
                                physical wellness, increases a happy employee rate and promotes great work efficiency.
                                So what’s holding you back, pack your bags and be a part of our next trip!</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="waysToSupport__inner">
                            <img src={images["equality-icon.svg"]} class="img-fluid" alt="Equality For All"/>
                            <h4>Equality For All</h4>
                            <p>Softuvo has always been an all-inclusive workplace. The day this company started its
                                journey, it made a pledge to support authenticity and inclusion in the workspace and
                                help ensure that each and every person working here is treated with dignity and respect,
                                forming its core principles.</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="waysToSupport__inner">
                            <img src={images["leaves-icon.svg"]} class="img-fluid" alt="Parental Leaves"/>
                            <h4>Parental Leaves</h4>
                            <p>We understand how important it is for you to welcome a new family member. Therefore to
                                become a part of your moment of joy we allow our new parents a substantial amount of
                                leaves so that they can share the new responsibilities equally and spend some super
                                nurturing time at home!</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="waysToSupport__inner">
                            <img src={images["exigency-icon.svg"]} class="img-fluid" alt="Exigency Support"/>
                            <h4>Exigency Support</h4>
                            <p>We make sure to support our employees in their joys and sorrows, as they are nothing less
                                than a family to us. With the introduction of paid maternity, paternity, bereavement
                                leaves, and other emergencies, our HRD ensures, you are well-supported no matter what
                                phase of your life lies in!</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="waysToSupport__inner">
                            <img src={images["communication-icon.svg"]} class="img-fluid" alt="Open Communication"/>
                            <h4>Open Communication</h4>
                            <p>Communication is the key to any company’s success. And we abide by this principle very
                                seriously. To be able to reach the goal of an all-inclusive and diverse workplace it was
                                important to have open communication channels with our employees so that none of them
                                would ever feel left out and come about shining with their best abilities.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="revelation commonPY">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 sectionContent">
                        <h2>A Little Revelation On How We Made Through It!</h2>
                        <p>When we started our journey to become the next IT Giant, we probably had this one thing in
                            mind, this voyage will never be completed until and unless we value the people who become a
                            part of it, irrespective of where they all hail from. Thus, we felt, that everyone
                            associated with us, be it our clients, partners, or employees, should deserve much better,
                            and therefore we decided to continue to work on this path to make you feel proud of being a
                            part of Softuvo Solutions.
                        </p>
                        <p class="mb-5">
                            Talking about Inclusion and Diversity, though we have not yet become the company with the
                            greatest aspects of these incorporated, we surely are taking jumbo steps in achieving it and
                            holding ourselves accountable to our community. Because we believe in,
                        </p>

                        <div class="row">
                            <div class="col-md-6">
                                <img src={images["quote-left2.svg"]} alt="Quote Left" class="img-fluid"/>
                                <p class="quote">Individual commitment to a group effort—that is what makes a team
                                    work,<br/> a
                                    company work, a
                                    society work, a civilization work.</p>
                                <img src={images["quote-right2.svg"]} alt="Quote Right" class="img-fluid float-end"/>

                                <h6>Vince Lombardi</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default InclusionAndDiversity; 
