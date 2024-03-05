import React from "react";
import './workCard.css';
import gfg from "../../assets/work/gfg.png";
const WorkCard = () => {
  return (
    <>
      <div className="work-card">
        <div className="company-logo">
          <img src={gfg} alt="Company Logo" />
        </div>
        <div className="company-info">
          <h2>Company Name</h2>
          <p>Software Engineer</p>
          <p> January 2020 - Present</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nullam feugiat massa vitae ligula consequat, vel suscipit nisi
            gravida.
          </p>
          <p>skills</p>
        </div>
      </div>
    </>
  );
};

export default WorkCard;
