import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";

import { LuMinusCircle } from "react-icons/lu";
const SingleProductDetails = ({ singleProduct }) => {
  const {
    id,
    name,
    category,
    image,
    price,
    seller,
    descsription
  } = singleProduct;
  return (
    <div className=" mt-5  container">
      <div className="card mb-3 shadow-lg p-3 mb-5 bg-body rounded">
        <div className="row g-0">
          <div className="col-md-6">
            <img
              src={image}
              className="img-fluid rounded-start p-5 image"
              alt="..."
            />
            <div className="text-center">
              <button className="btn btn-outline-warning m-1">
                <AiOutlinePlusCircle />
              </button>
              <button className="btn btn-outline-dark m-1">
                <LuMinusCircle />
              </button>
            </div>
          </div>
          <div className="col-md-6 mt-4">
            <div className="card-body">
              <h5 className="card-title">
                {name}
              </h5>
              <p className="card-text">
                {descsription}
              </p>
              <p className="card-text">
                Price: {price} Taka
              </p>
              <p className="card-text">
                Category :{category}{" "}
              </p>
              <p className="card-text">
                Seller: {seller}
              </p>

              <div>
                <button className="btn btn-outline-warning m-1">
                  <BiEdit />
                </button>
                <button className="btn btn-outline-dark m-1">
                  <RiDeleteBin6Line />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductDetails;
