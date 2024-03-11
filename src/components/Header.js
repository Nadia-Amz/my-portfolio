import React, {useState} from "react";
import "../css/style.css";
import logo2 from "../images/logo-2 vertical.png";

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
          <img className="logoImage" src={logo2} alt=""></img>
        </a>
        <ul>
            <li className="active">Home</li>
            <li className="active">About</li>
            <li className="active">Projects</li>
            <li className="active">Contact</li>
        </ul>
      </div>
      </>

)
}export default Header
