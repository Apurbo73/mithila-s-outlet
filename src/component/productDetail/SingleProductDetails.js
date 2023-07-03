import React, { useEffect } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";

import { LuMinusCircle } from "react-icons/lu";
import { useDeleteProductMutation } from "../../features/apiSlice";
import { Link, useNavigate } from "react-router-dom";
const SingleProductDetails = ({ singleProduct }) => {
  const navigate = useNavigate();
  const {
    id,
    name,
    category,
    image,
    price,
    seller,
    descsription
  } = singleProduct;
  const [
    deleteProduct,
    { isLoading, isError, error, isSuccess }
  ] = useDeleteProductMutation();
  //handle Delete:
  const handleDelete = e => {
    e.preventDefault();
    deleteProduct(id);
  };
  useEffect(() => {
    {
      isSuccess && navigate("/");
    }
  }, [isSuccess]);
  return (
    <div className=" mt-5  container">
      <div className="card mb-3 shadow-lg p-3 mb-5 bg-body rounded">
        <div className="row g-0">
          <div className="col-md-6 text-center">
            <img
              src={image}
              className="img-fluid rounded-start p-5 image"
              alt="..."
            />
            <div className="">
              <button className="btn btn-outline-warning m-1">
                Add To Cart
              </button>
              <button className="btn btn-outline-dark m-1">
                Remove From Cart
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
                Category :{category}
              </p>
              <p className="card-text">
                Seller: {seller}
              </p>

              <div>
                <Link to={`/products/edit-detail/${id}`} className="btn btn-outline-warning m-1">
                  Edit Detail<BiEdit />
                </Link>
                <button
                  className="btn btn-outline-dark m-1"
                  onClick={handleDelete}
                >
                  Delete Product<RiDeleteBin6Line />
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
