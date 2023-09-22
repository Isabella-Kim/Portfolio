import React, { useState, useEffect } from "react";

const About = () => {
  const accData = [
    {
      title: "EDUCATION",
      items: [
        {
          type: "img",
          content: `${process.env.PUBLIC_URL}/images/About/BookOpen.png`,
        },
        {
          type: "content",
          content: [
            "2023.04 - 2023.10 그린컴퓨터아트아카데미 리엑트(React), 리엑트네이티브 EXPO 활용 프론트앤드 개발자 양성과정",
          ],
        },
        {
          type: "img",
          content: `${process.env.PUBLIC_URL}/images/About/BookOpenText.png`,
        },
        {
          type: "content",
          content: ["2023 - 한국방송통신대학교 컴퓨터과학과 재학"],
        },
        {
          type: "img",
          content: `${process.env.PUBLIC_URL}/images/About/Student.png`,
        },
        {
          type: "content",
          content: ["2017 - 2022 충남대학교 정치외교학과 · 무역학과 졸업"],
        },
      ],
    },
    {
      title: "EXPERIENCE",
      items: [], // 비어있어도 괜찮음
      content: [
        "2022 - 2023 현대경제연구원 유라시아청년아카데미 / (2022) 제4기 교육생 · (2023) 제3기 알럼나이 서포터즈 ",
        "2022.01 (주)오픈프레스 / 신규론칭 ‘펫봄’ 애플리케이션 마케팅 제안서 제출",
        "2017.02 - 2020.12 대전예술의전당 / 하우스 어셔로 근무",
      ],
    },
  ];

  return (
    <div className="About">
      <div className="aboutTitle commonTitle">
        <p className="subTitle">Mucho Gusto!</p>
        <h1 className="mainTitle">WHO AM I?</h1>
      </div>
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
            “Diligent, Responsible, and Endeavoring.”
            <br />
            업무나 프로젝트를 수행할 때, 항상 최선을 다하고 주어진 일을 완수하기
            위해 노력합니다. 동시에, 도전을 두려워하지 않으며 어려움 앞에서도
            쉽게 물러서지 않습니다. 이러한 강점을 바탕으로 작업 수행에 가치를
            더하고 끊임없이 성장하려는 개발자가 되겠습니다.
          </p>
        </div>
        <div className="aboutAccordion">
          {accData.map((item, index) => (
            <div key={index} className="accItem">
              <h2>
                <img
                  src={`${process.env.PUBLIC_URL}/images/About/twincle.png`}
                  alt=""
                />
                {item.title}
                <img
                  src={`${process.env.PUBLIC_URL}/images/About/sprite.png`}
                  alt=""
                />
              </h2>
              <ul>
                {item.items.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    {subItem.type === "img" ? (
                      <img src={subItem.content} alt={`Image ${subIndex}`} />
                    ) : (
                      subItem.content.map((content, contentIndex) => (
                        <p key={contentIndex}>{content}</p>
                      ))
                    )}
                  </li>
                ))}
              </ul>
              {item.title === "EXPERIENCE" && (
                <ul>
                  {item.content.map((content, contentIndex) => (
                    <li key={contentIndex}>
                      <img
                        src={`${process.env.PUBLIC_URL}/images/About/star.png`}
                        alt=""
                      />
                      <p>{content}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <div className="aboutMotto">
          <h2>"Nothing Is Impossible"</h2>
        </div>
      </div>
    </div>
  );
};

export default About;
