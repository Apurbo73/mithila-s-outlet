import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import { ImMobile2 } from "react-icons/im";

const Footer = () => {
  return (
    <div className="bg-dark p-2" style={{ marginTop: 280 }}>
      {/* <!--footer section--> */}
      <div className=" mt-4 text-light text-center mb-3">
        <p>&copy; 2023 Apurbo All Right Reserved</p>
        
      </div>
      <div className="container">
        <div className="  text-light pt-3 row">
          <div className="col-12 col-md-12 col-lg-4 mt-3 ">
            <h4>Mithila's Outlet</h4>
            <p style={{ textAlign: "justify", marginRight: 30 }}>
              A authentic Sylheti brand moving forward to make shopping for life
              make much more easier. We offer you all kinds of products you need
              in your daily life in one place. We appreciate any query from you.
              Thanks for visiting.
            </p>
            <BsFacebook style={{ fontSize: 20 }} className="m-2 " />
            <BsInstagram style={{ fontSize: 20 }} className="m-2" />
            <AiFillTwitterCircle style={{ fontSize: 20 }} className="m-2" />
            <AiFillGithub style={{ fontSize: 20 }} className="m-2" />
            <BsTelegram style={{ fontSize: 20 }} className="m-2" />
          </div>
          <div className="col-12 col-md-12 col-lg-3 mt-2 ">
            <h4>About Us</h4>
            <p>Our Story</p>
            <p>Terms & Conditions</p>
            <p>More</p>
            News & Events
          </div>

          <div className="col-12 col-md-12 col-lg-2 mt-3">
            <h5>Useful Links</h5>
            <p>Blog</p>
            <p> Become a member</p>
            <p> How It Works</p>
            <p>Create an Account</p>
            {/* <p>More</p>
            <hr />
            <p> News & Events</p>
            <p>Instructor's Level</p> */}
          </div>
          <div className="col-12 col-md-12 col-lg-2 mt-3">
            <h5>Need Support</h5>
            <p>Contact Us</p>
            <p>FAQ</p>
            {/* <p className="mt-3">Legal</p>
            <hr />
            <p>Sitemap</p>
            <p>Privacy</p>
            <p>Policy Purchase</p>
            <p>Withdraw</p> */}
            <div style={{ fontSize: 20 }}>
              <ImMobile2 />: 01774573076
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
