import { ChevronRight } from "lucide-react";
import { NavLink, useLocation } from "react-router";
import "../../styles/breadcrumb.css";

const breadcrumbData = {
  shop: {
    title: "Shop",
    path: "Shop",
  },
  price: {
    title: "Simple Pricing",
    info: "PRICING",
    path: "Pricing",
  },
};
const Breadcrumb = () => {
  const location = useLocation();
  const currentPath = location.pathname.split("/")[1];
  return (
    <div className={`breadcrumb ${currentPath !== "shop" ? "other" : ""}`}>
      <div className="breadcrumb-container">
        {breadcrumbData[currentPath]?.info && (
          <p className="breadcrumb-info-text">
            {breadcrumbData[currentPath].info}
          </p>
        )}
        <h2>{breadcrumbData[currentPath]?.title || "Shop"}</h2>
        <div className="breadcrumb-info">
          <NavLink to="/" className="breadcrumb-link">
            Home
          </NavLink>
          <span className="breadcrumb-separator">
            <ChevronRight />
          </span>
          <NavLink to="/shop" className="breadcrumb-link">
            {breadcrumbData[currentPath]?.path || "SHOP"}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
