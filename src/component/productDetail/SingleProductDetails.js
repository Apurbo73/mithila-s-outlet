import React, { useEffect, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { LuMinusCircle } from "react-icons/lu";
import {
  useAddToCartMutation,
  useDeleteProductMutation
} from "../../features/apiSlice";
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
    { isLoading, isError, isSuccess }
  ] = useDeleteProductMutation();
  //handle Delete:
  const handleDelete = e => {
    e.preventDefault();
    deleteProduct(id);
  };
  useEffect(
    () => {
      {
        isSuccess && navigate("/");
      }
    },
    [isSuccess]
  );

  //storing to cart:
  const [addToCart, { error }] = useAddToCartMutation();

  //handle Add To Cart:
  const handleAddToCart = e => {
    e.preventDefault();
    addToCart({
      name,
      category,
      image,
      quantity: count,
      price: Number(price) * count,
      seller,
      descsription
    });
    toast(` ${name} is added to cart`);
  };

  // handle quantity  of products:
  let [count, setCount] = useState(1);
  //handle Increment Count:
  const handleIncrement = e => {
    setCount(count + 1);
    // console.log(count);
  };
  //handle Decrement Count:
  let handleDecrement = () => {
    setCount(count - 1);
    if (count === 1) {
      toast("Quantity can't be less than 1");
      setCount(1);
    }
  };
  // console.log(count)
  return (
    <div className=" mt-5  container">
      <ToastContainer />
      <div className="card mb-3 shadow-lg p-3 mb-5 bg-body rounded">
        <div className="row g-0">
          <div className="col-md-6 text-center">
            <img
              src={image}
              className="img-fluid rounded-start p-5 image"
              alt="..."
            />
            <div className="">
              <Link className="btn btn-warning m-1" onClick={handleAddToCart}>
                Add To Cart
              </Link>
              <button className="btn btn-dark m-1">
                Quantity : {count}
              </button>
              <button
                className="btn btn-outline-warning m-1"
                onClick={handleIncrement}
              >
                <AiOutlinePlusCircle />
              </button>
              <button
                className="btn btn-outline-dark m-1"
                onClick={handleDecrement}
              >
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
                Category :{category}
              </p>
              <p className="card-text">
                Seller: {seller}
              </p>

              <div>
                <Link
                  to={`/products/edit-detail/${id}`}
                  className="btn btn-outline-warning m-1"
                >
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
