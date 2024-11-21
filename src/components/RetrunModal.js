import React from "react";

const ReturnModal = (
  {
    // isOpen, onClose
  }
) => {
  return (
    <>
      <div className="return-modal-overlay"></div>
      <div className="return-modal-content">
        <img className="return-modal-image" src={"/images/ico_notice.png"}></img>
        <div className="return-modal-message">
          <p>
            <span className="return-highlight" style={{color: "#A4693F"}}>시작화면</span>으로 돌아갑니다
          </p>
          <p>
            계속 진행하시려면 <span className="return-highlight" style={{color: "#A4693F"}}>처음으로</span>{" "}
            버튼을 누르세요
          </p>
        </div>
        <div className="return-modal-buttons">
          <button
            className="return-btn-cancel"
            //   onClick={onClose}
          >
            취소
          </button>
          <button className="return-btn-confirm">처음으로</button>
        </div>
      </div>
    </>
  );
};

export default ReturnModal;
