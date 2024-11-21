import React, { useContext, useState } from "react";
import { AppContext } from "../App";
import "../styles/SecondPage.css";
import { useNavigate } from "react-router-dom";

const SecondPage = () => {
  const navigate = useNavigate();
  const {
    tabs,
    menuItems,
    selectedTab,
    setSelectedTab,
    quantities,
    handleIncrease,
    calculateSum,
    totalCount,
    totalSum,
  } = useContext(AppContext);
  const itemsPerPage = 9; // 한 페이지에 표시할 항목 수
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = menuItems.slice(startIndex, startIndex + itemsPerPage);

  // 총 페이지 수 계산
  const totalPages = Math.ceil(menuItems.length / itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="second-content">
      <div className="second-up-content">
        <div className="orange-line"></div>
        <div className="tab">
          <span className="">메뉴</span>
        </div>
        <div className="menu-tabs">
          {tabs.map((a, i) => (
            <>
              <button
                key={i}
                style={{}}
                className={`tab-button ${selectedTab === a ? "active" : ""}`}
                onClick={() => setSelectedTab(a)}
              >
                {a}
              </button>
              {a !== "더보기" && a !== "차" && (
                <div className="secondpage-short-colline"></div>
              )}
            </>
          ))}
        </div>
      </div>

      {/* 컨텐츠 */}
      <div className="menu-grid">
        {currentItems.map((item) => (
          <div
            className="menu-item"
            onClick={() => handleIncrease(item.id)}
            key={item.id}
          >
            <img src={item.img} alt={item.name} />
            <div className="txt-box">
              <p>{item.name}</p>
              <p>{item.price}원</p>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          이전
        </button>
        <span style={{ fontSize: "40px" }}>
          <span style={{ color: "#8C532C" }}>{currentPage}</span> / <span style={{ color: "#707070" }}>{totalPages}</span>
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          다음
        </button>
      </div>
    </div>
  );
};

export default SecondPage;
