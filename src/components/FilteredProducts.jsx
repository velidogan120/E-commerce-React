import { useSelector } from "react-redux";
import "../styles/filtered-products.css";
import FeaturedProduct from "./FeaturedProduct";
const FilteredProducts = () => {
  const products = useSelector((state) => state.product.products);

  const displayedProducts =
    products?.length > 0 ? products : "Bu kategoride ürün bulunmamaktadır.";

  return (
    <div className="filtered-products">
      {Array.isArray(displayedProducts) ? (
        displayedProducts.map((product, index) => (
          <FeaturedProduct key={product?.id ?? index} product={product} />
        ))
      ) : (
        <p className="filtered-products__empty">{displayedProducts}</p>
      )}
    </div>
  );
};

export default FilteredProducts;
