import { useState } from "react";
import contactImg from "../../images/contactImg.avif";
import "./Contact.css";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    setText(false);
    setEmail(0);
    if (!e.target[1].value) {
      if (!e.target[2].value) {
        setText(true);
      }
      setEmail(1);
      return;
    }
    if (!ValidateEmail(e.target[1].value)) {
      if (!e.target[2].value) {
        setText(true);
      }
      setEmail(2);
      return;
    }
    if (!e.target[2].value) {
      setText(true);
      return;
    }

    setSubmitted(true);
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
            <form onSubmit={(e) => handleClick(e)}>
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
                {email === 1 && <p>This field is required</p>}
                {email === 2 && <p>Please enter a valid email address</p>}
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
                {text && <p>This field is required</p>}
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
