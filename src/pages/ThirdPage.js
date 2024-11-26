import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ThirdPage.css";
import { AppContext } from "../App";

const ThirdPage = () => {
  const navigate = useNavigate();
  const {
    isHighContrast,
    setisHighContrast,
    tabs,
    isLowScreen,
    setisLowScreen,
    menuItems,
    selectedTab,
    setSelectedTab,
    quantities,
    setQuantities,
    handleIncrease,
    handleDecrease,
    calculateSum,
  } = useContext(AppContext);
  // 각 아이템의 수량을 관리

  const ITEMS_PER_PAGE = 6; // 페이지당 항목 수
  const [currentPage, setCurrentPage] = useState(1);

  const filterMenuItems = (menuItems, quantities) => {
    return menuItems.filter((item) => quantities[item.id] !== 0);
  };

  // 현재 페이지에 해당하는 항목 가져오기
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const priceItems = filterMenuItems(menuItems, quantities);

  const currentItems = priceItems.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );
  // 총 페이지 수 계산
  const totalPages =
    priceItems.length == 0 ? 1 : Math.ceil(priceItems.length / ITEMS_PER_PAGE);

  // 페이지 이동 함수
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div
      className={isHighContrast ? "contrast-third-content" : "third-content"}
    >
      <div
        className={
          isHighContrast ? "contrast-third-up-content" : "third-up-content"
        }
      >
        <span
          style={isHighContrast ? { color: "#FFE101" } : { color: "#8C532C" }}
        >
          내역
        </span>
        을 확인하시고&nbsp;
        <span
          style={isHighContrast ? { color: "#FFE101" } : { color: "#8C532C" }}
        >
          결제하기
        </span>
        &nbsp;버튼을 누르세요
      </div>
      <div
        className={
          isHighContrast
            ? "contrast-third-middle-content"
            : "third-middle-content"
        }
      >
        <p style={{ marginLeft: "110px" }}>메뉴명</p>
        <p style={{ marginLeft: "110px" }}>수량</p>
        <p style={{ marginLeft: "55px" }}>가격</p>
        <p style={{ marginLeft: "-20px" }}>삭제</p>
      </div>
      <div className="third-main-content">
        {currentItems.map((item, i) => (
          <div key={item.id}>
            <div className="order-item">
              <div
                className={
                  isHighContrast
                    ? "contrast-order-image-div"
                    : "order-image-div"
                }
              >
                <div className="order-index">{i + 1}</div>
                <img src={item.img} alt={item.name} className="order-image" />
              </div>

              <p
                className={
                  isHighContrast ? "contrast-order-name" : "order-name"
                }
              >
                {item.name}
              </p>
              <div className="order-quantity">
                <button
                  className={isHighContrast ? "contrast-qty-btn" : "qty-btn"}
                  onClick={() => handleDecrease(item.id)}
                >
                  -
                </button>
                <span className={isHighContrast ? "contrast-qty" : "qty"}>
                  {quantities[item.id]}
                </span>
                <button
                  className={isHighContrast ? "contrast-qty-btn" : "qty-btn"}
                  onClick={() => handleIncrease(item.id)}
                >
                  +
                </button>
              </div>
              <span
                className={
                  isHighContrast ? "contrast-order-price" : "order-price"
                }
              >
                {item.price * quantities[item.id]}원
              </span>
              <img
                className="delete-btn"
                src={
                  isHighContrast
                    ? "/images/contrast_del.png"
                    : "/images/trash.png"
                }
                onClick={() => {
                  setQuantities((prev) => ({ ...prev, [item.id]: 0 }));
                  if (totalPages <= 5) {
                    setCurrentPage(1);
                  }
                }}
              ></img>
            </div>

            <div className="row-line"></div>
          </div>
        ))}
      </div>
      <div className={isHighContrast ? "contrast-pagination" : "pagination"}>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          &lt;&nbsp; 이전
        </button>
        <span style={{ fontSize: "4rem" }}>
          <span
            style={isHighContrast ? { color: "#FFE101" } : { color: "#8C532C" }}
          >
            {currentPage}
          </span>
          <span style={{ color: "#707070" }}>&nbsp;/&nbsp;</span>
          <span style={{ color: "#707070" }}>{totalPages}</span>
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          다음 &nbsp;&gt;
        </button>
      </div>
    </div>
  );
};

export default ThirdPage;
