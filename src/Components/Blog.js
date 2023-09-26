import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { postings } from "./BlogData/Data";

const Blog = () => {
  //롤링배너 복제
  useEffect(() => {
    let roller = document.querySelector(".eventContainer");
    roller.id = "roller1"; //id부여

    let clone = roller.cloneNode(true);
    // cloneNode : 노드 복제. 기본값은 false. 자식 노드까지 복제를 원하면 true 사용
    clone.id = "roller2";
    document.querySelector(".wrapContainer").appendChild(clone); // wrapContainer 하위 자식으로 부착

    document.querySelector("#roller1").style.left = "0px";
    document.querySelector("#roller2").style.left =
      document.querySelector("#roller1").offsetWidth + "px";

    roller.classList.add("original");
    clone.classList.add("clone");
  }, []);

  return (
    <div className="Blog">
      <div className="blogTitle commonTitle">
        <div>
          <p className="subTitle">My Everyday Writing</p>
          <h1 className="mainTitle">BLOG POSTINGS</h1>
        </div>
        <button
          onClick={() =>
            window.open("https://m.blog.naver.com/jack6512", "_blank")
          }
        >
          VISIT MY BLOG
        </button>
      </div>
      <div className="blogMain">
        <img
          src={`${process.env.PUBLIC_URL}/images/Blog/filmBottom.png`}
          alt=""
          className="film filmTop"
        />
        <div className="wrapContainer">
          {/* 배너표시영역 */}
          <div className="eventContainer">
            {/* 원본배너 */}
            <div className="postingsWrap">
              <div className="postings">
                {postings.map((post, index) => (
                  <div key={post.id} className="posting">
                    <Link to={post.url} target="_blank">
                      <img src={post.img} alt={post.title} />
                      <h2>{post.title}</h2>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <img
          src={`${process.env.PUBLIC_URL}/images/Blog/filmbottom.png`}
          alt=""
          className="film filmBottom"
        />
      </div>
    </div>
  );
};

export default Blog;
