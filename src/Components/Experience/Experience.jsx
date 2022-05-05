import "./Experience.css";

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="work">
          <h6>― WORK EXPERIENCE</h6>
          <div className="work__content">
            <div className="first">
              <h5>Senior project manager</h5>
              <p>Stilltech / Aug 2018 - Present</p>
              <p>
                I’ve been central to delivering two extensive projects while
                working at Stilltech, both in the augmented reality space.
              </p>
            </div>
            <div className="second">
              <h5>Project manager</h5>
              <p>Yeall & Co / Aug 2016 - Aug 2018</p>
              <p>
                I was lucky to learn the ropes at Yeall Co., where I worked with
                an international team on projects including edible smartphone
                cases and human cloning.
              </p>
            </div>
          </div>
        </div>
        <div className="education">
          <h6>― EDUCATION</h6>
          <div className="education__content">
            <div className="first">
              <h5>Columbia University</h5>
              <p>Master's degree, International Business / 2016 - 2018</p>
            </div>
            <div className="second">
              <h5>Stanford University</h5>
              <p>Bachelor’s degree, Business Administration / 2012 - 2016</p>
            </div>
          </div>
        </div>
        <div className="course">
          <h6>― COURSES</h6>
          <div className="course__content">
            <div className="first">
              <h5>Agile methodology</h5>
              <p>Spaetzle Institute / 2016</p>
            </div>
            <div className="second">
              <h5>Project management methodologies</h5>
              <p>Knödl Labs / 2017</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
