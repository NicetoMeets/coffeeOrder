import React, { useContext } from "react";
import { AppContext } from "../App";
import { useNavigate } from "react-router-dom";

const ReturnModal = ({}) => {
  const navigate = useNavigate();
  const {
    isHighContrast,
    setisHighContrast,
    menuItems,
    setQuantities,
    isReturnModal,
    setisReturnModal,
  } = useContext(AppContext);
  if (isReturnModal) {
    return (
      <>
        <div
          className={
            isHighContrast
              ? "contrast-return-modal-overlay"
              : "return-modal-overlay"
          }
        ></div>
        <div
          className={
            isHighContrast
              ? "contrast-return-modal-content"
              : "return-modal-content"
          }
        >
          <img
            className="return-modal-image"
            src={
              isHighContrast
                ? "/images/contrast-Group 13.png"
                : "/images/ico_notice.png"
            }
          ></img>
          <div
            className={
              isHighContrast
                ? "contrast-return-modal-message"
                : "return-modal-message"
            }
          >
            <p>
              <span
                className="return-highlight"
                style={
                  isHighContrast ? { color: "#FFE101" } : { color: "#A4693F" }
                }
              >
                시작화면
              </span>
              으로 돌아갑니다
            </p>
            <p>
              계속 진행하시려면{" "}
              <span
                className="return-highlight"
                style={
                  isHighContrast ? { color: "#FFE101" } : { color: "#A4693F" }
                }
              >
                처음으로
              </span>{" "}
              버튼을 누르세요
            </p>
          </div>
          <div className="return-modal-buttons">
            <button
              className={isHighContrast? "contrast-return-btn-cancel":"return-btn-cancel"}
              onClick={() => setisReturnModal(false)}
            >
              취소
            </button>
            <button
              className={isHighContrast? "contrast-return-btn-confirm":"return-btn-confirm"}
              onClick={() => {
                navigate("/");

                setQuantities(
                  menuItems.reduce(
                    (acc, item) => ({ ...acc, [item.id]: 0 }),
                    {}
                  )
                );
                setisReturnModal(false);
              }}
            >
              처음으로
            </button>
          </div>
        </div>
      </>
    );
  }
};

export default ReturnModal;
