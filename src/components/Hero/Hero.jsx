import React from "react";
import "./Hero.css";
import homeLogo from "../../assets/hero.svg";

import { ReactTyped } from "react-typed";
import { SiGithub } from "react-icons/si";

import { TbBrandLeetcode } from "react-icons/tb";

import { CiLinkedin } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { GoDownload } from "react-icons/go";
import { RiTwitterXLine } from "react-icons/ri";



const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <div style={{ paddingBottom: 15 }} className="heading">
          Hi There!{" "}
          <span className="wave" role="img" aria-labelledby="wave">
            👋🏻
          </span>
        </div>

        <div className="heading-name">
          I'M
          <span className="main-name"> Aniket Bhosale</span>
        </div>
        <div className="moving-skills">
          <ReactTyped strings={["MERN Stack Developer","Software Developer","Technical Content Writer","Open Source Enthusiastic"]} typeSpeed={60} backSpeed={50} loop />
        </div>
        <div className="social-icons">
          
          <SiGithub style={{fontSize:"2rem",cursor: "pointer"}} />
          <TbBrandLeetcode style={{fontSize:"2rem",cursor: "pointer"}} />
          <CiLinkedin style={{fontSize:"2rem",cursor: "pointer"}} />
          <CiInstagram style={{fontSize:"2rem",cursor: "pointer"}} />
          <RiTwitterXLine style={{fontSize:"2rem",cursor: "pointer"}} />
          <GoDownload style={{fontSize:"2rem",cursor: "pointer"}} />

          
          
        </div>
      </div>
      <div className="hero-right">
        <img src={homeLogo} alt="Banner-img" className="banner-image" />
      </div>
    </div>
  );
};

export default Hero;
