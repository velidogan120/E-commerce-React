import { Phone } from "lucide-react";
import "../styles/contact-card.css";
const ContactCard = ({ index }) => {
  return (
    <div className={`contact-card ${index === 1 ? "contact-card-active" : ""}`}>
      <Phone size={72} className="contact-card-icon" />
      <p className="e-mail">georgia.young@example.com</p>
      <p className="personal-mail">georgia.young@ple.com</p>
      <p className="contact-card-description">Get Support</p>
      <button className="btn contact-card-button">Submit Request</button>
    </div>
  );
};
export default ContactCard;
