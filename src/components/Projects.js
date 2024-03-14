import React from "react";
import "../css/style.css";
import html from "../images/html.png";
import css from "../images/css.png";
import js from "../images/js.png";
import Netflix from "../videos/Netflix.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Projects() {
  return (
    <>
      <section className="projects-container">
        <div className="ptoject-section">
          <div className="number">
            <p>02</p>
          </div>
          <div className="paragraph">
            <h1>Projects</h1>
            <p>Each project is a unique piece of development.</p>
          </div>
        </div>
        <div className="project-cards">
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
      </section>
    </>
  );
}
export default Projects;
