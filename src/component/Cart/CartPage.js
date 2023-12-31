import React from "react";
import { Link, useParams } from "react-router-dom";
import SeeCartList from "./SeeCartList";
import { useGetCartListQuery } from "../../features/apiSlice";

const CartPage = () => {
  const {
    data: cartProducts,
    isLoading,
    isError,
    error
  } = useGetCartListQuery();
  //   console.log(cartProduct)

  //calculating  balance:

  const total = cartProducts => {
    let balance = 0;

    {
      cartProducts &&
        cartProducts.forEach(b => {
          const { price } = b;
          balance = balance + Number(price);
        });
    }
    return balance;
  };

  //calculating total quantity of products in cart:

  const quantityOfproducts = cartProducts => {
    let totalProducts = 0;
    {
      cartProducts &&
        cartProducts.forEach(t => {
          const { quantity } = t;
          totalProducts = totalProducts + Number(quantity);
        });
    }
    return totalProducts;
  };
  return (
    <div>
      {/* nav section starts */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand text-warning" href="#">
            Mithila's Outlet
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Hello
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* nav section ends */}
      <div className="d-flex flex-wrap container">
        <div className="col-7 ">
          {cartProducts &&
            cartProducts.map(cartProduct =>
              <SeeCartList key={cartProduct.id} cartProduct={cartProduct} />
            )}
        </div>
        <div
          style={{ height: 200 }}
          className="mt-4  shadow-lg p-4 mb-5 bg-warning rounded col-5 text-center"
        >
          <h6>
            Total Balance: {total(cartProducts)} Taka
          </h6>
          <p>
            Total Item : {cartProducts && cartProducts.length}
          </p>
          <h6>
            Total Products: {quantityOfproducts(cartProducts)}
          </h6>
          <button className="btn btn-dark">Check Out Now</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
