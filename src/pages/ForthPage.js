import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ForthPage.css";
import { AppContext } from "../App";

const ForthPage = () => {
  const {
    totalSum,
    isHighContrast,
    setisHighContrast,
    isCreditPayContent,
    setisCreditPayContent,
  } = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <div
      className={isHighContrast ? "contrast-forth-content" : "forth-content"}
    >
      {isCreditPayContent === 0 ? (
        <>
          <div className="forth-up-content">
            <span
              style={
                isHighContrast
                  ? { color: "#FFE101" }
                  : isHighContrast
                  ? { color: "#FFE101" }
                  : { color: "#8C532C" }
              }
            >
              결제방법
            </span>
            을 선택하세요
          </div>
          <div
            className={
              isHighContrast
                ? "contrast-forth-middle-content"
                : "forth-middle-content"
            }
          >
            <span>결제금액</span>
            <span style={{ fontSize: "8rem" }}>
              {totalSum.toLocaleString("ko-KR")}
            </span>
          </div>
          <div className={
              isHighContrast
                ? "contrast-forth-main-content"
                : "forth-main-content"
            }>
            <div className="forth-main-flex">
              <div
                className={
                  isHighContrast ? "contrast-pay-type-div" : "pay-type-div"
                }
                onClick={() =>
                  setisCreditPayContent(
                    (isCreditPayContent) => isCreditPayContent + 1
                  )
                }
              >
                <img
                  style={{ width: "125px", height: "85px" }}
                  src="/images/img_credit_card.png"
                  alt="card"
                ></img>
                <p>신용카드</p>
              </div>
              <div
                className={
                  isHighContrast ? "contrast-pay-type-div" : "pay-type-div"
                }
              >
                <img
                  style={{ width: "110px", height: "200px" }}
                  src="/images/img_Mpay.png"
                  alt="mobile"
                ></img>
                <p>모바일 페이</p>
              </div>
              {/* <div className="pay-type-div">
                <img
                  style={{ width: "110px", height: "200px" }}
                  src="/images/img_QRpay.png"
                  alt="qr"
                ></img>
                <p>QR 페이</p>
              </div> */}
            </div>
            <div
              className={
                isHighContrast ? "contrast-forth-main-btn" : "forth-main-btn"
              }
              onClick={() => {
                setisCreditPayContent(0);
                navigate("/third");
              }}
            >
              취소
            </div>
          </div>
        </>
      ) : isCreditPayContent === 1 ? (
        <div
          className={
            isHighContrast
              ? "contrast-credit-pay-content"
              : "credit-pay-content"
          }
        >
          <div className="credit-pay-text">
            <div>
              가운데 아래의{" "}
              <span
                style={
                  isHighContrast ? { color: "#FFE101" } : { color: "#8C532C" }
                }
              >
                카드리더기
              </span>
              에
            </div>
            <div>
              <span
                style={
                  isHighContrast ? { color: "#FFE101" } : { color: "#8C532C" }
                }
              >
                신용카드
              </span>
              를 끝까지 넣으세요
            </div>
          </div>
          <img
            className="credit-pay-image"
            src={"/images/img_card_in.png"}
            onClick={() =>
              setisCreditPayContent(
                (isCreditPayContent) => isCreditPayContent + 1
              )
            }
          ></img>
          <div
            className={
              isHighContrast ? "contrast-forth-main-btn" : "forth-main-btn"
            }
            onClick={() => {
              setisCreditPayContent(0);
              navigate("/third");
              navigate("/third");
            }}
          >
            취소
          </div>
        </div>
      ) : isCreditPayContent === 2 ? (
        <div
          className={
            isHighContrast
              ? "contrast-credit-pay-content"
              : "credit-pay-content"
          }
        >
          <div className="credit-pay-text">
            <div>
              <span
                style={
                  isHighContrast ? { color: "#FFE101" } : { color: "#8C532C" }
                }
              >
                카드리더기
              </span>
              에서&nbsp;
              <span
                style={
                  isHighContrast ? { color: "#FFE101" } : { color: "#8C532C" }
                }
              >
                신용카드
              </span>
              를 뽑으세요
            </div>
          </div>
          <img
            className="credit-pay-image"
            src={"/images/img_card_out.png"}
            onClick={() =>
              setisCreditPayContent(
                (isCreditPayContent) => isCreditPayContent + 1
              )
            }
          ></img>
          <div
            className="forth-main-btn"
            style={
              isHighContrast
                ? { color: "black", background: "#FFE101", fontWeight: "600" }
                : { background: "#A4693F" }
            }
          >
            확인
          </div>
        </div>
      ) : isCreditPayContent === 3 ? (
        <div
          className={
            isHighContrast
              ? "contrast-credit-pay-content"
              : "credit-pay-content"
          }
        >
          <div className="credit-pay-text">
            <div>
              <span
                style={
                  isHighContrast ? { color: "#FFE101" } : { color: "#8C532C" }
                }
              >
                모바일 페이
              </span>
              를 활성시키고 휴대전화를
            </div>
            <div>
              가운데 아래의{" "}
              <span
                style={
                  isHighContrast ? { color: "#FFE101" } : { color: "#8C532C" }
                }
              >
                카드리더기
              </span>
              에 접근시키세요
            </div>
          </div>
          <img
            className="credit-pay-image"
            src={"/images/img_Mpay_big 1.png"}
            onClick={() =>
              setisCreditPayContent(
                (isCreditPayContent) => isCreditPayContent + 1
              )
            }
          ></img>
          <div
            className={
              isHighContrast ? "contrast-forth-main-btn" : "forth-main-btn"
            }
          >
            취소
          </div>
        </div>
      ) : isCreditPayContent === 4 ? (
        <div
          className={
            isHighContrast
              ? "contrast-credit-pay-content"
              : "credit-pay-content"
          }
        >
          <div className="credit-pay-text">
            <div>오른쪽 아래의 QR리더기에</div>
            <div>QR코드를 보여 인식시키세요</div>
          </div>
          <img
            className="credit-pay-image"
            src={"/images/img_QRpay_big.png"}
            onClick={() =>
              setisCreditPayContent(
                (isCreditPayContent) => isCreditPayContent + 1
              )
            }
          ></img>
          <div
            className={
              isHighContrast ? "contrast-forth-main-btn" : "forth-main-btn"
            }
          >
            취소
          </div>
        </div>
      ) : isCreditPayContent === 5 ? (
        <div
          className={
            isHighContrast
              ? "contrast-credit-pay-content"
              : "credit-pay-content"
          }
        >
          <div className="credit-pay-text">
            <div>
              <span
                style={
                  isHighContrast ? { color: "#FFE101" } : { color: "#8C532C" }
                }
              >
                결제되었습니다
              </span>
            </div>
            <div>
              <span
                style={
                  isHighContrast ? { color: "#FFE101" } : { color: "#8C532C" }
                }
              >
                영수증
              </span>
              을 출력하시겠습니까?
            </div>
          </div>
          <img
            className="credit-pay-image"
            src={"/images/img_order_paper.png"}
            onClick={() =>
              setisCreditPayContent(
                (isCreditPayContent) => isCreditPayContent + 1
              )
            }
          ></img>
          <div className="forth-main-two-btn">
            <div
              className={
                isHighContrast
                  ? "contrast-forth-main-two-btn1"
                  : "forth-main-two-btn1"
              }
            >
              영수증 출력
            </div>
            <div
              className={
                isHighContrast
                  ? "contrast-forth-main-two-btn2"
                  : "forth-main-two-btn2"
              }
            >
              주문표만 출력
            </div>
          </div>
        </div>
      ) : isCreditPayContent === 6 ? (
        <div
          className={
            isHighContrast
              ? "contrast-credit-pay-content"
              : "credit-pay-content"
          }
        >
          <div className="credit-pay-text">
            <div>
              왼쪽 아래의{" "}
              <span
                style={
                  isHighContrast ? { color: "#FFE101" } : { color: "#8C532C" }
                }
              >
                프린터
              </span>
              에서{" "}
              <span
                style={
                  isHighContrast ? { color: "#FFE101" } : { color: "#8C532C" }
                }
              >
                주문표
              </span>
              가 출력됩니다
            </div>
            <div>
              인쇄가 완전히{" "}
              <span
                style={
                  isHighContrast ? { color: "#FFE101" } : { color: "#8C532C" }
                }
              >
                끝나고
              </span>
              &nbsp;받으세요
            </div>
          </div>
          <img
            className="credit-pay-image"
            src={"/images/img_order_paper.png"}
            onClick={() =>
              setisCreditPayContent(
                (isCreditPayContent) => isCreditPayContent + 1
              )
            }
          ></img>
          <div
            className="forth-main-btn"
            style={
              isHighContrast
                ? { color: "black", background: "#FFE101", fontWeight: "600" }
                : { background: "#A4693F" }
            }
          >
            마무리하기
          </div>
        </div>
      ) : isCreditPayContent === 7 ? (
        <div
          className={
            isHighContrast
              ? "contrast-credit-pay-content"
              : "credit-pay-content"
          }
        >
          <div className="credit-pay-text">
            <div>
              왼쪽 아래의{" "}
              <span
                style={
                  isHighContrast ? { color: "#FFE101" } : { color: "#8C532C" }
                }
              >
                프린터
              </span>
              에서{" "}
              <span
                style={
                  isHighContrast ? { color: "#FFE101" } : { color: "#8C532C" }
                }
              >
                영수증
              </span>
              이 출력됩니다
            </div>
            <div>
              인쇄가 완전히&nbsp;
              <span
                style={
                  isHighContrast ? { color: "#FFE101" } : { color: "#8C532C" }
                }
              >
                끝나고
              </span>
              &nbsp;받으세요
            </div>
          </div>
          <img
            className="credit-pay-image"
            src={"/images/img_order_paper.png"}
            onClick={() =>
              setisCreditPayContent(
                (isCreditPayContent) => isCreditPayContent + 1
              )
            }
          ></img>
          <div
            className="forth-main-btn"
            style={
              isHighContrast
                ? { color: "black", background: "#FFE101", fontWeight: "600" }
                : { background: "#A4693F" }
            }
          >
            마무리하기
          </div>
        </div>
      ) : isCreditPayContent === 8 ? (
        <div
          className={
            isHighContrast
              ? "contrast-credit-pay-content"
              : "credit-pay-content"
          }
        >
          <div className="credit-pay-text">
            <div>이용해 주셔서 감사합니다</div>
            <div>
              <span
                style={
                  isHighContrast ? { color: "#FFE101" } : { color: "#8C532C" }
                }
              >
                놓고 가시는 물건
              </span>
              이 없는지 확인하세요
            </div>
          </div>
          <img className="end-checked-image" src={"/images/ico_end.png"}></img>
          <img
            className="end-logo-image"
            src={"/images/logo_grey_big.png"}
          ></img>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ForthPage;
