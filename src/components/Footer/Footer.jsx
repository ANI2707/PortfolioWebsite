import React from 'react'
import './Footer.css';
import { FaRegHeart } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { SiGithub } from "react-icons/si";
import { RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="footer">
      <div className='footer-left'>
        <p> Made with <FaRegHeart/> by Aniket Bhosale</p>
      </div>
      <div className='footer-middle'>
        <span>Copyright © 2024 Aniket</span>
      </div>
      <div className='footer-social-icons'>
        
        <CiLinkedin/>
        <SiGithub/>
        <RiTwitterXLine/>

      </div>
    </div>
  )
}

export default Footer