import Brands from "../components/Brands";
import FilteredProducts from "../components/FilteredProducts";
import Pagination from "../components/Pagination";
import ShopCategories from "../components/ShopCategories";
import Sort from "../components/Sort";

const ShopPage = () => {
  return (
    <>
      <ShopCategories />
      <Sort />
      <FilteredProducts />
      <Pagination />
      <Brands />
    </>
  );
};

export default ShopPage;
