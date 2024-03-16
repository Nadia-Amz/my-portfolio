import React from "react";
import "../css/style.css";
import html from "../images/html.png";
import css from "../images/css.png";
import js from "../images/js.png";
import react from "../images/react.png";
import Netflix from "../videos/Netflix.mp4";
import littlelemon from "../videos/little-lemon.mp4";
import mangatagallo from "../videos/mangata-gallo.mp4";
import getcissp from "../videos/getcissp.mp4";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Projects() {
  return (
    <>
      <section className="projects-container">
        <div className="ptoject-section" >
          <div className="number">
            <p>02</p>
          </div>
          <div className="paragraph">
            <h1>Projects</h1>
            <p>Each project is a unique piece of development.</p>
          </div>
        </div>
        <div className="project-cards" id="projects">
          <div className="card">
            <h3>Netflix Clone</h3>
            <p>
              As part of learning to code,I completed a project that involved
              creating a basic Netflix clone.
            </p>
            <div className="languages">
              <img className="logohtml" src={html} alt=""></img>
              <img className="logocss" src={css} alt=""></img>
              <img className="logojs" src={js} alt=""></img>
            </div>
            <video
              className="video-section"
              src={Netflix}
              type="video/mp4"
              autoPlay
              loop
              muted
            />
            <div className="icons">
              <a href="https://github.com/Nadia-Amz/netflix" target="_blank">
                Code
                <FontAwesomeIcon icon={faGithub} className="icon" />
              </a>
              <a href="#">
                Live Demo
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="icon"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="project-cards">
          <div className="card">
            <h3>Little Lemon restaurant</h3>
            <p>
              I completed this project that involved creating an online table reservation.
            </p>
            <div className="languages">
              <img className="logohtml" src={html} alt=""></img>
              <img className="logocss" src={css} alt=""></img>
              <img className="logoreact" src={react} alt=""></img>
            </div>
            <video
              className="video-section"
              src={littlelemon}
              type="video/mp4"
              autoPlay
              loop
              muted
            />
            <div className="icons">
              <a href="https://github.com/Nadia-Amz/little-lemon-web" target="_blank">
                Code
                <FontAwesomeIcon icon={faGithub} className="icon" />
              </a>
              <a href="https://nadia-amz.github.io/little-lemon-web/" target="_blank">
                Live Demo
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="icon"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="project-cards">
          <div className="card">
            <h3>Mangata & Gallo Jewelry</h3>
            <p>
            Mangata and Gallo is a jewelry store that specializes in special occasions like engagements, weddings and anniversaries.  
            Mangata & Gallo's selection of jewelry is known for its high-quality and classic look.</p>
            <div className="languages">
              <img className="logohtml" src={html} alt=""></img>
              <img className="logocss" src={css} alt=""></img>
              <img className="logojs" src={js} alt=""></img>
            </div>
            <video
              className="video-section"
              src={mangatagallo}
              type="video/mp4"
              autoPlay
              loop
              muted
            />
            <div className="icons">
              <a href="https://github.com/Nadia-Amz/mangata-gallo/tree/master" target="_blank">
                Code
                <FontAwesomeIcon icon={faGithub} className="icon" />
              </a>
              <a href="https://nadia-amz.github.io/mangata-gallo/" target="_blank">
                Live Demo
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="icon"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="project-cards">
          <div className="card">
            <h3>Get CISSP</h3>
            <p>
            This website is developed to help you prepare for your CISSP exam. It is intended to serve as a complementary guide to help you fill any gaps that you might have and put you on the straight path toward your certification.</p>
            <div className="languages">
              <img className="logohtml" src={html} alt=""></img>
              <img className="logocss" src={css} alt=""></img>
              <img className="logoreact" src={react} alt=""></img>
            </div>
            <video
              className="video-section"
              src={getcissp}
              type="video/mp4"
              autoPlay
              loop
              muted
            />
            <div className="icons">
              <a href="https://github.com/Nadia-Amz/cissp-/tree/master" target="_blank">
                Code
                <FontAwesomeIcon icon={faGithub} className="icon" />
              </a>
              <a href="http://getcissp.patchthenet.com/" target="_blank">
                Live Demo
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="icon"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Projects;
