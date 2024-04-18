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
        <div className="project-section">
          <div className="paragraph">
            <h1>Projects</h1>
            <p>Each project is a unique piece of development.</p>
          </div>
        </div>
        <div className="project-cards" id="projects">
          <div className="card">
            <h3>Get CISSP</h3>
            <p>
              The purpose of this website is to assist users in preparing for
              the CISSP exam. The aim is to provide a complementary guide to
              assist users in filling any gaps they may have and guide them
              towards achieving their certification.
            </p>{" "}
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
              playsInline
            />
            <div className="icons">
              <a
                href="https://github.com/Nadia-Amz/cissp-/tree/master"
                target="_blank"
                rel="noreferrer"
              >
                Code
                <FontAwesomeIcon icon={faGithub} className="icon" />
              </a>
              <a
                href="http://getcissp.patchthenet.com/"
                target="_blank"
                rel="noreferrer"
              >
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
              Mangata and Gallo is a jewelry website that facilitates online
              shopping for special occasions, such as engagement, anniversaries,
              and weddings..{" "}
            </p>
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
              playsInline
            />
            <div className="icons">
              <a
                href="https://github.com/Nadia-Amz/mangata-gallo/tree/master"
                target="_blank"
                rel="noreferrer"
              >
                Code
                <FontAwesomeIcon icon={faGithub} className="icon" />
              </a>
              <a
                href="https://nadia-amz.github.io/mangata-gallo/"
                target="_blank"
                rel="noreferrer"
              >
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
              Little Lemon restaurant's web site enables clients to book tables
              for several occasions.
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
              playsInline
            />
            <div className="icons">
              <a
                href="https://github.com/Nadia-Amz/little-lemon-web"
                target="_blank"
                rel="noreferrer"
              >
                Code
                <FontAwesomeIcon icon={faGithub} className="icon" />
              </a>
              <a
                href="https://nadia-amz.github.io/little-lemon-web/"
                target="_blank"
                rel="noreferrer"
              >
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
            <h3>Netflix Clone</h3>
            <p>
              As part of learning to code, i completed a project that involved
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
              playsInline
            />
            <div className="icons">
              <a
                href="https://github.com/Nadia-Amz/netflix"
                target="_blank"
                rel="noreferrer"
              >
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
