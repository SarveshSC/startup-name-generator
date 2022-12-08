import React from "react";
import image from './header-image.svg'
import './Header.css'

const Header = () => {
  return (
    <div className="head-container">
      <img src={image} className="head-image" alt="header"/>
      <h1 className="head-text">Name</h1>
    </div>
  );
};

export default Header;
