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
      <div className="d-flex container">
        <div className="col-7 ">
          {cartProducts &&
            cartProducts.map(cartProduct =>
              <SeeCartList cartProduct={cartProduct} />
            )}
        </div>
        <div style={{height:300}} className="mt-4  shadow-lg p-3 mb-5 bg-body rounded ">
          <h5>Total Balance</h5>
          <p>
            Total Products:{cartProducts.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
