import React from "react";
import { Link } from "react-router-dom";
import cart from "../images/cart.jpg";
const Login = () => {
  return (
    <div>
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
                <Link to="/about" className="nav-link" href="#">
                  About us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="pt-5 mt-5 w-50 container d-flex mx-auto text-center ">
        <div
          style={{ height: 300 }}
          className="w-25 mt-5 bg-warning d-none d-md-block"
        >
          <h5 className=" pt-5" />
          <Link to="/">
            <img
              className="rounded-circle mt-3"
              style={{ height: 100 }}
              src={cart}
              alt=""
            />
          </Link>
          <h6 className="mt-3">Mithila's Outlet</h6>

          <p className=" mt-4">The best online shop..</p>
        </div>

        <div className=" mt-5 w-75 shadow-lg p-3 mb-5 bg-body rounded ">
          <form className="">
            <h4 className="text-center mb-4">Welcome..</h4>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Enter your password"
              />
            </div>
            <button type="submit" className="btn btn-outline-warning w-100 mt-4">
              Sign in
            </button>
            <div className="d-flex mt-2">
              <p className="m-1">Not registered?</p>
              <Link className="mt-1" to="/sign-up">
                sign up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
