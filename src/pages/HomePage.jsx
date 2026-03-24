import BestServices from "../components/BestServices";
import Brands from "../components/Brands";
import FeaturedCards from "../components/FeaturedCards";
import FeaturedPosts from "../components/FeaturedPosts";
import FeaturedProducts from "../components/FeaturedProducts";
import FeaturedProductsInfo from "../components/FeaturedProductsInfo";
import PageFlag from "../components/PageFlag";

const HomePage = () => {
  return (
    <>
      <PageFlag />
      <Brands />
      <FeaturedCards />
      <FeaturedProducts />
      <FeaturedProductsInfo />
      <BestServices />
      <FeaturedPosts />
    </>
  );
};

export default HomePage;
