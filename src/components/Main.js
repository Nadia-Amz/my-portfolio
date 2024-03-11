import React from "react";
import "../css/style.css";
import profil from "../images/profil.jpg";

function Main() {
    return (
    <>
      <div className="main-section">
        <div className="profil-section">
        <img className="profil" src={profil} alt=""></img>
        <div className="text">
            <p>Nadia Amouz</p>
            <p>Front-End Developer</p>
        </div>
        </div>
      </div>
    </>
    )
}export default Main;