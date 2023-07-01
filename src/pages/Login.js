import React from "react";
import { Link } from "react-router-dom";
import cart from '../images/cart.jpg';
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
      <div className="pt-5 w-50 container d-flex mx-auto text-center ">
        <div style={{ height: 300 }} className="w-50 mt-5 bg-warning">
          <h4 className="mt-5 pt-5">Mithila's Outlet</h4>
          <img className="rounded-circle" style={{height:100}} src={cart} alt="" />
          <p className=" pt-4">The best online shop near you..</p>
        </div>

        <div className=" mt-5 w-50 shadow-lg p-3 mb-5 bg-body rounded ">
          <form className=" pb-5">
            <h3 className="text-center">Sign in</h3>
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
            <button type="submit" className="btn btn-warning w-100 ">
              Submit
            </button>
            <div className="d-flex">
              <p className="m-1">Not registered?</p>
              <Link className="m-1" to="/sign-up">
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
