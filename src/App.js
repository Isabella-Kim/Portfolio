//Libraries
import React, { useRef, useState, useEffect } from "react";
//css
import "./style/App.css";
import "./style/Header.scss";
import "./style/Home.scss";
import "./style/About.scss";
import "./style/Services.scss";
import "./style/Portfolio.scss";
import "./style/PortfolioModal.scss";
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
  // useRef로 각 섹션을 구분
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null);

  // Home.js의 버튼을 누르면 Contact로 스크롤되도록 하는 함수
  const scrollToContact = () => {
    if (contactRef && contactRef.current) {
      window.scrollTo({
        top: contactRef.current.offsetTop,
        behavior: "smooth", // 부드럽게 스크롤 이동
      });
    }
  };

  return (
    <div className="App">
      <div className="myHeader">
        <Header />
      </div>
      <div className="mySections">
        <div ref={homeRef} id="home">
          <Home scrollToContact={scrollToContact} />
        </div>
        <div ref={aboutRef} id="about">
          <About />
        </div>
        <div ref={servicesRef} id="services">
          <Services />
        </div>
        <div ref={portfolioRef} id="portfolio">
          <Portfolio />
        </div>
        <div ref={blogRef} id="blog">
          <Blog />
        </div>
        <div ref={contactRef} id="contact">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
