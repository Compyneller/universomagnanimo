import React from "react";
import "./footer.scss";
import banner from "../../Assets/banner.jpg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Data } from "../../Context/DataContext";

const Footer = () => {
  const { homepage } = useContext(Data);
  return (
    <div className="FooterContainer">
      <img src={banner} alt="" />
      <div className="container  d-flex align-items-center flex-column justify-content-center ">
        <div className="footerBox">
          <div className="row">
            <div className="col-12 col-lg-10">
              <h1>{homepage?.data?.footer?.text_banner?.text}</h1>
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
              href={homepage?.data?.footer?.linkedin}
              target="_blank"
            >
              <i className="fa-brands fa-linkedin" />
            </a>
          </div>
          <div className="col-4 col-lg-2">
            <a
              style={{ color: "white", fontSize: "40px" }}
              href={homepage?.data?.footer?.twitter}
              target="_blank"
            >
              <i className="fa-brands fa-twitter" />
            </a>
          </div>
          <div className="col-4 col-lg-2">
            <a
              style={{ color: "white", fontSize: "40px" }}
              href={homepage?.data?.footer?.medium}
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
