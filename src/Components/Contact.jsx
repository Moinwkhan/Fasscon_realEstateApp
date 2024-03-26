import React, { useState } from "react";
import contactimg from "../images/contact-img.svg";

function Contact() {
  const [faqData, setFaqData] = useState([
    {
      question: "How can I cancel my booking?",
      answer:
        "To cancel your booking, please contact our customer support at 123-456-7890 or email us at support@example.com.",
      isOpen: false,
    },
    {
      question: "When will I get the possession of my property?",
      answer:
        "The possession date of your property depends on the completion status of the project. Please contact the developer for detailed information.",
      isOpen: false,
    },
    {
      question: "Where can I pay my rent?",
      answer:
        "Rent payments can be made through our online portal or by visiting our office located at 123 Main Street, City Name.",
      isOpen: false,
    },
    {
      question: "How can I contact potential buyers?",
      answer:
        "You can contact potential buyers by using our messaging platform on the website or by sharing your contact information in your property listing.",
      isOpen: false,
    },
    {
      question: "Why is my listing not showing up?",
      answer:
        "Your listing may not be showing up due to various reasons such as incomplete information, violation of guidelines, or technical issues. Please contact our support team for assistance.",
      isOpen: false,
    },
    {
      question: "How can I promote my listing?",
      answer:
        "You can promote your listing by upgrading to a premium package, sharing it on social media, or using our featured listings option. Contact our team for more details.",
      isOpen: false,
    },
  ]);

  const toggleFAQ = (index) => {
    const updatedFaqData = faqData.map((faq, i) =>
      i === index ? { ...faq, isOpen: !faq.isOpen } : { ...faq, isOpen: false }
    );
    setFaqData(updatedFaqData);
  };

  return (
    <div>
      <div>
        <section className="contact">
          <div className="row">
            <div className="image">
              <img src={contactimg} alt="Contact Us" />
            </div>
            <form action="" method="post">
              <h3>Contact Us</h3>
              <input
                type="text"
                name="name"
                required
                maxLength={50}
                placeholder="Enter your name"
                className="box"
              />
              <input
                type="email"
                name="email"
                required
                maxLength={50}
                placeholder="Enter your email"
                className="box"
              />
              <input
                type="tel"
                name="number"
                required
                maxLength={10}
                placeholder="Enter your number"
                className="box"
              />
              <textarea
                name="message"
                placeholder="Enter your message"
                required
                maxLength={1000}
                cols={30}
                rows={10}
                className="box"
                defaultValue={""}
              />
              <input
                type="submit"
                defaultValue="Send Message"
                name="send"
                className="btn"
                value="submit"
              />
            </form>
          </div>
        </section>
        <section className="faq" id="faq">
          <h1 className="heading">FAQ</h1>
          <div className="accordion accordion-flush" id="accordionFlushExample">
            {faqData.map((item, index) => (
              <div className="accordion-item" key={index}>
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button ${
                      item.isOpen ? "" : "collapsed"
                    }`}
                    style={{fontSize:"2rem"}}
                    type="button"
                    onClick={() => toggleFAQ(index)}
                  >
                    {item.question}
                  </button>
                </h2>
                <div
                  className={`accordion-collapse collapse ${
                    item.isOpen ? "show" : ""
                  }`}
                  aria-labelledby={`flush-heading${index}`}
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">{item.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* <section className="faq" id="faq">
          <h1 className="heading">FAQ</h1>
          <div className="box-container">
            {faqData.map((item, index) => (
              <div className="box" key={index}>
                <h3 onClick={() => toggleFAQ(index)}>
                  <span>{item.question}</span>
                  <i
                    className={`fas fa-angle-${item.isOpen ? "up" : "down"}`}
                  />
                </h3>
                {item.isOpen && <p>{item.answer}</p>}
              </div>
            ))}
          </div>
        </section> */}
      </div>
    </div>
  );
}

export default Contact;
