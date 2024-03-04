import React from "react";
import "./About.css";
import collegeImg from "../../assets/download.png";
import personal from "../../assets/personal.jpg";
const About = () => {
  return (
    <>
      <div className="about">
        <div className="about-img">
          <img src={personal} alt="personal-img" />
        </div>
        <div className="about-info">
          <p>
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>{" "}
            Hello, I'm Aniket Bhosale,👀 a computer engineering student
            currently in my third year of college. I have a passion for web
            development, particularly in the MERN stack, and enjoy solving
            complex problems using C++.
          </p>
          <br />
          <p>
            I'm dedicated to learning and constantly improving my skills to stay
            up-to-date with the latest technologies. I'm enthusiastic about
            creating efficient and user-friendly web solutions that make a
            positive impact.
          </p>
        </div>
        <div className="education">
          <div className="education-header">Education</div>
          <div className="card">
            <img
              src={collegeImg}
              alt="collegeImage"
              className="img-container"
            />
            <p>
              <span class="label">Institution:</span>{" "}
              <span class="value">AISSMS Collge of Engineering, Pune</span>
            </p>
            <p>
              <span class="label">Degree:</span>{" "}
              <span class="value">Bachelor of Engineering</span>
            </p>
            <p>
              <span class="label">Major:</span>{" "}
              <span class="value">Computer Engineering</span>
            </p>
            <p>
              <span class="label">Graduation Year:</span>{" "}
              <span class="value">2025</span>
            </p>
            <p>
              <span class="label">GPA:</span>{" "}
              <span class="value">8.96 till 5th sem</span>
            </p>
            <p>
              <span class="label">Skills:</span>{" "}
              <span class="value">Computer Networks, Databases, OOP's</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
