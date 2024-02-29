import { useState } from "react";
import "./Navbar.css";
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <nav className="navbar">
        {/* Desktop view navigation */}

        <ul className="nav-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/experience">Experience</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/articles">Articles</Link>
          </li>

          <li>
            <a href="https://drive.google.com/file/d/1Mx6lPk2oQSlwi64xhZDOoWbX_Ic1R5rO/view?usp=sharing" target="_blank"><button >Resume</button></a>
            
          </li>
        </ul>

        {/* Mobile view icon */}
        <div className="mobile-menu" onClick={() => setShowNav(!showNav)}>
          {showNav ? (
            <MdOutlineClose style={{ fontSize: "1.5rem" }} />
          ) : (
            <HiOutlineMenu style={{ fontSize: "1.5rem" }} />
          )}
        </div>
      </nav>
      {/* Mobile view navigation */}
      {showNav && (
        <ul className="mobile-nav-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/experience">Experience</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/articles">Articles</Link>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1Mx6lPk2oQSlwi64xhZDOoWbX_Ic1R5rO/view?usp=sharing" target="_blank"><button >Resume</button></a>
            
          </li>
        </ul>
      )}
    </>
  );
};

export default Navbar;
