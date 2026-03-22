import "../styles/featured-posts.css";

import FeaturedPost from "./FeaturedPost";
const FeaturedPosts = () => {
  return (
    <div className="featured-posts-container">
      <div className="featured-posts">
        <div className="common-title">
          <h4>Practice Advice</h4>
          <h3>Featured Posts</h3>
        </div>
        <div className="featured-posts-list">
          {Array.from({ length: 2 }).map((_, index) => (
            <FeaturedPost key={index} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
