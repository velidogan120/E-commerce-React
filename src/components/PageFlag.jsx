import "../styles/page-flag.css";

const PageFlag = () => {
  return (
    <div className="flag">
      <div className="flag-container">
        <div className="flag-content">
          <p className="flag-badge">SUMMER 2020</p>
          <h1 className="flag-header">NEW COLLECTION</h1>
          <p className="flag-text">
            We know how large objects will act, but things on a small scale.
          </p>
          <button className="btn flag-button">SHOP NOW</button>
        </div>

        <div className="flag-image">
          <div className="small-circle-1"></div>
          <div className="small-circle-2"></div>
          <div className="medium-circle"></div>
          <div className="large-circle"></div>
          <div className="big-circle"></div>
          <img src="./home-page/flag-girl.png" />
        </div>
      </div>
    </div>
  );
};

export default PageFlag;
