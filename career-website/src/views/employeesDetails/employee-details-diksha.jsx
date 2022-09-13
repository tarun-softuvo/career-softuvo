import React from 'react'
import Blog from '../../components/blogs';
import images from "../../data/imageUpload";
import Header from "../../components/header";
import Footer from "../../components/footer";
function EmployeeDetailDiksha() {
  return (
    <div>
        <Header/>
        <section class="employeeDetailsSection commonPY">
            <div class="container">
                <h2>“Be Yourself, The Rest Follows!”</h2>
                <p>
                    <img src={images["diksha-suri.svg"]} alt="Diksha Suri" class="img-fluid float-end"/>

                    Do you believe in good vibes? <br/>
                    Well, I do!
                </p>
                <p>The day I stepped into Softuvo's office it seemed like a young and growing company in the software
                    service industry, imparting vibes that I could not resist. So with the passage of time, while I was
                    sitting there for my interview, one thing I was sure about was that if I join this firm, I’d be
                    bestowed with a number of excellent opportunities to grow side by side with the organization!</p>

                <p>So I finally decided to start my journey here as a Content Writer. A journey that was filled with ups
                    and downs. A journey that made me realize my worth, learn and grow, on a personal and professional
                    front. A journey that was started young as a writer but evolved into heading the entire content
                    team. A path that enlightened me with my life mantra - “Be Yourself, the rest follows!”. Because it
                    is your sole identity that marks the very difference in what you do and not where you go!</p>

                <p>So, whenever I am in doubt, I just trust the vibes and go for it, because who knows what’s in store
                    in the future! Maybe it’s your sign to shine as a beaming star!</p>

                <h6>
                    Diksha Suri<br/>
                    <span>Sr. Content Writer</span>
                </h6>
            </div>
        </section>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default EmployeeDetailDiksha;
