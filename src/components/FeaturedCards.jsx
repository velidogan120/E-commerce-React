import "../styles/featured-cards.css";
import FeaturedCard from "./FeaturedCard";
const FeaturedCards = () => {
  return (
    <div className="featured-cards-container">
      <div className="featured-cards">
        <div className="featured-cards-left">
          <FeaturedCard imageUrl="./featured-cards/featured-card-1.png" />
        </div>
        <div className="featured-cards-right">
          <FeaturedCard imageUrl="./featured-cards/featured-card-2.png" />
          <FeaturedCard imageUrl="./featured-cards/featured-card-3.png" />
        </div>
      </div>
    </div>
  );
};

export default FeaturedCards;
