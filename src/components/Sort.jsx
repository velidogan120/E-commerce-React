import { LayoutGrid, List } from "lucide-react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "../hooks/useTheme";
import { setFilter, setSort } from "../lib/store/slices/productSlice";
import "../styles/sort.css";
const Sort = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const { total, sort, filter } = useSelector((state) => state.product);
  const { register, handleSubmit } = useForm({
    defaultValues: { sort: sort, search: filter },
  });
  const onSubmit = (data) => {
    dispatch(setSort(data.sort));
    dispatch(setFilter(data.search));
  };
  return (
    <div className="sort">
      <div>
        <p>Showing all {total} results</p>
      </div>
      <div>
        <p>Views:</p>
        <button>
          <LayoutGrid
            fill={`${theme === "dark" ? "#fff" : "#000"}`}
            className="icon-grid"
          />
        </button>
        <button>
          <List />
        </button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="form-sort">
        <select
          className="sort-select"
          type="text"
          placeholder="Sort by latest"
          defaultValue={sort}
          {...register("sort")}
        >
          <option value="">Sort by latest</option>
          <option value="price:asc">Low to high</option>
          <option value="price:desc">High to low</option>
          <option value="rating:asc">Rating: lowest first</option>
          <option value="rating:desc">Rating: highest first</option>
        </select>
        <input
          type="text"
          placeholder="Search products..."
          className="sort-search"
          {...register("search")}
        />
        <button className="btn sort-filter-btn">Filter</button>
      </form>
    </div>
  );
};

export default Sort;
