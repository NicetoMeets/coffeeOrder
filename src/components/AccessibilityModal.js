import React, { useState, useContext } from "react";
import { AppContext } from "../App";

const AccessibilityModal = ({}) => {
  const {
    isHighContrast,
    setisHighContrast,
    isAccessibilityModal,
    setisAccessibilityModal,
  } = useContext(AppContext);
  const [accessibility, setAccessibility] = useState({
    isHighContrast: isHighContrast,
    //
  });
  console.log("isHighContrast", isHighContrast);
  console.log(accessibility);
  if (isAccessibilityModal) {
    return (
      <>
        <div
          className={
            isHighContrast
              ? "contrast-accessibility-modal-overlay"
              : "accessibility-modal-overlay"
          }
        ></div>
        <div className= "accessibility-modal-content">
          <div className={isHighContrast? "contrast-accessibility-up-content": "accessibility-up-content"}>
            <div
              style={{ color: "#E7E3E0", fontSize: "6rem", fontWeight: "600" }}
            >
              접근성
            </div>
            <div>
              <div style={{ color: "#E7E3E0", fontSize: "4.1rem" }}>
                원하시는&nbsp;
                <span style={isHighContrast?{ color: "#FFE101", fontSize: "4.1rem" }:{ color: "#EB9B63", fontSize: "4.1rem" }}>
                  접근성 옵션
                </span>
                을 선택하시고
              </div>
              <div
                style={{
                  color: "#E7E3E0",
                  textAlign: "center",
                  marginTop: "3px",
                }}
              >
                <span style={isHighContrast?{ color: "#FFE101" }:{ color: "#EB9B63" }}>적용하기</span>&nbsp;버튼을
                누르세요
              </div>
            </div>
          </div>
          <div
            className={isHighContrast? "contrast-accessibility-down-content": "accessibility-down-content"}
            style={{ fontSize: "4rem" }}
          >
            <div className="accessibility-down-content-div1">
              <p>초기 설정으로 일괄선택</p>
              <div className="accessibility-down-content-div-btn">초기설정</div>
            </div>
            <div className="accessibility-down-content-line"></div>
            <div className="accessibility-down-content-div2">
              <div className="flex" style={{ alignItems: "center" }}>
                <img
                  src={"/images/ico_high_cont.png"}
                  className="accessibility-down-content-div-img"
                ></img>
                <p>고대비화면</p>
              </div>
              <div className="flex" style={{ gap: "10px" }}>
                <div
                  className={`accessibility-down-content-div-btn1 ${
                    accessibility.isHighContrast
                      ? ""
                      : "accessibility-btn-active"
                  }`}
                  onClick={() => setAccessibility({ isHighContrast: false })}
                >
                  끔
                </div>
                <div
                  className={`accessibility-down-content-div-btn1 ${
                    accessibility.isHighContrast
                      ? "accessibility-btn-active"
                      : ""
                  }`}
                  onClick={() => setAccessibility({ isHighContrast: true })}
                >
                  켬
                </div>
              </div>
            </div>
            <div className="accessibility-down-content-line"></div>
            <div className="accessibility-down-content-div3">
              <div className="flex" style={{ alignItems: "center" }}>
                <img
                  src={"/images/ico_volume.png"}
                  className="accessibility-down-content-div-img"
                ></img>
                <p>소리크기</p>
              </div>
              <div className="flex" style={{ gap: "10px" }}>
                <div className="accessibility-down-content-div-btn2">끔</div>
                <div className="accessibility-down-content-div-btn2">약</div>
                <div className="accessibility-down-content-div-btn2">중</div>
                <div className="accessibility-down-content-div-btn2">강</div>
              </div>
            </div>
            <div className="accessibility-down-content-line"></div>
            <div className="accessibility-down-content-div4">
              <div className="flex" style={{ alignItems: "center" }}>
                <img
                  src={"/images/ico_zoom.png"}
                  className="accessibility-down-content-div-img"
                ></img>
                <p>큰글씨 화면</p>
              </div>
              <div className="flex" style={{ gap: "10px" }}>
                <div className="accessibility-down-content-div-btn1">끔</div>
                <div className="accessibility-down-content-div-btn1">켬</div>
              </div>
            </div>
            <div className="accessibility-down-content-line"></div>

            <div className="accessibility-down-content-div5">
              <div className="flex" style={{ alignItems: "center" }}>
                <img
                  src={"/images/ico_low_sc.png"}
                  className="accessibility-down-content-div-img"
                ></img>
                <p>낮은화면</p>
              </div>
              <div className="flex" style={{ gap: "10px" }}>
                <div className="accessibility-down-content-div-btn1">끔</div>
                <div className="accessibility-down-content-div-btn1">켬</div>
              </div>
            </div>
            <div className="accessibility-modal-buttons">
              <button
                className={
                  isHighContrast
                    ? "contrast-accessibility-btn-cancel"
                    : "accessibility-btn-cancel"
                }
                onClick={() => {
                  setAccessibility({ isHighContrast: isHighContrast });
                  setisAccessibilityModal(false);
                }}
              >
                적용안함
              </button>
              <button
                className={
                  isHighContrast
                    ? "contrast-accessibility-btn-confirm"
                    : "accessibility-btn-confirm"
                }
                onClick={() => {
                  setisHighContrast(accessibility.isHighContrast);
                  setisAccessibilityModal(false);
                }}
              >
                적용하기
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default AccessibilityModal;
