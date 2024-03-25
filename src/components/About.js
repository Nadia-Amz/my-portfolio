import React from "react";
import "../css/style.css";
import aboutphoto from "../images/aboutphoto.png";

function about() {
  return (
    <>
      <section className="about-container">
        <div className="about-section" id="about">
          <img src={aboutphoto} alt="" className="about-photo"/>
          <div className="paragraph">
            <h1>About</h1>
            <p>
              I'm a front-end developer. I'm enthusiastic about crafting
              user-friendly web experiences with a strong foundation. I stay
              updated on the latest trends and am eager to contribute to
              innovative projects.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
export default about;
