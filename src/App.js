//Libraries
import React, { useRef, useState, useEffect } from "react";
//css
import "./style/App.css";
import "./style/Header.scss";
import "./style/Home.scss";
import "./style/About.scss";
import "./style/Services.scss";
import "./style/Portfolio.scss";
import "./style/Blog.scss";
import "./style/Contact.scss";
//Components
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Portfolio from "./Components/Portfolio";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;
