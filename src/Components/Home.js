import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import Typewriter from "typewriter-effect";

const Home = ({ scrollToContact }) => {
  return (
    <div className="Home">
      <div className="wrapHomeInfo">
        <div className="wrapHomeName">
          <p className="name">MY NAME IS</p>
          <p className="name">KIM</p>
          <div className="chgWord">
            <Typewriter
              options={{
                strings: ["JEONGHYEON", "ISABELLA"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <p>
            <b>Front-end Developer </b>from RoK
          </p>
        </div>
        <div className="toContact">
          <button onClick={scrollToContact}>Let Us Make the Great Work</button>
        </div>
        <div className="mail">
          <div className="wrapMail">
            <div className="naverMail">
              <FontAwesomeIcon icon={faEnvelope} className="faHome" />
              <p>jack6512@naver.com</p>
            </div>
            <div className="gMail">
              <FontAwesomeIcon icon={faEnvelopeOpen} className="faHome" />
              <p>jeonghyeon00777@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapHomeImg">
        <img
          src={`${process.env.PUBLIC_URL}/images/Home/HomeProfile.png`}
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
