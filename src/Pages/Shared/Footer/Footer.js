import React from "react";
import "./Footer.css";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="p-4 text-white footer">
      <p>Copyright &copy;{year} Boast Net</p>
    </div>
  );
};

export default Footer;
