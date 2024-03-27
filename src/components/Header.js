import React, { useState } from "react";
import "../css/style.css";
import { Link } from "react-scroll";

function Header() {
  const [sticky, setSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleClick = () => {
    setIsOpen(false);
  };

  function stickyNavbar() {
    if (window.scrollY > 0) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  }
  window.addEventListener("scroll", stickyNavbar);

  function resizeWindow() {
    if (window.innerWidth > 735) {
      setIsOpen(false);
    }
  }
  window.addEventListener("resize", resizeWindow);
  return (
    <>
      <div className={sticky ? "navigation-bar sticky" : "navigation-bar"}>
        <a href="/">
          <p className="logoImage">NA.</p>
        </a>
        <ul className={isOpen ? "menu" : ""}>
          <li>
            <Link
              to="main"
              spy={true}
              smooth={true}
              offset={-150}
              duration={700}
              onClick={handleClick}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-150}
              duration={700}
              onClick={handleClick}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-100}
              duration={700}
              onClick={handleClick}
            >
              Projects
            </Link>
          </li>
        </ul>
        <div onClick={toggleMenu} className={isOpen ? "close" : "menu"}>
          <ion-icon name="menu"></ion-icon>
        </div>
      </div>
    </>
  );
}
export default Header;
