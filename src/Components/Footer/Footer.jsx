import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <h3>Brooke R.</h3>
        <div className="content">
          <div className="footer__links">
            <h6>― SOCIALS</h6>
            <span>
              <a href="https://linkedin.com/" target="_blank">
                Linkedin
              </a>
            </span>{" "}
            <span>
              {" "}
              <a href="https://facebook.com/" target="_blank">
                Facebook
              </a>
            </span>{" "}
            <span>
              <a href="https://twitter.com/" target="_blank">
                Twitter
              </a>
            </span>
          </div>
          <div className="footer__contact">
            <h6>― CONTACTS</h6>
            <br />
            <span>
              <a href="mailto:your@mail.com">your@mail.com</a>
            </span>
            <span>
              <a href="tel:123-123-1234">123-123-1234</a>
            </span>
          </div>
        </div>
        <h6>Powered by Zyro.com</h6>
      </div>
    </footer>
  );
};

export default Footer;
