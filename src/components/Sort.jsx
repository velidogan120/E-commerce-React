import { Grid2x2, LayoutGrid, List } from "lucide-react";
import "../styles/sort.css";
import { useTheme } from "../hooks/useTheme";
import { useDispatch, useSelector } from "react-redux";
import { setSort } from "../lib/store/slices/productSlice";
const Sort = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const { total, sort } = useSelector((state) => state.product);

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
      <div>
        <select
          className="sort-select"
          type="text"
          placeholder="Sort by latest"
          defaultValue={sort}
          onChange={(e) => dispatch(setSort(e.target.value))}
        >
          <option value="">Sort by latest</option>
          <option value="price:asc">Low to high</option>
          <option value="price:desc">High to low</option>
          <option value="rating:asc">Rating: lowest first</option>
          <option value="rating:desc">Rating: highest first</option>
        </select>
        <button className="btn sort-filter-btn">Filter</button>
      </div>
    </div>
  );
};

export default Sort;
