import { Book, BookOpen, Circle, TrendingUp } from "lucide-react";
import "../styles/best-services.css";
const BestServices = () => {
  return (
    <div className="best-services-container">
      <div className="best-services">
        <div className="common-header">
          <h4>Featured Products</h4>
          <h2>BESTSELLER PRODUCTS</h2>
          <p>Problems trying to resolve the conflict between </p>
        </div>
        <div className="best-services-info">
          <div className="best-services-card">
            <div className="flex flex-col items-center">
              <Circle size={24} fill="currentColor" />
              <BookOpen size={70} fill="currentColor" />
            </div>
            <h3>Easy Wins</h3>
            <p>Get your best looking smile now!</p>
          </div>
          <div className="best-services-card">
            <Book size={70} />
            <h3>Concrete</h3>
            <p>
              Defalcate is most focused in helping you discover your most
              beautiful smile
            </p>
          </div>
          <div className="best-services-card">
            <TrendingUp size={70} />
            <h3>Hack Growth</h3>
            <p>Overcame any hurdle or any other problem.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestServices;
