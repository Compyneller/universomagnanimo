import React from "react";
import banner from "../Assets/marvin-meyer-SYTO3xs06fU-unsplash.jpg";

const AboutUs = () => {
  return (
    <div className="mainContainer py-5" style={{ background: "#FFEAEB" }}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 d-flex align-items-center flex-column justify-content-center">
            <div className="row">
              <div className="col-6">
                <img src={banner} className="w-100" alt="" />
              </div>
              <div className="col-6">
                <img
                  src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  className="w-100"
                  alt=""
                />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-6">
                <img
                  src="https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  className="w-100"
                  alt=""
                />
              </div>
              <div className="col-6">
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  className="w-100"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 ">
            <h1 className="text-danger">About Us</h1>
            <div className="row mb-2">
              <h5 className="text-danger">
                We keep the focus on driving results.
              </h5>
            </div>
            <h5 className="text-danger">More than just a place to work.</h5>
            <p>
              At Universo Magnanimo, our clients are always our top priority —
              but we firmly believe in creating an environment that’s more than
              just a place to work. Building a positive company culture has
              always been important to us. <br />
              <br /> What truly sets Universo Magnanimo apart is our dedication
              to positivity as the core of our company values. We strive to
              replace complaints with solutions, use challenges to our benefit,
              and bring energy and creativity to every project we take on. And
              we believe in the importance of improving the lives of others.
            </p>{" "}
            <h5 className="text-danger">IT Services Solutions</h5>
            <p>
              We provide a wide range of solutions in relation to IT services
              from web & app development, server administration, graphic
              designing, and animation. We ensure that our team of experts build
              a quality mobile application, ensuring no technical glitches in
              order to provide a high level of satisfaction to our clients. This
              is a reason why we have a high level of repeat work from a set of
              clients. Our pricing model is such that our clients derive 100% of
              the value of their money and therefore, we become their trusted
              partners.
            </p>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
