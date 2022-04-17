import React from "react";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";
import brandLogo from "../../../images/brandlogo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav sticky="top" className="header container">
      <div>
        <Link to={'/'}><img height={40} src={brandLogo} alt="" /></Link>
      </div>

      <div className="nav-menu">
        <CustomLink to="/home">HOME</CustomLink>
        <CustomLink to="/blogs">BLOGS</CustomLink>
        <CustomLink to="/about">ABOUT</CustomLink>
        <Link to="/login">LOGIN</Link>
      </div>
    </nav>
    </header>
  );
};

export default Header;
