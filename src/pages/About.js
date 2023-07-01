import React from "react";
import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import image from "../images/apu.png";
const About = () => {
  return (
    <div className="">
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
      <div
        className="card mx-auto mt-5 p-3 text-center shadow-lg p-3 mb-5 bg-body rounded"
        style={{ width: "22rem" }}
      >
        <img
          style={{ height: 300, padding: 10 }}
          src={image}
          className="card-img-top bg-warning"
          alt="..."
        />
        <div className="card-body">
          <p className="card-title mb-3">Developed by:</p>
          <h5 className="card-title">Apurbo Deb Nath</h5>
          <p className="card-text">Web Developer From Sylhet</p>
          <p className="card-text">Email: apurbodebnath50@gmail.com</p>
          <p className="card-text">Mobile: 01774573076</p>

          <Link
            style={{ textDecoration: "none", fontSize: 25 }}
            to="https://github.com/Apurbo73"
            className="text-dark "
          >
            <BsGithub />
          </Link>
          <Link to="/" className="btn btn-warning w-100 mt-3">
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
