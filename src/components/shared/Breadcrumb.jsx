import { ChevronRight } from "lucide-react";
import { NavLink, useLocation } from "react-router";
import "../../styles/breadcrumb.css";

const breadcrumbData = {
  shop: {
    title: "Shop",
    path: "Shop",
  },
  product: {
    path: "Shop",
  },
  price: {
    title: "Simple Pricing",
    info: "PRICING",
    path: "Pricing",
  },
  team: {
    title: "Innovation tailored for you",
    info: "WHAT WE DO",
    path: "Team",
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
        {!location.pathname.startsWith("/shop/") && (
          <h2>{breadcrumbData[currentPath]?.title || "Shop"}</h2>
        )}
        <div className="breadcrumb-info">
          <NavLink to="/" className="breadcrumb-link">
            Home
          </NavLink>
          <span className="breadcrumb-separator">
            <ChevronRight className="text-neutral-500" />
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
