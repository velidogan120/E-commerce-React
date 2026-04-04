import { useSelector } from "react-redux";
import "../styles/filtered-products.css";
import FeaturedProduct from "./FeaturedProduct";
const FilteredProducts = () => {
  const products = useSelector((state) => state.product.products);

  const displayedProducts =
    products?.length > 0 ? products : Array.from({ length: 4 }, () => null);

  return (
    <div className="filtered-products">
      {displayedProducts.map((product, index) => (
        <FeaturedProduct key={product?.id ?? index} product={product} />
      ))}
    </div>
  );
};

export default FilteredProducts;
