import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../App";
import "../styles/SecondPage.css";
import { useNavigate } from "react-router-dom";

const SecondPage = () => {
  const navigate = useNavigate();
  const {
    isHighContrast,
    setisHighContrast,
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
  useEffect(() => {
    setSelectedTab("전체메뉴");
  }, []);
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
    <div
      className={isHighContrast ? "contrast-second-content" : "second-content"}
    >
      <div className="second-up-content">
        {/* <div className="orange-line"></div>
        <div className="tab">
          <span className="">메뉴</span>
        </div> */}
        <div className="menu-tabs">
          <div className="menu-tabs-flex-div">
            <div
              className={`${
                isHighContrast ? "contrast-tab-button" : "tab-button"
              } ${selectedTab === "전체메뉴" ? "active" : ""}`}
              onClick={() => setSelectedTab("전체메뉴")}
            >
              전체메뉴
            </div>
            <div className="secondpage-short-colline"></div>
            <div
              className={`${
                isHighContrast ? "contrast-tab-button" : "tab-button"
              } ${selectedTab === "커피" ? "active" : ""}`}
              onClick={() => setSelectedTab("커피")}
            >
              커피
            </div>
            <div className="secondpage-short-colline"></div>
            <div
              className={`${
                isHighContrast ? "contrast-tab-button" : "tab-button"
              } ${selectedTab === "밀크티" ? "active" : ""}`}
              onClick={() => setSelectedTab("밀크티")}
            >
              밀크티
            </div>
            <div className="secondpage-short-colline"></div>
            <div
              className={`${
                isHighContrast ? "contrast-tab-button" : "tab-button"
              } ${selectedTab === "스무디" ? "active" : ""}`}
              onClick={() => setSelectedTab("스무디")}
            >
              스무디
            </div>
            <div className="secondpage-short-colline"></div>
            <div
              className={`${
                isHighContrast ? "contrast-tab-button" : "tab-button"
              } ${selectedTab === "차" ? "active" : ""}`}
              onClick={() => setSelectedTab("차")}
            >
              차
            </div>
          </div>
          <div className="secondpage-long-rowline"></div>
          <div className="menu-tabs-flex-div">
            <div
              className={`${
                isHighContrast ? "contrast-tab-button" : "tab-button"
              } ${selectedTab === "주스" ? "active" : ""}`}
              onClick={() => setSelectedTab("주스")}
            >
              주스
            </div>
            <div className="secondpage-short-colline"></div>
            <div
              className={`${
                isHighContrast ? "contrast-tab-button" : "tab-button"
              } ${selectedTab === "라떼" ? "active" : ""}`}
              onClick={() => setSelectedTab("라떼")}
            >
              라떼
            </div>
            <div className="secondpage-short-colline"></div>
            <div
              className={`${
                isHighContrast ? "contrast-tab-button" : "tab-button"
              } ${selectedTab === "버블티" ? "active" : ""}`}
              onClick={() => setSelectedTab("버블티")}
            >
              버블티
            </div>
            <div className="secondpage-short-colline"></div>
            <div
              className={`${
                isHighContrast ? "contrast-tab-button" : "tab-button"
              } ${selectedTab === "에이드" ? "active" : ""}`}
              onClick={() => setSelectedTab("에이드")}
            >
              에이드
            </div>
            <div className="secondpage-short-colline"></div>
            <div
              className={`${
                isHighContrast ? "contrast-tab-button" : "tab-button"
              } ${selectedTab === "기타" ? "active" : ""}`}
              onClick={() => setSelectedTab("기타")}
            >
              기타
            </div>
          </div>

          {/* {tabs.map((a, i) => (
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
          ))} */}
        </div>
      </div>

      {/* 컨텐츠 */}
      <div className="menu-grid">
        {currentItems.map((item) => (
          <div
            className={isHighContrast ? "contrast-menu-item" : "menu-item"}
            onClick={() => handleIncrease(item.id)}
            key={item.id}
          >
            <img src={item.img} alt={item.name} />
            <div className={isHighContrast ? "contrast-txt-box" : "txt-box"}>
              <p>{item.name}</p>
              <p>{item.price}원</p>
            </div>
          </div>
        ))}
      </div>
      <div className={isHighContrast ? "contrast-pagination" : "pagination"}>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          &lt;&nbsp; 이전
        </button>
        <span style={{ fontSize: "40px" }}>
          <span style={isHighContrast ? {color: "#FFE101"} :{ color: "#8C532C" }}>{currentPage}</span><span style={{ color: "#707070" }}>&nbsp;/&nbsp;</span>
          <span style={{ color: "#707070" }}>{totalPages}</span>
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          다음 &nbsp;&gt;
        </button>
      </div>
    </div>
  );
};

export default SecondPage;
