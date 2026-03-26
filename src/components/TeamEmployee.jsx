import "../styles/team-employee.css";
import Employee from "./Employee";
const TeamEmployee = () => {
  return (
    <div className="team-container">
      <div className="team-header">
        <div className="common-title">
          <h3>Meet Our Team</h3>
          <p>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
      </div>
      <div className="employees">
        {Array.from({ length: 3 }).map((_, index) => (
          <Employee key={index} index={index} />
        ))}
      </div>
    </div>
  );
};

export default TeamEmployee;
