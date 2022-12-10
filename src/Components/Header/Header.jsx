import React from "react";
import image from "./header-image.svg";
import "./Header.css";

const Header = ({ text }) => {
  return (
    <div className="head-container">
      <h1 className="head-text">What thou Name?</h1>
      <img
        src={image}
        className={`"head-image" ${text.length > 0 ? "head-image-minimised" : "head-image-expanded"}`}
        alt="header"
      />
      <h3>Get Started with your million dollar idea!</h3>
    </div>
  );
};

export default Header;
