import "../styles/about-brands.css";
import Brands from "./Brands";
const AboutBrands = () => {
  return (
    <div className="about-brands">
      <div className="about-brands-container">
        <div className="common-title">
          <h3>Big Companies Are Here</h3>
          <p>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
        <Brands />
      </div>
    </div>
  );
};

export default AboutBrands;
