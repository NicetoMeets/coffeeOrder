import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../App";
import ReturnModal from "./RetrunModal";

const Footer = () => {
  const {
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
  } = useContext(AppContext);
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split("/").at(-1);

  return (
    <>
    {/* <ReturnModal></ReturnModal> */}
      {path === "second" || path === "third" ? (
        <div className="second-up-footer">
          <div className="flex-between" style={{ width: "560px" }}>
            <p style={{ color: "#8b8b8b", fontWeight: "600" }}>주문수량</p>
            <p
              style={{
                color: "#EB9B63",
                fontSize: "4.5rem",
                marginTop: "-5px",
              }}
            >
              {totalCount}개
            </p>
            <div className="short-colline"></div>
            <p style={{ color: "#8b8b8b", fontWeight: "600" }}>금액</p>
            <p
              style={{
                color: "#EB9B63",
                fontSize: "4.5rem",
                marginTop: "-5px",
              }}
            >
              {totalSum.toLocaleString("ko-KR")}원
            </p>
          </div>
          <div className="flex gap2">
            {path === "second" && (
              <>
                <button
                  className="second-footer-btn"
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
                  className="second-footer-btn"
                  onClick={() => {
                    path === "second" ? navigate("/third") : navigate("/forth");
                  }}
                  style={{ backgroundColor: "#A4693F" }}
                  disabled={totalCount === 0}
                >
                  <img
                    className="footer-btn-icon"
                    src={"/images/ico_order.png"}
                  ></img>
                  <p>주문</p>
                </button>
              </>
            )}

            {path === "third" && (
              <>
                <button
                  className="second-footer-btn"
                  onClick={() => {
                    navigate("/second")
                  }}
                >
                  <img
                    className="footer-btn-icon"
                    src={"/images/ico_add_order.png"}
                  ></img>
                  <p>추가하기</p>
                </button>
                <button
                  className="second-footer-btn"
                  onClick={() => {
                    path === "second" ? navigate("/third") : navigate("/forth");
                  }}
                  style={{ backgroundColor: "#A4693F" }}
                  disabled={totalCount === 0}
                >
                  <img
                    className="footer-btn-icon"
                    src={"/images/Mask group.png"}
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
      {/* {path === "third" && (
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
      )} */}
      <div className="down-horizontal-line"></div>
      <div className="down-footer">
        {path === "" ? (
          <img
            className="footer-coffeelogo"
            src="/images/coffeelogo.png"
            alt="coffee"
          ></img>
        ) : (
          <Link to="/" className="flex">
            <img
              className="black-circle"
              src="/images/homebtn.png"
              alt="home"
            ></img>

            <p className="black-circle-text">처음으로</p>
          </Link>
        )}

        <div className="flex">
          <img
            className="black-circle"
            src="/images/wheelchairbtn.png"
            alt="wheelchair"
          ></img>

          <p className="black-circle-text">접근성</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
