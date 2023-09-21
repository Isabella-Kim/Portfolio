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
  // 섹션 변경을 감지
  const [activeSection, setActiveSection] = useState(null);

  // useRef로 각 섹션을 구분
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null);

  // 각 섹션 시작점 구하기
  useEffect(() => {
    const checkSection = () => {
      const sections = [
        { ref: homeRef, id: "home" },
        { ref: aboutRef, id: "about" },
        { ref: servicesRef, id: "services" },
        { ref: portfolioRef, id: "portfolio" },
        { ref: blogRef, id: "blog" },
        { ref: contactRef, id: "contact" },
      ];

      for (const { ref, id } of sections) {
        if (ref && ref.current) {
          const sectionTop = ref.current.offsetTop;
          const sectionBottom = sectionTop + ref.current.clientHeight;
          const scrollY = window.scrollY;

          if (scrollY >= sectionTop && scrollY < sectionBottom) {
            setActiveSection(id);
            console.log("현재 섹션:", id); // 현재 섹션을 콘솔에 출력
            break;
          }
        }
      }
    };

    // 스크롤 이벤트 리스너 등록
    window.addEventListener("scroll", checkSection);

    // 초기 섹션 체크
    checkSection();

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener("scroll", checkSection);
    };
  }, []);

  const chgSec = () => {};
  return (
    <div className="App">
      <Header />
      <>
        <div ref={homeRef}>
          <Home />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={servicesRef}>
          <Services />
        </div>
        <div ref={portfolioRef}>
          <Portfolio />
        </div>
        <div ref={blogRef}>
          <Blog />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
      </>
    </div>
  );
}

export default App;
