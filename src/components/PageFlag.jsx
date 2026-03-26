import { useLocation } from "react-router";
import "../styles/page-flag.css";

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
          <button className="btn flag-button">{data.buttonText}</button>
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
