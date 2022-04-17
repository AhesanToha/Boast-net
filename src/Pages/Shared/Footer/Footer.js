import React from "react";
import "./Footer.css";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="p-4 text-white footer">
      <p>Copyright &copy;{year} Boast Net</p>
    </footer>
  );
};

export default Footer;
