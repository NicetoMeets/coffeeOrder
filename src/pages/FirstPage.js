import React from "react";
import { TakeInIcon, TakeOutIcon } from "../assets/icons";
import { Link } from "react-router-dom";

const FirstPage = () => {
  return (
    <div className="max-width">
      <div>
        <img
          className="max-width"
          src="/images/poster_home.png"
          alt="coffee"
        ></img>
      </div>
      <div className="first-content">
        <Link to='/second' className="home-btn"><TakeInIcon></TakeInIcon><p>포장하기</p></Link>
        <Link to='/second' className="home-btn"><TakeOutIcon></TakeOutIcon><p>먹고가기</p></Link>
      </div>
    </div>
  );
};

export default FirstPage;