import FeaturedProduct from "./FeaturedProduct";
import "../styles/filtered-products.css";
import { useEffect, useState } from "react";
const FilteredProducts = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="filtered-products">
      {Array.from({ length: 4 }).map((_, index) => (
        <FeaturedProduct key={index} index={index} />
      ))}
      {isMenuOpen &&
        Array.from({ length: 2 }).map(() =>
          Array.from({ length: 4 }).map((_, index) => (
            <FeaturedProduct key={index} index={index} />
          )),
        )}
    </div>
  );
};

export default FilteredProducts;
