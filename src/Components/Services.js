// App.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProgressComponent from "./ServicesData/ProgressComponent";
import { coding, design, office } from "./ServicesData/Data";

function Services() {
  const [codingOpen, setCodingOpen] = useState(true);
  const [designOpen, setDesignOpen] = useState(false);
  const [officeOpen, setOfficeOpen] = useState(false);

  // Coding 아코디언 열기 함수
  const openCoding = () => {
    setCodingOpen(true);
    setDesignOpen(false);
    setOfficeOpen(false);
  };

  // Design 아코디언 열기 함수
  const openDesign = () => {
    setDesignOpen(true);
    setCodingOpen(false);
    setOfficeOpen(false);
  };

  // Office 아코디언 열기 함수
  const openOffice = () => {
    setOfficeOpen(true);
    setCodingOpen(false);
    setDesignOpen(false);
  };

  return (
    <div className="Services">
      <div className="inner">
        <div className="servicesTitle commonTitle">
          <p className="subTitle">My Services</p>
          <h1 className="mainTitle">WHAT CAN I USE</h1>
        </div>
        <div className="wrapAcc">
          <div className="accordion accCoding">
            <div className="accTitle" onClick={openCoding}>
              <div className="accTitleLeft">
                <img
                  src={`${process.env.PUBLIC_URL}/images/About/twincle.png`}
                  alt=""
                />
                <Link>
                  <h2>CODING</h2>
                </Link>
              </div>
              <span className={codingOpen ? "eyeOpen" : ""}></span>
            </div>
            <div className={`accContent ${codingOpen ? "open" : ""}`}>
              <div className="accordion-content">
                {coding.map((item) => (
                  <ProgressComponent
                    key={item.id}
                    title={item.title}
                    img={item.img}
                    progress={item.progress}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="accordion accDesign">
            <div className="accTitle" onClick={openDesign}>
              <div className="accTitleLeft">
                <img
                  src={`${process.env.PUBLIC_URL}/images/About/twincle.png`}
                  alt=""
                />
                <Link>
                  <h2>DESIGN</h2>
                </Link>
              </div>
              <span className={designOpen ? "eyeOpen" : ""}></span>
            </div>
            <div className={`accContent ${designOpen ? "open" : ""}`}>
              <div className="accordion-content">
                {design.map((item) => (
                  <ProgressComponent
                    key={item.id}
                    title={item.title}
                    img={item.img}
                    progress={item.progress}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="accordion accOffice">
            <div className="accTitle" onClick={openOffice}>
              <div className="accTitleLeft">
                <img
                  src={`${process.env.PUBLIC_URL}/images/About/twincle.png`}
                  alt=""
                />
                <Link>
                  <h2>OFFICE</h2>
                </Link>
              </div>
              <span className={officeOpen ? "eyeOpen" : ""}></span>
            </div>
            <div className={`accContent ${officeOpen ? "open" : ""}`}>
              <div className="accordion-content">
                {office.map((item) => (
                  <ProgressComponent
                    key={item.id}
                    title={item.title}
                    img={item.img}
                    progress={item.progress}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
