import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { LuMinusCircle } from "react-icons/lu";

const SeeCartList = ({ cartProduct }) => {
  // console.log(cartProduct);
  const {
    name,
    price,
    seller,
    image,
    category,
    id,
    descsription
  } = cartProduct;

  return (
    <div>
      <div>
        <div className="card mb-3  mt-4" style={{ maxWidth: 540 }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={image}
                className="img-fluid rounded-start p-3 image"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">
                  Product : {name}
                </h5>
                <p className="card-text">
                  Price: {price} Taka
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    Category: {category}
                  </small>
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    Seller: {seller}
                  </small>
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    Description: {descsription}
                  </small>
                </p>
              </div>

           <div className="mb-2">
           <button className="btn btn-dark m-1">
                <AiOutlinePlusCircle />
              </button>
              <button className="btn btn-secondary m-1">0</button>
              <button className="btn btn-warning m-1">
                <LuMinusCircle />
              </button>
           </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeeCartList;
