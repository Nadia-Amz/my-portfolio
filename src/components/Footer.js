import React from "react";
import "../css/style.css";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

function Footer() {
  return (
    <>
      <footer className="footer-section">
        <div className="waves">
          <div className="wave" id="wave-1"></div>
          <div className="wave" id="wave-2"></div>
          <div className="wave" id="wave-3"></div>
          <div className="wave" id="wave-4"></div>
        </div>
        <div className="footer-area">
          <div className="footer-container">
            <Link
              to="main"
              spy={true}
              smooth={true}
              offset={-150}
              duration={700}
            >
              <p className="logoImage">NA.</p>
            </Link>
            <p id="copyright">
              <FontAwesomeIcon icon={faCopyright} id="icon" />
              2024.NA | All Rights Reserved
            </p>

            <div className="footer-icons">
              <a
                href="https://github.com/Nadia-Amz"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} className="footer-giticon" />
              </a>
              <a
                href="https://fr.linkedin.com/in/nadia-amouz-38435825b"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="footer-linkicon"
                />
              </a>
              <a
                href="mailto: nadiaamouz@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="footer-mailicon"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
