import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Brands from "../components/Brands";
import FilteredProducts from "../components/FilteredProducts";
import Pagination from "../components/Pagination";
import ShopCategories from "../components/ShopCategories";
import Sort from "../components/Sort";
import { useProducts } from "../hooks/useProducts";
import { setProducts, setTotal } from "../lib/store/slices/productSlice";
import Loading from "../components/shared/Loading";

const ShopPage = () => {
  const dispatch = useDispatch();
  const { categoryId, filter, limit, offset, sort } = useSelector(
    (state) => state.product,
  );
  const { data, isPending } = useProducts({
    categoryId,
    filter,
    limit,
    offset,
    sort,
  });

  useEffect(() => {
    if (!data) {
      return;
    }

    dispatch(setProducts(data.products ?? []));
    dispatch(setTotal(data.total ?? 0));
  }, [data, dispatch]);

  if (isPending) {
    return <Loading />;
  }
  return (
    <>
      <ShopCategories />
      <Sort />
      <FilteredProducts />
      <Pagination />
    </>
  );
};

export default ShopPage;
