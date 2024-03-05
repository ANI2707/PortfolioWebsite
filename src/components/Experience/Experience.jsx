import React from "react";
import experience from "../../assets/experience-img.svg";
import "./Experience.css";
import WorkCard from "../../containers/WorkCard/WorkCard";

const Experience = () => {
  return (
    <>
      <div className="container">
        <div className="education-left">
          <img src={experience} alt="experience-img" className="img" />
        </div>
        <div className="education-right">
          <h1>
            My Work <span className="main-name">Experience</span>
          </h1>
          Nothing ever becomes real 'til it is experienced.― John Keats
        </div>
      </div>

      <div className="work-experience">
        <h1>Work <span className="main-name">Experience</span></h1>
        <div>
          <WorkCard />
        </div>
      </div>
    </>
  );
};

export default Experience;
