import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useUpdateProductMutation } from "../../features/apiSlice";
import { useNavigate } from "react-router-dom";
const EditForm = ({ singleProduct }) => {
  const navigate = useNavigate();
  //destructuring:
  const {
    id,
    name: initialName,
    category: initialCategory,
    price: initialPrice,
    seller: initialSeller,
    descsription: initialDescription,
    image: initialImage
  } = singleProduct;

  const [name, setName] = useState(initialName);
  const [price, setPrice] = useState(initialPrice);
  const [seller, setSeller] = useState(initialSeller);
  const [descsription, setDescription] = useState(initialDescription);
  const [image, setImage] = useState(initialImage);
  const [category, setCategory] = useState(initialCategory);
  //Updating product detail:
  const [
    updateProduct,
    { isLoading, isError, error, isSuccess }
  ] = useUpdateProductMutation();

  //handle Submit:
  const handleSubmit = e => {
    e.preventDefault();
    updateProduct({
      id,
      data: {
        name,
        price,
        seller,
        descsription,
        image,
        category
      }
    });
    resetForm();
  };
  //reset form"
  const resetForm = () => {
    setName("");
    setSeller("");
    setDescription("");
    setImage("");
    setPrice("");
    setCategory("");
  };
  useEffect(
    () => {
      {
        isSuccess && navigate("/");
      }
    },
    [isSuccess]
  );
  return (
    <div>
      <div>
        <form
          className="mx-auto mt-5 container w-50 shadow-lg p-3 mb-5 bg-body rounded"
          onSubmit={handleSubmit}
        >
          <ToastContainer />
          <h4 className="text-center">Edit Product Detail</h4>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Product name"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
              value={name}
              onChange={e => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              required
              placeholder="Product category"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={category}
              onChange={e => {
                setCategory(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              required
              placeholder="Product price"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={price}
              onChange={e => {
                setPrice(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              required
              placeholder="Product seller name"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={seller}
              onChange={e => {
                setSeller(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              required
              placeholder="Product description"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={descsription}
              onChange={e => {
                setDescription(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              required
              placeholder="Product image link"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={image}
              onChange={e => {
                setImage(e.target.value);
              }}
            />
          </div>
          <button type="submit" className="btn btn-warning w-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditForm;
