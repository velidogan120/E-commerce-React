import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import "../../styles/trial.css";
const Trial = () => {
  return (
    <div className="trial">
      <h3>Start your 14 days free trial</h3>
      <p>
        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
        RELIT official consequent.
      </p>
      <button className="btn trial-btn">Start free trial</button>
      <div className="trial-icons">
        <a href="#" title="Instagram">
          <Twitter fill="currentColor" className="text-sky-500" size={30} />
        </a>
        <a href="#" title="Youtube">
          <Facebook fill="currentColor" className="text-slate-600" size={30} />
        </a>
        <a href="#" title="Facebook">
          <Instagram size={30} />
        </a>
        <a href="#" title="Twitter">
          <Linkedin className="text-sky-600" size={30} />
        </a>
      </div>
    </div>
  );
};

export default Trial;
