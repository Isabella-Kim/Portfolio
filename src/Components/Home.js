import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [currentNameIndex, setCurrentNameIndex] = useState(0);
  const names = ["JEONHGYEON", "ISABELLA"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentNameIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 2000); // 2초마다 이름 변경

    return () => {
      clearInterval(intervalId); // 컴포넌트가 언마운트되면 interval 정리
    };
  }, []);
  return (
    <div className="Home">
      <div className="wrapHomeInfo">
        <div className="wrapHomeName">
          <p className="name">MY NAME IS</p>
          <p className="name">KIM</p>
          <div className="chgWord">
            <p className="name chgName">{names[currentNameIndex]}</p>
          </div>
          <p>
            <b>Front-end Developer </b>from RoK
          </p>
        </div>
        <div className="toContact">
          <button>Let Us Make the Great Work</button>
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
