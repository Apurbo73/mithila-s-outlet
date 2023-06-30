import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="text-center bg-dark p-3 ">
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
