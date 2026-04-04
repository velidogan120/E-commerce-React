import "../styles/shop-categories-card.css";

const ShopCategoriesCard = ({ index }) => {
  return (
    <div className="shop-categories-card">
      <img
        src={`/shop/shop-${index + 1}.jpg`}
        alt={`Shop Category ${index + 1}`}
      />
      <div>
        <h5>CLOTHS</h5>
        <p>5 Items</p>
      </div>
    </div>
  );
};

export default ShopCategoriesCard;
