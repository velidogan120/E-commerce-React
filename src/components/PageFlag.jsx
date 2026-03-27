import { useLocation } from "react-router";
import "../styles/page-flag.css";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const flagData = {
  home: {
    badge: "SUMMER 2020",
    header: "NEW COLLECTION",
    text: "We know how large objects will act, but things on a small scale.",
    buttonText: "SHOP NOW",
    imageSrc: "./home-page/flag-girl.png",
  },
  about: {
    badge: "ABOUT COMPANY",
    header: "ABOUT US",
    text: "We know how large objects will act, but things on a small scale",
    buttonText: "Get Quote Now",
    imageSrc: "/about/about-1.png",
  },
  contact: {
    badge: "CONTACT US",
    header: "Get in touch today!",
    text: "We know how large objects will act, but things on a small scale",
    imageSrc: "/contact/contact-1.png",
    phone: "Phone ; +451 215 215 ",
    fax: "Fax ; +451 215 215 ",
  },
};
const PageFlag = () => {
  const location = useLocation();
  const data = flagData[location.pathname.split("/")[1]] || flagData.home;
  return (
    <div className={`flag ${data.badge !== "SUMMER 2020" ? "other" : ""}`}>
      <div className="flag-container">
        <div className="flag-content">
          <p className="flag-badge">{data.badge}</p>
          <h1 className="flag-header">{data.header}</h1>
          <p className="flag-text">{data.text}</p>
          {data.badge !== "CONTACT US" && (
            <button className="btn flag-button">{data.buttonText}</button>
          )}
          {data.badge === "CONTACT US" && (
            <div className="contact-info">
              <p>{data.phone}</p>
              <p>{data.fax}</p>
              <div className="contact-icons">
                <a href="#" title="Instagram">
                  <Twitter fill="currentColor" size={30} />
                </a>
                <a href="#" title="Youtube">
                  <Facebook fill="currentColor" size={30} />
                </a>
                <a href="#" title="Facebook">
                  <Instagram size={30} />
                </a>
                <a href="#" title="Twitter">
                  <Linkedin size={30} />
                </a>
              </div>
            </div>
          )}
        </div>

        <div className="flag-image">
          <div className="small-circle-1"></div>
          <div className="small-circle-2"></div>
          <div className="medium-circle"></div>
          <div className="large-circle"></div>
          <div className="big-circle"></div>
          <img src={data.imageSrc} alt={data.header} />
        </div>
      </div>
    </div>
  );
};

export default PageFlag;
