import React from "react";
import "../css/style.css";
import html from "../images/html.png";
import css from "../images/css.png";
import js from "../images/js.png";
import Netflix from "../videos/Netflix.mp4";


function Projects() {
  return (
    <>
    <section className="projects-container">
      <h1>Projects</h1>
      <div className="ptoject-section">
        <div className="number">
        <p>02</p>
        </div>
        <p>
         Each project is a unique piece of development.
        </p>
      </div>
      <div className="project-cards">
            <div className="card">
                <h3>Netflix</h3>
                <p>As part of learning to code,I completed a project that involved creating a basic Netflix clone.</p>
            <div className="languages">
                <img className="logohtml" src={html} alt=""></img>
                <img className="logocss" src={css} alt=""></img>
                <img className="logojs" src={js} alt=""></img>
            </div>
                <video src={Netflix} alt=""/>
            </div>
        </div>
      </section>
    </>
  )
}export default Projects;