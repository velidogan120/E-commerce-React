import { Facebook, Instagram, Twitter } from "lucide-react";
import "../styles/employee.css";
const Employee = ({ index }) => {
  return (
    <div className="employee">
      <img src={`/team/team-${index + 1}.jpg`} alt={`Employee ${index + 1}`} />
      <div className="employee-content">
        <h4>Username</h4>
        <p>Profession</p>
        <div className="employee-social-icons">
          <Facebook fill="currentColor" />
          <Instagram />
          <Twitter fill="currentColor" />
        </div>
      </div>
    </div>
  );
};

export default Employee;
