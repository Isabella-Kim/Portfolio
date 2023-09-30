import React from "react";
import { Link } from "react-router-dom";
import { modalData } from "./PortfolioData/ModalData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

const PortfolioModal = ({ item, closeModal }) => {
  if (!item) {
    return null;
  }

  // item.id와 일치하는 modalData 항목 찾기
  const modalItem = modalData.find((data) => data.id === item.id);

  if (!modalItem) {
    return null; // 일치하는 데이터가 없으면 모달을 표시하지 않습니다.
  }

  return (
    <div className="modalContainer">
      <div className="modalBtn" onClick={closeModal}></div>
      <div className="modalBack" onClick={closeModal}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <div className="modalContent">
            <div onClick={closeModal}>
              <FontAwesomeIcon icon={faLightbulb} className="modalCloseBtn" />
            </div>
            <div className="contentLeft">
              <h1>{modalItem.category}</h1>
              <img src={modalItem.img} alt="" />
            </div>
            <div className="contentRight">
              <h3>프로젝트명 : {modalItem.title}</h3>
              <h3>제작기간 : {modalItem.term}</h3>
              <h3>개발도구 : {modalItem.editor}</h3>
              <h3>개발언어 : {modalItem.lang}</h3>
              <h3>소개 : {modalItem.intro}</h3>
              <p>{modalItem.explain}</p>
              <h3>
                GitHub :{" "}
                <Link
                  onClick={() => window.open(`${modalItem.github}`, "_blank")}
                >
                  깃허브 바로가기
                </Link>
              </h3>
              <h3>
                Link :{" "}
                <Link onClick={() => window.open(`${modalItem.url}`, "_blank")}>
                  리뉴얼 페이지 바로가기
                </Link>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioModal;
