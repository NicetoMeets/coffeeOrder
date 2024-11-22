import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ThirdPage.css";
import { AppContext } from "../App";

const ThirdPage = () => {
  const navigate = useNavigate();
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
    <div className="third-content">
      <div className="third-up-content">
        <span style={{ color: "#8C532C" }}>결제방법</span>을 선택하세요
      </div>
      <div className="third-middle-content">
        <p style={{ marginLeft: "110px" }}>메뉴명</p>
        <p style={{ marginLeft: "110px" }}>수량</p>
        <p style={{ marginLeft: "55px" }}>가격</p>
        <p style={{ marginLeft: "-20px" }}>삭제</p>
      </div>
      <div className="third-main-content">
        {currentItems.map((item, i) => (
          <>
            <div className="order-item" key={item.id}>
              <div className="order-image-div">
                <div className="order-index">{i + 1}</div>
                <img src={item.img} alt={item.name} className="order-image" />
              </div>

              <p className="order-name">{item.name}</p>
              <div className="order-quantity">
                <button
                  className="qty-btn"
                  onClick={() => handleDecrease(item.id)}
                >
                  -
                </button>
                <span className="qty">{quantities[item.id]}</span>
                <button
                  className="qty-btn"
                  onClick={() => handleIncrease(item.id)}
                >
                  +
                </button>
              </div>
              <span className="order-price">
                {item.price * quantities[item.id]}원
              </span>
              <img
                className="delete-btn"
                src={"/images/trash.png"}
                onClick={() => {
                  setQuantities((prev) => ({ ...prev, [item.id]: 0 }));
                  if (totalPages <= 5) {
                    setCurrentPage(1);
                  }
                }}
              ></img>
            </div>

            <div className="row-line"></div>
          </>
        ))}
      </div>
      <div className="third-pagination">
        <button
          className="page-btn"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          &lt;&nbsp; 이전
        </button>
        <span className="page-number">
          <span style={{ color: "#8C532C" }}>{currentPage}</span> /{" "}
          <span style={{ color: "#707070" }}>{totalPages}</span>
        </span>
        <button
          className="page-btn"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          다음 &nbsp;&gt;
        </button>
      </div>
    </div>
  );
};

export default ThirdPage;
