import { useEffect } from "react";
import { useDispatch } from "react-redux";
import BestServices from "../components/BestServices";
import Brands from "../components/Brands";
import FeaturedCards from "../components/FeaturedCards";
import FeaturedPosts from "../components/FeaturedPosts";
import FeaturedProducts from "../components/FeaturedProducts";
import FeaturedProductsInfo from "../components/FeaturedProductsInfo";
import PageFlag from "../components/PageFlag";
import { useProducts } from "../hooks/useProducts";
import { setProducts, setTotal } from "../lib/store/slices/productSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const { data } = useProducts();

  useEffect(() => {
    if (!data) {
      return;
    }

    dispatch(setProducts(data.products ?? []));
    dispatch(setTotal(data.total ?? 0));
  }, [data, dispatch]);

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
