import React, { useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import cart from "../images/cart.jpg";
import AllProducts from "../component/products/AllProducts";
const image1 =
  "https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100";
const image2 =
  "https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100";
const image3 =
  "https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100";
const image4 =
  "https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100";
const image5 =
  "https://rukminim1.flixcart.com/flap/128/128/image/ee162bad964c46ae.png?q=100";
const image6 =
  "https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100";
const image7 =
  "https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100";
const image8 =
  "https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100";
const Home = ({ allData }) => {
  const [allProducts, setAllProducts] = useState(allData);
  const [filteredProducts, setFilteredProducts] = useState(allData);
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
                <p className="nav-link " href="#">
                  Cart <span className="text-warning">0</span>
                </p>
              </li>
            </ul>
            <form className="d-flex m-3 ">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
        </div>
      </nav>

      {/* simple  design starts*/}
      <div className="d-none d-md-block ">
        <div className="mt-5 pt-5 d-flex  container">
          <div className="m-1 ">
            <img className="image" src={image1} alt="" />
            <p className="btn btn-outline-warning p-1 w-50 mx-auto rounded text-dark">
              Grocery
            </p>
          </div>
          <div className="m-1">
            <img className="image" src={image2} alt="" />
            <p className="btn btn-outline-warning p-1 w-50 mx-auto rounded text-dark">
              Mobile
            </p>
          </div>
          <div className="m-1">
            <img className="image" src={image3} alt="" />
            <p className="btn btn-outline-warning p-1 w-50 mx-auto rounded text-dark">
              Fashion
            </p>
          </div>
          <div className="m-1">
            <img className="image" src={image4} alt="" />
            <p className="btn btn-outline-warning p-1  mx-auto rounded text-dark">
              Electronics
            </p>
          </div>
          <div className="m-1">
            <img className="image" src={image5} alt="" />
            <p className="btn btn-outline-warning p-1 w-50 mx-auto rounded text-dark">
              Home
            </p>
          </div>
          <div className="m-1">
            <img className="image" src={image6} alt="" />
            <p className="btn btn-outline-warning p-1  mx-auto rounded text-dark">
              Appliances
            </p>
          </div>
          <div className="m-1">
            <img className="image" src={image7} alt="" />
            <p className="btn btn-outline-warning p-1 w-50 mx-auto rounded text-dark">
              Travel
            </p>
          </div>
          <div className="m-1">
            <img className="image" src={image8} alt="" />
            <p className="btn btn-outline-warning p-1  mx-auto rounded text-dark">
              Baby Products
            </p>
          </div>
        </div>
      </div>
      {/* simple  design ends*/}

      <Carousel />

      {allProducts && <AllProducts allProducts={filteredProducts} />}
    </div>
  );
};

export default Home;
