import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import cart from "../images/cart.jpg";
import { AiOutlinePlusCircle } from "react-icons/ai";

const Navbar = props => {
  const [searchValue, setSearch] = useState("");
  //   alert(searchValue)
  useEffect(
    () => {
      props.onSearch(searchValue);
    },
    [searchValue, props]
  );
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand text-warning" href="#">
            <img
              style={{ height: 50, marginRight: 10 }}
              className=" rounded-circle"
              src={cart}
              alt=""
            />
            Mithila's Outlet
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/products/add/"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Add Product <AiOutlinePlusCircle />
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link" href="#">
                  About us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
              <li className="nav-item ">
                <Link to='/cart' className="nav-link " href="#">
                  Cart <span className="text-warning">0</span>
                </Link>
              </li>
            </ul>
            {/* searching process: sending methods from child to parent. child is navbar, parent is home page here*/}
            <form className="d-flex m-3 ">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchValue}
                onChange={e => {
                  setSearch(e.target.value);
                }}
              />
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
