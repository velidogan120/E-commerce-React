import { ChevronLeft, ChevronRight } from "lucide-react";
import { NavLink, useLocation, useNavigate } from "react-router";
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
  const navigate = useNavigate();
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
          {location.pathname.includes("/products/") && (
            <button className="breadcrumb-back" onClick={() => navigate(-1)}>
              <ChevronLeft />
              Geri Git
            </button>
          )}
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
