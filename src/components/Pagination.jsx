import { useDispatch, useSelector } from "react-redux";
import "../styles/pagination.css";
import { setOffset } from "../lib/store/slices/productSlice";

const getVisiblePages = (currentPage, pageCount) => {
  if (pageCount <= 7) {
    return Array.from({ length: pageCount }, (_, i) => i + 1);
  }

  if (currentPage <= 2) {
    return [1, 2, 3, "ellipsis", pageCount - 1, pageCount];
  }

  if (currentPage >= pageCount - 2) {
    return [1, 2, "ellipsis", pageCount - 2, pageCount - 1, pageCount];
  }

  return [
    1,
    "ellipsis-left",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "ellipsis-right",
    pageCount,
  ];
};

const Pagination = () => {
  const { total, limit, offset } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const pageCount = Math.ceil(total / limit);
  const currentPage = Math.floor(offset / limit) + 1;
  const maxOffset = Math.max(0, (pageCount - 1) * limit);
  const visiblePages = getVisiblePages(currentPage, pageCount);

  if (pageCount <= 1) {
    return null;
  }

  return (
    <div className="pagination">
      <button
        className={`pagination-nav-first ${offset === 0 ? "disabled" : ""}`}
        onClick={() => dispatch(setOffset(Math.max(0, offset - limit)))}
        disabled={offset === 0}
      >
        Previous
      </button>

      <div className="pagination-pages">
        {visiblePages.map((page, index) => {
          if (String(page).includes("ellipsis")) {
            return (
              <span className="pagination-ellipsis" key={`${page}-${index}`}>
                ...
              </span>
            );
          }

          const isActive = currentPage === page;

          return (
            <button
              key={page}
              className={`pagination-page ${isActive ? "active" : ""}`}
              onClick={() => dispatch(setOffset((page - 1) * limit))}
              aria-current={isActive ? "page" : undefined}
            >
              {page}
            </button>
          );
        })}
      </div>

      <button
        className={`pagination-nav-last ${offset >= maxOffset ? "disabled" : ""}`}
        onClick={() => dispatch(setOffset(Math.min(maxOffset, offset + limit)))}
        disabled={offset >= maxOffset}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
