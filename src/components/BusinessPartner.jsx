import "../styles/business-partner.css";
const BusinessPartner = () => {
  return (
    <div className="business-partner">
      <div className="business-partner-container">
        <div className="business-partner-content">
          <p className="business-partner-badge">WORK WITH US</p>
          <h1 className="business-partner-header">Now Let’s grow Yours</h1>
          <p className="business-partner-text">
            The gradual accumulation of information about atomic and small-scale
            behavior during the first quarter of the 20th
          </p>
          <button className="btn business-partner-button">Button</button>
        </div>

        <div className="business-partner-image">
          <img src="/about/about-2.jpg" />
        </div>
      </div>
    </div>
  );
};

export default BusinessPartner;
