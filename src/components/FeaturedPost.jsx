import "../styles/featured-post.css";
import {
  BarChart3,
  ChevronRight,
  Circle,
  Download,
  Eye,
  Heart,
  Layers,
  ShoppingCart,
  Star,
} from "lucide-react";

const FeaturedPost = ({ index }) => {
  return (
    <div className="featured-posts-card">
      <div className="featured-posts-card-image">
        <div className="featured-posts-card-badge">SALE</div>
        <img
          src={`./featured-posts/featured-post-${index + 1}.jpg`}
          alt={`Featured Post ${index + 1}`}
        />
        <div className="featured-posts-card-icons">
          <div>
            <Heart />
          </div>
          <div>
            <ShoppingCart />
          </div>
          <div>
            <Eye />
          </div>
        </div>
      </div>

      <div className="featured-posts-card-info">
        <div className="featured-posts-card-info-badge">
          <h5>English Department</h5>
          <div>
            <Star size={12} fill="currentColor" className="text-amber-400" />
            4.9
          </div>
        </div>
        <h4>Graphic Design</h4>
        <p>
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </p>
        <div className="hidden lg:flex lg:flex-col lg:gap-5 mt-4">
          <p className="featured-posts-card-info-download">
            <Download strokeWidth={3} /> 15 Sales
          </p>
          <div className="price">
            <p className="price-old">$16.48</p>
            <p className="price-new">$6.48</p>
          </div>
          <div className="card-colors">
            <Circle fill="currentColor" className="text-sky-500" />
            <Circle fill="currentColor" className="text-teal-700" />
            <Circle fill="currentColor" className="text-orange-400" />
            <Circle fill="currentColor" className="text-slate-800" />
          </div>
        </div>
        <div className="featured-posts-card-info-stats">
          <div>
            <Layers className="text-orange-400" /> 64 Lessons
          </div>
          <div>
            <BarChart3 className="text-teal-700" /> Progress
          </div>
        </div>
        <button className="btn featured-posts-card-info-btn">
          Learn More <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default FeaturedPost;
