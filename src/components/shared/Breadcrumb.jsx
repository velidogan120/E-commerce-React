import { ChevronRight } from "lucide-react";
import { NavLink } from "react-router";
import "../../styles/breadcrumb.css";
const Breadcrumb = () => {
  return (
    <div className="breadcrumb">
      <div className="breadcrumb-container">
        <h2>Shop</h2>
        <div className="breadcrumb-info">
          <NavLink to="/" className="breadcrumb-link">
            Home
          </NavLink>
          <span className="breadcrumb-separator">
            <ChevronRight />
          </span>
          <NavLink to="/shop" className="breadcrumb-link">
            Shop
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
