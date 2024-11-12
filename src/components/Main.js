import React from "react";
import "../css/style.css";
import profile from "../images/profile.jpg";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Main() {
  return (
    <>
      <div className="main-section">
        <div className="profil-section" id="main">
          <img className="profil" src={profile} alt=""></img>
          <div className="text">
            <p>Hello,</p>
            <p>I'm Nadia</p>
            <h2>Front-End Developer</h2>
            <div className="contact-area">
              <a
                href="https://github.com/Nadia-Amz"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} className="contact-giticon" />
              </a>
              <a
                href="https://fr.linkedin.com/in/nadia-amouz-38435825b"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="contact-linkicon"
                />
              </a>
              <a
                href="mailto: nadiaamouz@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="contact-mailicon"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Main;
