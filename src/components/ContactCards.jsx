import "../styles/contact-cards.css";
import ContactCard from "./ContactCard";
const ContactCards = () => {
  return (
    <div className="contact-cards">
      <div className="contact-cards-header">
        <p>VISIT OUR OFFICE</p>
        <h3>We help small businesses with big ideas</h3>
      </div>
      <div className="contact-cards-container">
        {Array.from({ length: 3 }).map((_, index) => (
          <ContactCard key={index} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ContactCards;
