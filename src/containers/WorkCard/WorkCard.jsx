import React from "react";
import './workCard.css';



const WorkCard = ({workItem}) => {
  return (
    <>
      <div className="work-card">
        <div className="company-logo">
          <img src={workItem.image} alt="Company Logo" />
        </div>
        <div className="company-info">
          <h2>{workItem.name}</h2>
          <p>{workItem.position}</p>
          <p> {workItem.time}</p>
          <p>{workItem.description}</p>
          <p><span className="workCard-skill">Skills :  </span>{workItem.skills}</p>
        </div>
      </div>
    </>
  );
};

export default WorkCard;
