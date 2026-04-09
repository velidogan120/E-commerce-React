import { useSelector } from "react-redux";
import "../styles/filtered-products.css";
import FeaturedProduct from "./FeaturedProduct";
const FilteredProducts = () => {
  const { products, viewMode } = useSelector((state) => state.product);

  const displayedProducts =
    products?.length > 0 ? products : "Bu kategoride ürün bulunmamaktadır.";

  return (
    <div
      className={`filtered-products ${viewMode === "list" ? "filtered-products--list" : "filtered-products--grid"}`}
    >
      {Array.isArray(displayedProducts) ? (
        displayedProducts.map((product, index) => (
          <FeaturedProduct
            key={product?.id ?? index}
            product={product}
            viewMode={viewMode}
          />
        ))
      ) : (
        <p className="filtered-products__empty">{displayedProducts}</p>
      )}
    </div>
  );
};

export default FilteredProducts;
