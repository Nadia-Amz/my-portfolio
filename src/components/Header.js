import React, { useState } from "react";
import "../css/style.css";
import { Link } from "react-scroll";

function Header() {
  const [sticky, setSticky] = useState(false);

  function stickyNavbar() {
    if (window.scrollY > 0) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  }
  window.addEventListener("scroll", stickyNavbar);
  return (
    <>
      <div className={sticky ? "navigation-bar sticky" : "navigation-bar"}>
        <a href="/">
          <p className="logoImage">NA.</p>
        </a>
        <ul>
          <a href="/">
            <li className="active">Home</li>
          </a>
          <li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-150}
              duration={700}
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
            >
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Header;
