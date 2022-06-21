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
        <div className="row w-100" style={{ zIndex: "1000" }}>
          <a
            className="my-auto text-center emailLink"
            href="mailto:hello@universomagnanimo.com"
          >
            <h2 className="text-dark ">hello@universomagnanimo.com</h2>
          </a>
        </div>
        <div className="row w-100" style={{ zIndex: "1000" }}>
          <div className="col-4 col-lg-2">
            <a
              style={{ color: "white", fontSize: "40px" }}
              href="https://www.linkedin.com/company/universo-magnanimo-unipessoal-lda/"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin" />
            </a>
          </div>
          <div className="col-4 col-lg-2">
            <a
              style={{ color: "white", fontSize: "40px" }}
              href="https://twitter.com/UniversoMagnan1"
              target="_blank"
            >
              <i className="fa-brands fa-twitter" />
            </a>
          </div>
          <div className="col-4 col-lg-2">
            <a
              style={{ color: "white", fontSize: "40px" }}
              href="https://medium.com/me/stories/public"
              target="_blank"
            >
              <i className="fa-brands fa-medium"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
