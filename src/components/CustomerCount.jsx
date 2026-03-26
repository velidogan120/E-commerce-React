import "../styles/customer-count.css";
const CustomerCount = () => {
  return (
    <div className="customer-count">
      <div className="count-item">
        <h3>15K</h3>
        <p>Happy Customers</p>
      </div>
      <div className="count-item">
        <h3>150K</h3>
        <p>Monthly Visitors</p>
      </div>
      <div className="count-item">
        <h3>15</h3>
        <p>Countries Worldwide</p>
      </div>
      <div className="count-item">
        <h3>100+</h3>
        <p>Top Partners</p>
      </div>
    </div>
  );
};

export default CustomerCount;
