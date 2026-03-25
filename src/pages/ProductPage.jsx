import { useParams } from "react-router";
import Product from "../components/Product";
import ProductDescription from "../components/ProductDescription";
import FeaturedProducts from "../components/FeaturedProducts";

const ProductPage = () => {
  const { id } = useParams();

  return (
    <>
      <Product productId={id} />
      <ProductDescription />
      <FeaturedProducts />
    </>
  );
};

export default ProductPage;
