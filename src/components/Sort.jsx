import { Grid2x2, LayoutGrid, List } from "lucide-react";
import "../styles/sort.css";
import { useTheme } from "../hooks/useTheme";
const Sort = () => {
  const { theme } = useTheme();
  return (
    <div className="sort">
      <div>
        <p>Showing all 12 results</p>
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
        >
          <option>Popularity</option>
          <option>low to high</option>
          <option>high to low</option>
        </select>
        <button className="btn sort-filter-btn">Filter</button>
      </div>
    </div>
  );
};

export default Sort;
