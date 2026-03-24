import { useLocation } from "react-router";
import "../styles/brands.css";

const Brands = () => {
  const location = useLocation();
  return (
    <div className={`brands ${location.pathname === "/" ? "home" : "other"}`}>
      <div className="brands-container">
        {Array.from({ length: 6 }).map((_, index) => (
          <img
            src={`./brands/fa-brands-${index + 1}.png`}
            key={index}
            className="brand"
          />
        ))}
      </div>
    </div>
  );
};

export default Brands;
