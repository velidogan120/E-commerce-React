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
import { useSearchParams } from "react-router";

const ShopPage = () => {
  const dispatch = useDispatch();
  const { categoryId, filter, limit, offset, sort } = useSelector(
    (state) => state.product,
  );
  const [, setSearchParams] = useSearchParams();
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
    if (!!categoryId || !!filter || !!sort) {
      setSearchParams({
        limit: limit,
        offset: offset,
        categoryId: categoryId,
        filter: filter,
        sort: sort,
      });
    }

    dispatch(setProducts(data.products ?? []));
    dispatch(setTotal(data.total ?? 0));
  }, [
    data,
    dispatch,
    categoryId,
    filter,
    sort,
    setSearchParams,
    limit,
    offset,
  ]);

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
