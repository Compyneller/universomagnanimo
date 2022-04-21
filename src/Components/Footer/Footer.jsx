import React from "react";
import "./footer.scss";
import banner from "../../Assets/banner.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="FooterContainer">
      <img src={banner} alt="" />
      <div className="container  d-flex align-items-center flex-column justify-content-center ">
        <div className="footerBox">
          <div className="row">
            <div className="col-12 col-lg-10">
              <h1>Get A Free Online Quote In Under 24 Hours</h1>
            </div>
            <div className="col-12 col-lg-2">
              <Link to="/contact">Start Quote</Link>
            </div>
          </div>
        </div>
        <a
          className="my-auto text-center emailLink"
          href="mailto:hello@universomagnanimo.com"
        >
          <h2 className="text-dark ">hello@universomagnanimo.com</h2>
        </a>
      </div>
    </div>
  );
};

export default Footer;
