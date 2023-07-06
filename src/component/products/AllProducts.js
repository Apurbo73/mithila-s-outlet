import React from "react";
import Product from "./Product";

const AllProducts = ({ allProducts }) => {
  return (
<div className="">
<div className=" mt-3 row   ">
      {allProducts && allProducts.map(product => <Product key={product.id} product={product} />)}
    </div>
</div>
  );
};

export default AllProducts;
