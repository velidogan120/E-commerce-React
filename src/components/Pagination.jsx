import "../styles/pagination.css";

const Pagination = () => {
  return (
    <div className="pagination">
      <button className="pagination-btn passive">First</button>
      <button className="pagination-btn">1</button>
      <button className="pagination-btn active">2</button>
      <button className="pagination-btn">3</button>
      <button className="pagination-btn">Next</button>
    </div>
  );
};

export default Pagination;
