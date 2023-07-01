import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div style={{marginTop:150}}>
      <div className="text-center bg-dark p-4 ">
        <Link
          className="text-light"
          style={{ textDecoration: "none" }}
          to="/about"
        >
          &copy; Apurbo Deb Nath 2023
        </Link>
      </div>
    </div>
  );
};

export default Footer;
