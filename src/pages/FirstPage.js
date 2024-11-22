import React, { useContext } from "react";
import { AppContext } from "../App";
import { TakeInIcon, TakeOutIcon } from "../assets/icons";
import { Link } from "react-router-dom";

const FirstPage = () => {
  const { isHighContrast } = useContext(AppContext);
  return (
    <div className="max-width">
      <img
        className="first-image"
        src="/images/poster_home.png"
        alt="coffee"
      ></img>
      <div
        className={
          isHighContrast ?"contrast-first-content" : "first-content"
        }
      >
        <Link to="/second" className="home-btn">
          <TakeInIcon></TakeInIcon>
          <p>포장하기</p>
        </Link>
        <Link to="/second" className="home-btn">
          <TakeOutIcon></TakeOutIcon>
          <p>먹고가기</p>
        </Link>
      </div>
    </div>
  );
};

export default FirstPage;
