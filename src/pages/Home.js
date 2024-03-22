import React from "react";
import Header from "../components/Header.js";
import Main from "../components/Main.js";
import About from "../components/About.js";
import Projects from "../components/Projects.js";
import Topbutton from "../components/Topbutton.js";
import Footer from "../components/Footer.js";


function Home() {
  return (
    <>
      <Header />
      <Main />
      <About />
      <Projects />
      <Topbutton />
      <Footer />
    </>
  );
}
export default Home;
