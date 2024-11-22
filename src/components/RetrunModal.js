import React, { useContext } from "react";
import { AppContext } from "../App";
import { useNavigate } from "react-router-dom";

const ReturnModal = ({}) => {
  const navigate = useNavigate();
  const { menuItems, setQuantities, isReturnModal, setisReturnModal } =
    useContext(AppContext);
  if (isReturnModal) {
    return (
      <>
        <div className="return-modal-overlay"></div>
        <div className="return-modal-content">
          <img
            className="return-modal-image"
            src={"/images/ico_notice.png"}
          ></img>
          <div className="return-modal-message">
            <p>
              <span className="return-highlight" style={{ color: "#A4693F" }}>
                시작화면
              </span>
              으로 돌아갑니다
            </p>
            <p>
              계속 진행하시려면{" "}
              <span className="return-highlight" style={{ color: "#A4693F" }}>
                처음으로
              </span>{" "}
              버튼을 누르세요
            </p>
          </div>
          <div className="return-modal-buttons">
            <button
              className="return-btn-cancel"
              onClick={() => setisReturnModal(false)}
            >
              취소
            </button>
            <button
              className="return-btn-confirm"
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
