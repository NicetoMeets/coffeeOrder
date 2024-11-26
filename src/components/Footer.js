import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../App";
import ReturnModal from "./RetrunModal";
import AccessibilityModal from "./AccessibilityModal";

const Footer = () => {
  const {
    divRefs,
    divhandleKeyDown,
    isLowScreen,
    setisLowScreen,
    isHighContrast,
    setisHighContrast,
    tabs,
    menuItems,
    selectedTab,
    setSelectedTab,
    quantities,
    setQuantities,
    handleIncrease,
    handleDecrease,
    calculateSum,
    totalCount,
    totalSum,
    isReturnModal,
    setisReturnModal,
    isAccessibilityModal,
    setisAccessibilityModal,
  } = useContext(AppContext);
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split("/").at(-1);

  return (
    <>
      {isReturnModal ? <ReturnModal></ReturnModal> : ""}
      {isAccessibilityModal ? <AccessibilityModal></AccessibilityModal> : ""}
      {path === "second" || path === "third" ? (
        <div
          className={
            isHighContrast ? "contrast-second-up-footer" : "second-up-footer"
          }
        >
          <div className="flex-between" style={{ width: "560px" }}>
            <p style={{ color: "#8b8b8b", fontWeight: "600" }}>주문수량</p>
            <p
              className={
                isHighContrast
                  ? "contrast-second-up-footer-text"
                  : "second-up-footer-text"
              }
            >
              {totalCount}개
            </p>
            <div className="short-colline"></div>
            <p style={{ color: "#8b8b8b", fontWeight: "600" }}>금액</p>
            <p
              className={
                isHighContrast
                  ? "contrast-second-up-footer-text"
                  : "second-up-footer-text"
              }
            >
              {totalSum.toLocaleString("ko-KR")}원
            </p>
          </div>
          <div className="flex gap2">
            {path === "second" && (
              <>
                <button
                  className={
                    isHighContrast
                      ? "contrast-second-footer-btn"
                      : "second-footer-btn"
                  }
                  onClick={() => {
                    setQuantities(
                      menuItems.reduce(
                        (acc, item) => ({ ...acc, [item.id]: 0 }),
                        {}
                      )
                    );
                  }}
                >
                  <img
                    className="footer-btn-icon"
                    src={"/images/ico_reset.png"}
                  ></img>
                  <p>초기화</p>
                </button>
                <button
                  className={
                    isHighContrast
                      ? "contrast-second-footer-btn2"
                      : "second-footer-btn2"
                  }
                  onClick={() => {
                    path === "second" ? navigate("/third") : navigate("/forth");
                  }}
                  disabled={totalCount === 0}
                >
                  <img
                    className="footer-btn-icon"
                    src={
                      isHighContrast
                        ? "/images/contrast_ico_order.png"
                        : "/images/ico_order.png"
                    }
                  ></img>
                  <p>주문</p>
                </button>
              </>
            )}

            {path === "third" && (
              <>
                <button
                  className={
                    isHighContrast
                      ? "contrast-second-footer-btn"
                      : "second-footer-btn"
                  }
                  onClick={() => {
                    navigate("/second");
                  }}
                >
                  <img
                    className="footer-btn-icon"
                    src={"/images/ico_add_order.png"}
                  ></img>
                  <p>추가하기</p>
                </button>
                <button
                  className={
                    isHighContrast
                      ? "contrast-second-footer-btn2"
                      : "second-footer-btn2"
                  }
                  onClick={() => {
                    path === "second" ? navigate("/third") : navigate("/forth");
                  }}
                  disabled={totalCount === 0}
                >
                  <img
                    className="footer-btn-icon"
                    src={
                      isHighContrast
                        ? "/images/contrast_Mask group.png"
                        : "/images/Mask group.png"
                    }
                  ></img>
                  <p>결제</p>
                </button>
              </>
            )}
          </div>
        </div>
      ) : (
        ""
      )}

      <div className={isHighContrast ? "contrast-down-footer" : "down-footer"}>
        {path === "" ? (
          <img
            className="footer-coffeelogo"
            src={
              isHighContrast
                ? "/images/logo_bottom.png"
                : "/images/coffeelogo.png"
            }
            alt="coffee"
          ></img>
        ) : (
          <div className="flex" onClick={() => setisReturnModal(true)}>
            <img
              className="black-circle"
              src={
                isHighContrast
                  ? "/images/contrast_home.png"
                  : "/images/homebtn.png"
              }
              alt="home"
            ></img>

            <p className="black-circle-text">처음으로</p>
          </div>
        )}

        <div
          className="flex"
          onClick={() => setisAccessibilityModal(true)}
          tabIndex={2}
          ref={(el) => (divRefs.current[2] = el)}
          onKeyDown={(e) => divhandleKeyDown(e, 2)}
        >
          <img
            className="black-circle"
            src={
              isHighContrast
                ? "/images/contrast_wheelchair.png"
                : "/images/wheelchairbtn.png"
            }
            alt="wheelchair"
          ></img>
          <p className="black-circle-text">접근성</p>
        </div>
      </div>
    </>
  );
};

export default Footer;

{
  /* {path === "third" && (
        <div className="third-up-footer">
          <div style={{ width: "512px" }}>
            <div className="flex-between">
              <p
                style={{
                  color: "#8b8b8b",
                  fontWeight: "600",
                  marginTop: "15px",
                }}
              >
                구매수량
              </p>
              <p>{totalCount}</p>
            </div>
            <div className="flex-between">
              <p
                style={{
                  color: "#8b8b8b",
                  fontWeight: "600",
                  marginTop: "15px",
                }}
              >
                구매금액
              </p>
              <p>{totalSum.toLocaleString("ko-KR")}원</p>
            </div>
            <div className="flex-between">
              <p
                style={{
                  color: "#8b8b8b",
                  fontWeight: "600",
                  marginTop: "15px",
                }}
              >
                할인금액
              </p>
              <p>0원</p>
            </div>
            <div className="orange-line" style={{ marginTop: "15px" }}></div>
            <div className="flex-between">
              <p
                style={{
                  color: "#C4895F",
                  fontWeight: "600",
                  marginTop: "15px",
                }}
              >
                결제금액
              </p>
              <p
                style={{
                  color: "#C4895F",
                  fontSize: "5rem",
                  marginTop: "15px",
                }}
              >
                {totalSum.toLocaleString("ko-KR")}원
              </p>
            </div>
          </div>
          <div className="flex gap2">
            <button className="third-footer-btn" onClick={() => navigate("/second")}>
              <AddOrderIcon></AddOrderIcon>
              <p>추가하기</p>
            </button>
            <button
              className="third-footer-btn"
              style={{ backgroundColor: "#A4693F" }}
              disabled={totalCount === 0}
            >
              <CardIcon></CardIcon>
              <p>결제</p>
            </button>
          </div>
        </div>
      )} */
}
