import React from "react";
import { Link } from "react-router-dom";
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";

const SignUp = () => {
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

      <form className="mx-auto w-50 mt-5 mb-5 shadow-lg p-3  bg-body rounded">
        <h3 className="text-center mb-3">Fill Up The Form</h3>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-3 d-flex ">
          <input
            type="password"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter your password"
          />
          <span>
            <BiShow /> <BiHide />
          </span>
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Confirm your password"
          />
        </div>
        <button type="submit" className="btn btn-warning w-100 mb-3">
          Sign Up
        </button>
        <div className="d-flex">
          <p className="m-1">Registered?</p>
          <Link className="m-1" to="/login">
            sign in
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
