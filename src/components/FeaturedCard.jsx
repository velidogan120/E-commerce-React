const FeaturedCard = ({ imageUrl }) => {
  return (
    <div className="featured-card">
      <img src={imageUrl} alt="Featured" />
      <div className="featured-card-content">
        <h3>Top Product Of the Week</h3>
        <button className="featured-card-button btn">EXPLORE ITEMS</button>
      </div>
    </div>
  );
};

export default FeaturedCard;
