import React from "react";

const Product = ({ product }) => {
  const { name, price, seller, image } = product;
  return (
    <div  className="mx-auto">
      <div  className="card m-2 shadow-lg p-3 mb-5 bg-body rounded " style={{ width: "18rem",height:455 }}>
        <img style={{height:240}} src={image} className="card-img-top p-4 image  rounded" alt="..." />
        <div className="card-body ">
          <h5 className="card-title">
            {name}
          </h5>
          <p className="card-text">
            Price: {price} Taka
          </p>
          <p className="card-text">
            Seller: {seller}
          </p>
          <a href="#" className="btn btn-primary w-100">
            See detail
          </a>
        </div>
      </div>
    </div>
  );
};

export default Product;
