import "../styles/shop-categories.css";
import ShopCategoriesCard from "./ShopCategoriesCard";
const ShopCategories = () => {
  return (
    <div className="shop-categories">
      <div className="shop-categories-container">
        {Array.from({ length: 5 }).map((_, index) => (
          <ShopCategoriesCard key={index} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ShopCategories;
