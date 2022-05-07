import { useState } from "react";
import contactImg from "../../images/contactImg.avif";
import "./Contact.css";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState({ email: "valid", text: "valid" });

  const handleClick = (e) => {
    e.preventDefault();
    let isEmailValid = "valid";
    let isTextValid = "valid";
    // setEmail(0);
    if (!ValidateEmail(e.target[1].value)) {
      isEmailValid = "validnt";
    }
    if (!e.target[1].value) {
      isEmailValid = "empty";
    }
    if (!e.target[2].value) {
      isTextValid = "empty";
    }

    setValid({ email: isEmailValid, text: isTextValid });

    if (isEmailValid === "valid" && isTextValid === "valid") {
      setSubmitted(true);
    }
  };

  function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    return false;
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="form">
          <h2>Let's talk</h2>
          {submitted ? (
            <div className="sumbit-box">Thank You!</div>
          ) : (
            <form onSubmit={handleClick}>
              <div className="name">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your name" />
              </div>
              <div className="email">
                <label htmlFor="email">Your email*</label>
                <input
                  type="text"
                  id="email"
                  placeholder="Your email address"
                />
                {valid.email === "empty" && <p>This field is required</p>}
                {valid.email === "validnt" && (
                  <p>Please enter a valid email address</p>
                )}
              </div>
              <div className="text">
                <label htmlFor="message">Message*</label>
                <textarea
                  name=""
                  id="message"
                  cols="30"
                  rows="3"
                  placeholder="Enter your message"
                ></textarea>
                {valid.text === "empty" && <p>This field is required</p>}
              </div>
              <button type="submit">Submit</button>
            </form>
          )}
        </div>
        <img src={contactImg} alt="" />
      </div>
    </section>
  );
};

export default Contact;
