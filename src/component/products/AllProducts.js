import React from "react";
import Product from "./Product";

const AllProducts = ({ allProducts }) => {
  return (
    <div className="d-flex flex-wrap mt-3">
      {allProducts && allProducts.map(product => <Product product={product} />)}
    </div>
  );
};

export default AllProducts;
