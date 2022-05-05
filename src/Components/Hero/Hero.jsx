import heroImage from "../../images/Mask.avif";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__image">
          <img src={heroImage} alt="" />
        </div>
        <div className="hero__content">
          <h1>Hi, I am Brooke, a project manager</h1>
          <div className="hero__links">
            <a href="https://linkedin.com/" target="_blank">
              Linkedin
            </a>{" "}
            /{" "}
            <a href="https://facebook.com/" target="_blank">
              Facebook
            </a>{" "}
            /{" "}
            <a href="https://twitter.com/" target="_blank">
              Twitter
            </a>
          </div>
          <div className="hero__btn">
            <a href="mailto:your@mail.com">Email me</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
