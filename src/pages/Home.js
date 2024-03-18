import React from "react";
import Header from "../components/Header.js";
import Main from "../components/Main.js";
import About from "../components/About.js";
import Projects from "../components/Projects.js";
import Topbutton from "../components/Topbutton.js";

function Home() {
  return (
    <>
      <Header />
      <Main />
      <About />
      <Projects />
      <Topbutton />
    </>
  );
}
export default Home;
