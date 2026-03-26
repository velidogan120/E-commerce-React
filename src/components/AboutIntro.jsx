import { Play } from "lucide-react";
import "../styles/about-intro.css";
const AboutIntro = () => {
  return (
    <div className="about-intro">
      <img src="/about/about-3.jpg" />
      <div className="play-icon">
        <Play size={20} fill="currentColor" className="text-white" />
      </div>
    </div>
  );
};

export default AboutIntro;
