import React from "react";
import "../css/style.css";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contact() {
  return (
    <>
      <section className="contact-section">
        <div className="contact-container" id="contact">
          <div className="number">
            <p>03</p>
          </div>
          <div className="contact-me">
            <h1>Contact Me</h1>
            <div className="contact-area">
              <a href="https://github.com/Nadia-Amz" target="_blank">
                <FontAwesomeIcon icon={faGithub} className="contact-giticon" />
              </a>
              <a
                href="https://fr.linkedin.com/in/nadia-amouz-38435825b"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="contact-linkicon"
                />
              </a>
              <a href="mailto: nadiaamouz@gmail.com" target="_blank">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="contact-mailicon"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Contact;
