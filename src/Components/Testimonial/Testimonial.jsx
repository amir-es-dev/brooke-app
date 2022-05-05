import "./Testimonial.css";
import JeremyImg from "../../images/Jeremy.avif";
import LianneImg from "../../images/Lianne.avif";

const Testimonial = () => {
  return (
    <section id="testimonial" className="testimonial">
      <div className="container">
        <h2>What they say:</h2>
        <div className="jeremy__testimonial">
          <div>
            <img src={JeremyImg} alt="" />
          </div>
          <div>
            <h6>― JEREMY WATSON</h6>
            <p>
              We've worked on many projects together with Brooke at Stilltech,
              and she's a true asset to any team. She's a team player, but think
              on her feet and never settles for a no. Her ambition and passion
              for what she does is uncanny, and it's been a pleasure to see her
              progress and grow more confident in her professional role over
              time. I thoroughly recommend her for any leadership or project
              management roles.
            </p>
          </div>
        </div>
        <div className="lianne__testimonial">
          <div>
            <img src={LianneImg} alt="" />
          </div>
          <div>
            <h6>― LIANNE HAYES</h6>
            <p>
              Brooke was my manager at Yeall & Co and taught me everything I
              know about project management. As an intern, she never treated me
              differently from other team members – instead, she whole-heartedly
              embraced my ideas and input. She helped me to think about the
              bigger picture and implement strategy into my everyday work, but
              also showed me how to bring people together and unite them for a
              single goal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
