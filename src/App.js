//Libraries
import { SectionsContainer, Section } from "react-fullpage";
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
  let options = {
    //fullpage scroll option
    activeClass: "active",
    anchors: ["home", "about", "services", "portfolio", "blog", "contact"],
    arrowNavigation: true,
    className: "SectionContainer",
    delay: 1000,
    navigation: true,
    scrollBar: false,
    sectionClassName: "Section",
    sectionPaddingTop: "0",
    sectionPaddingBottom: "0",
    verticalAlign: false,
  };
  return (
    <div className="App">
      <Header />
      <SectionsContainer {...options}>
        <Section>
          <Home />
        </Section>
        <Section>
          <About />
        </Section>
        <Section>
          <Services />
        </Section>
        <Section>
          <Portfolio />
        </Section>
        <Section>
          <Blog />
        </Section>
        <Section>
          <Contact />
        </Section>
      </SectionsContainer>
    </div>
  );
}

export default App;
