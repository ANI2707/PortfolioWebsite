import { useState } from "react";
import "./Navbar.css";
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <nav className="navbar">
        {/* Desktop view navigation */}

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
      )}
    </>
  );
};

export default Navbar;
