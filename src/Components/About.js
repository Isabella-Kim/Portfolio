import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const About = () => {
  // 두 개의 아코디언 아이템 상태 변수 추가
  const [educationOpen, setEducationOpen] = useState(true);
  const [experienceOpen, setExperienceOpen] = useState(false);

  // Education 아코디언 열기 함수
  const openEducation = () => {
    setEducationOpen(true);
    setExperienceOpen(false); // Experience 아코디언 닫기
  };

  // Experience 아코디언 열기 함수
  const openExperience = () => {
    setExperienceOpen(true);
    setEducationOpen(false); // Education 아코디언 닫기
  };

  return (
    <div className="About">
      <div className="inner">
        <div className="aboutTitle commonTitle">
          <p className="subTitle">Mucho Gusto!</p>
          <h1 className="mainTitle">WHO AM I?</h1>
        </div>
        <div className="aboutMain">
          <div className="aboutProfile">
            <img
              src={`${process.env.PUBLIC_URL}/images/About/AboutProfile.png`}
              alt=""
            />
            <div className="aboutName">
              <p>김정현</p>
              <p>KIM JEONGHYEON</p>
            </div>
          </div>
          <div className="aboutDescription">
            <div className="aboutMe">
              <p>[ THIS IS ME ]</p>
              <p>
                <i>“Diligent, Responsible, and Endeavoring.”</i>
                <br />
                업무나 프로젝트를 수행할 때, 항상 최선을 다하고 주어진 일을
                완수하기 위해 노력합니다. 동시에, 도전을 두려워하지 않으며
                어려움 앞에서도 쉽게 물러서지 않습니다. 이러한 강점을 바탕으로
                작업 수행에 가치를 더하고 끊임없이 성장하려는 개발자가
                되겠습니다.
              </p>
            </div>
            <div className="aboutAccordion">
              <div className="education accordion">
                <div className="accTitle" onClick={openEducation}>
                  <div className="accTitleLeft">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/About/twincle.png`}
                      alt=""
                    />
                    <Link>
                      <h2>EDUCATION</h2>
                    </Link>
                  </div>
                  <span className={educationOpen ? "eyeOpen" : ""}></span>
                </div>
                <div className={`accContent ${educationOpen ? "open" : ""}`}>
                  <div className="accComponent">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/About/BookOpen.png`}
                      alt=""
                    />
                    <p>
                      2023.04 - 2023.10 그린컴퓨터아트아카데미 리엑트(React),
                      리엑트네이티브 EXPO 활용 프론트앤드 개발자 양성과정
                    </p>
                  </div>
                  <div className="accComponent">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/About/BookOpenText.png`}
                      alt=""
                    />
                    <p>2023 - 한국방송통신대학교 컴퓨터과학과 재학</p>
                  </div>
                  <div className="accComponent">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/About/Student.png`}
                      alt=""
                    />
                    <p>2017 - 2022 충남대학교 정치외교학과 · 무역학과 졸업</p>
                  </div>
                </div>
              </div>
              <div className="experience accordion">
                <div className="accTitle" onClick={openExperience}>
                  <div className="accTitleLeft">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/About/twincle.png`}
                      alt=""
                    />
                    <Link>
                      <h2>EXPERIENCE</h2>
                    </Link>
                  </div>
                  <span className={experienceOpen ? "eyeOpen" : ""}></span>
                </div>
                <div className={`accContent ${experienceOpen ? "open" : ""}`}>
                  <div className="accComponent">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/About/star.png`}
                      alt=""
                    />
                    <p>
                      2022 - 2023 현대경제연구원 유라시아청년아카데미 / (2022)
                      제4기 교육생 · (2023) 제3기 알럼나이 서포터즈
                    </p>
                  </div>
                  <div className="accComponent">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/About/star.png`}
                      alt=""
                    />
                    <p>
                      2022.01 (주)오픈프레스 / 신규론칭 ‘펫봄’ 애플리케이션
                      마케팅 제안서 제출
                    </p>
                  </div>
                  <div className="accComponent">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/About/star.png`}
                      alt=""
                    />
                    <p>2017.02 - 2020.12 대전예술의전당 / 하우스 어셔로 근무</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="aboutMotto">
              <h2>"Nothing Is Impossible"</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
