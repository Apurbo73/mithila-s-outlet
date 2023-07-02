import React, { useState } from "react";
import { useAddProductMutation } from "../../features/apiSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AddProductForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [seller, setSeller] = useState("");
  const [descsription, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");

  const [
    addProduct,
    { isLoading, iserror, isSuccess }
  ] = useAddProductMutation();

  //handle Submit:
  const handleSubmit = e => {
    e.preventDefault();
    addProduct({
      name,
      price,
      seller,
      descsription,
      image,
      category
    });
    toast(`New product ${name} is added`);
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
  return (
    <div>
      <form
        className="mx-auto mt-5 container w-50 shadow-lg p-3 mb-5 bg-body rounded"
        onSubmit={handleSubmit}
      >
        <ToastContainer />
        <h4 className="text-center">Add New Product</h4>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Product name"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={name}
            onChange={e => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
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
  );
};

export default AddProductForm;
