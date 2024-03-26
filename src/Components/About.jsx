import React from "react";
import { Link } from "react-router-dom";
import step1 from "../images/step-1.png";
import step2 from "../images/step-2.png";
import step3 from "../images/step-3.png";

function About() {
  return (
    <div>
      <section className="about">
        <div className="row">
          <div className="image">
            <img
              src="https://www.apifirst.in/wp-content/uploads/2021/05/about.png"
              alt="About Us"
            />
          </div>
          <div className="content">
            <h2>Welcome to Our Real Estate Agency</h2>
            <p>
              At Futuro Avenue Estate, we strive to provide our clients with the
              best possible real estate experience. Our team of experienced
              agents is dedicated to helping you find the perfect property,
              whether you are looking for a new home or an investment
              opportunity.
            </p>
            <p>
              With years of experience in the local market, we have the
              knowledge and expertise to guide you through the buying or selling
              process with ease. Contact us today to learn more about how we can
              help you achieve your real estate goals.
            </p>
            <Link to="/contact" className="inline-btn">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      {/* about section ends */}
      {/* steps section starts  */}
      <section className="steps">
        <h2 className="heading">Our Simple Process</h2>
        <div className="box-container">
          <div className="box">
            <img src={step1} alt="Step 1" />
            <h3>Search Properties</h3>
            <p>
              Browse through our extensive list of properties to find the one
              that meets your needs and preferences.
            </p>
          </div>
          <div className="box">
            <img src={step2} alt="Step 2" />
            <h3>Contact Agents</h3>
            <p>
              Get in touch with our friendly agents to schedule viewings and get
              more information about the properties you are interested in.
            </p>
          </div>
          <div className="box">
            <img src={step3} alt="Step 3" />
            <h3>Enjoy Your New Property</h3>
            <p>
              Once you have found the perfect property, enjoy the process of
              making it your own and settling into your new home or investment.
            </p>
          </div>
        </div>
      </section>
      <section className="reviews">
        <h2 className="heading">Client Testimonials</h2>
        <div className="box-container">
          <div className="box">
            <div className="user">
              <img
                src="https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/IQ-Accountants-managing-partner-Kyelie-Baxter-Slack-customer-story.jpg"
                alt="Client 1"
              />
              <div>
                <h3>Emily Johnson</h3>
                <div className="stars">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star-half-alt" />
                </div>
              </div>
            </div>
            <p>
              {`"Working with Futuro Avenue Estate was a great experience. Their
              agents were knowledgeable and helpful, and they made the process
              of finding my dream home a breeze."`}
            </p>
          </div>
          <div className="box">
            <div className="user">
              <img
                src="https://thumbs.dreamstime.com/b/happy-african-american-man-showing-thumbs-up-gesture-satisfied-client-young-glasses-like-look-camera-smiling-male-student-165241106.jpg"
                alt="Client 2"
                height={50}
                width={50}
              />
              <div>
                <h3>Michael Smith</h3>
                <div className="stars">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star-half-alt" />
                </div>
              </div>
            </div>
            <p>
              {`"I highly recommend Futuro Avenue Estate to anyone looking to buy or
              sell property. Their professionalism and dedication to their
              clients are unmatched."`}
            </p>
          </div>
          <div className="box">
            <div className="user">
              <img
                src="https://img.freepik.com/free-photo/satisfied-happy-female-customer-making-like-gesture_74855-3668.jpg"
                alt="Client 3"
                height={50}
                width={50}
              />
              <div>
                <h3>Anna Williams</h3>
                <div className="stars">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star-half-alt" />
                </div>
              </div>
            </div>
            <p>
              {`"The team at Futuro Avenue Estate went above and beyond to help me find
              the perfect investment property. I couldn't be happier with the
              results."`}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
