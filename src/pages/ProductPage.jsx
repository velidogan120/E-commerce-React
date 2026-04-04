import FeaturedProducts from "../components/FeaturedProducts";
import Product from "../components/Product";
import ProductDescription from "../components/ProductDescription";

const ProductPage = () => {
  return (
    <>
      <Product />
      <ProductDescription />
      <FeaturedProducts />
    </>
  );
};

export default ProductPage;
