import React from "react";
import SingleProductDetails from "./SingleProductDetails";
import { Link, useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../features/apiSlice";

const SingleProduct = () => {
  const { id } = useParams();
  const {
    data: singleProduct,
    isError,
    isLoadng,
    error
  } = useGetSingleProductQuery(id);
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

<div className="mx-auto ">
{singleProduct && <SingleProductDetails singleProduct={singleProduct} />}

</div>
    </div>
  );
};

export default SingleProduct;
