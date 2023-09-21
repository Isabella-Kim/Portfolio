// TypingAnimation.js

import React, { useEffect } from "react";

const TypingAnimation = () => {
  useEffect(() => {
    const words = ["JEONGHYEON", "ISABELLA"];

    const headline = document.querySelector(".wrapHomeName");
    const wordsWrapper = document.querySelector(".chgWord");
    const visibleWord = document.querySelector(".name.chgName.is-visible");

    if (headline.classList.contains("clip")) {
      const wordsWidth = wordsWrapper.offsetWidth + 10;
      wordsWrapper.style.width = `${wordsWidth}px`;
    }

    function startTypingAnimation() {
      const nextWord =
        visibleWord.nextElementSibling || wordsWrapper.firstElementChild;

      if (headline.classList.contains("clip")) {
        wordsWrapper.style.width = "2px";
      }

      setTimeout(() => {
        visibleWord.classList.remove("is-visible");
        visibleWord.classList.add("is-hidden");

        nextWord.classList.remove("is-hidden");
        nextWord.classList.add("is-visible");

        if (headline.classList.contains("clip")) {
          wordsWrapper.style.width = nextWord.offsetWidth + 10 + "px";
        }

        startTypingAnimation();
      }, 2500);
    }

    setTimeout(() => {
      startTypingAnimation();
    }, 660);

    return () => {
      clearTimeout();
    };
  }, []);

  return (
    <div className="wrapHomeName">
      <div className="chgWord">
        <b className="name chgName is-visible">JEONGHYEON</b>
        <b className="name chgName is-hidden">ISABELLA</b>
      </div>
    </div>
  );
};

export default TypingAnimation;
