import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [showNav,setShowNav]=useState(false);
  return (
    <>
      <nav className="navbar">
        
        
        <ul className="nav-list">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Experience</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact me</a>
          </li>
          <li>
            <button>Resume</button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
