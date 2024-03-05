import React from "react";
import "./Experience.css";
import experience from "../../assets/experience-img.svg";
import WorkCard from "../../containers/WorkCard/WorkCard";
import elite from "../../assets/work/elite.jpeg";
import gfg from "../../assets/work/gfg.png";
import social from "../../assets/work/social.jpeg";

const Experience = () => {
  const workDetails = [
    {
      name: "Elite Software",
      position: "Python Intern",
      time: "Nav 2022 - Feb 2023",
      description: `•Elite Software is a leading software development company specializing in Python, Django, and Bootstrap. 
      Responsibilities :
      • Developed and maintained Python applications.
      •Collaborated with the team to design and implement software solutions.
      •Assisted in testing and debugging code.`,

      skills: "Python Django Bootstrap",
      image: elite,
    },
    {
      name: "Social script",
      position: "Open Source Contributer",
      time: "2023",
      description: `•Conducted extensive code design, development, testing, deployment, and wrote clean, maintainable, and efficient code Achieved DEV-RANK Of 32  • Actively contributed to an open-source project focused on algorithm development
      • Successfully designed and implemented the Age Calculator, and merged it into the open-source project.`,
      skills: "C++ DataStructure HTML CSS JavaScript",
      image:  social ,
    },
    {
      name: "GeeksForGeeks",
      position: "Technical Content Writer",
      time: "Freelance",
      description: `•Authored and published engaging and informative articles on data structures
      and software development topics on the Geeks for Geeks platform.
      • Empowered 4k+ individuals with valuable insights through my impactful
      technical documentation article`,
      skills: "JavaScript Docker TypeScript Python Postgresql",
      image:  gfg ,
    },
  ];

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
        <h1>
          Work <span className="main-name">Experience</span>
        </h1>
        <div>
          {workDetails.map((workItem, index) => (
            <WorkCard key={index} workItem={workItem} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Experience;
