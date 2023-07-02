import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { name, price, seller, image, category,id } = product;
  return (
    <div className="mx-auto ">
      <div
        className="card  shadow-lg p-3 mb-5 bg-body rounded "
        style={{ width: "15rem", height: 455 }}
      >
        <img
          style={{ height: 240 }}
          src={image}
          className="card-img-top p-2 image   rounded"
          alt="..."
        />
        <div className="card-body ">
          <h5 className="card-title">
            {name}
          </h5>
          <p className="card-text">
            Price: {price} Taka
          </p>
          {/* <p className="card-text">
            Category: {category}
          </p> */}
          <p className="card-text">
            Seller: {seller}
          </p>
          <Link to={`/products/detail/${id}`} className="btn btn-dark w-100">
            See detail
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
