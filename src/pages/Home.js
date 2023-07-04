import React, { useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AllProducts from "../component/products/AllProducts";
import FilterPage from "../component/filter/FilterPage";
import Navbar from "./Navbar";
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
const image9 =
  "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100";
const Home = ({ allData }) => {
  const [allProducts, setAllProducts] = useState(allData);
  const [filteredProducts, setFilteredProducts] = useState(allData);
  //handle Search by product name:
  const handleSearch = searchText => {
    let text = searchText.toLowerCase();
    const searchedProduct = allProducts.filter(data => {
      const newProduct = data.name.toLowerCase();
      return newProduct.includes(text);
    });
    setFilteredProducts(searchedProduct);
  };
  // handle showing category on pressing Filter Category button:
  const [show, setShow] = useState(false);
  const handleCategoryShow = () => {
    setShow(!show);
  };

  //handle Filter Category:
  const handleFilterCategory=(category)=>{
    let filteredCategory = category.toLowerCase();
    const filteredProduct = allProducts.filter(data => {
      const newProduct = data.category.toLowerCase();
      return newProduct.includes(filteredCategory);
    });
    setFilteredProducts(filteredProduct);
  }
  return (
    <div>
      <Navbar onSearch={handleSearch} />
      {/* simple  design starts*/}
      <div className="d-none d-md-block ">
        <div className="mt-5 pt-5 d-flex  ">
          <div className=" ">
            <img className="image" src={image1} alt="" />
            <p className="btn btn-outline-warning p-1 w-50 mx-auto rounded text-dark">
              Grocery
            </p>
          </div>
          <div className="">
            <img className="image" src={image2} alt="" />
            <p className="btn btn-outline-warning p-1 w-50 mx-auto rounded text-dark">
              Mobile
            </p>
          </div>
          <div className="">
            <img className="image" src={image3} alt="" />
            <p className="btn btn-outline-warning p-1 w-50 mx-auto rounded text-dark">
              Fashion
            </p>
          </div>
          <div className="">
            <img className="image" src={image4} alt="" />
            <p className="btn btn-outline-warning p-1  mx-auto rounded text-dark">
              Electronics
            </p>
          </div>
          <div className="">
            <img className="image" src={image5} alt="" />
            <p className="btn btn-outline-warning p-1 w-50 mx-auto rounded text-dark">
              Home
            </p>
          </div>
          <div className="">
            <img className="image" src={image6} alt="" />
            <p className="btn btn-outline-warning p-1  mx-auto rounded text-dark">
              Appliances
            </p>
          </div>
          <div className="">
            <img className="image" src={image7} alt="" />
            <p className="btn btn-outline-warning p-1 w-50 mx-auto rounded text-dark">
              Travel
            </p>
          </div>
          <div className="">
            <img className="image" src={image8} alt="" />
            <p className="btn btn-outline-warning p-1  mx-auto rounded text-dark">
              Baby's
            </p>
          </div>
          <div className="">
            <img className="image" src={image9} alt="" />
            <p className="btn btn-outline-warning p-1  mx-auto rounded text-dark">
              Top Deal
            </p>
          </div>
        </div>
      </div>
      {/* simple  design ends*/}
      <Carousel />
      {/* filter by category starts*/}
      <div className="">
        <button className="btn btn-dark mt-4" onClick={handleCategoryShow}>
          Filter Category
        </button>
        {show && <FilterPage onFilter={handleFilterCategory} />}
      </div>
      {/* filter by category ends*/}

      <div className="">
        <div className="">
          <ToastContainer />
          {allProducts && <AllProducts allProducts={filteredProducts} />}
        </div>
      </div>
    </div>
  );
};

export default Home;
