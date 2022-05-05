import image1 from "../../images/Mask-1.avif";
import image2 from "../../images/Mask-2.avif";
import image3 from "../../images/Mask-3.avif";
import "./Pics.css";

const Pics = () => {
  return (
    <section className="pics">
      <img src={image1} alt="" />
      <img src={image2} alt="" />
      <img src={image3} alt="" />
    </section>
  );
};

export default Pics;
