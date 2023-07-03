import React from "react";

const SeeCartList = ({ cartProduct }) => {
    console.log(cartProduct)
    const { name, price, seller, image, category,id } = cartProduct;

  return (
    <div>
      <div>
        <div className="card mb-3  mt-4" style={{ maxWidth: 540 }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={image} className="img-fluid rounded-start p-3" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                 {name}
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeeCartList;
