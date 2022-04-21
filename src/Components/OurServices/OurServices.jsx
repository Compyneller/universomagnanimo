import React from "react";
import first from "../../Assets/2.jpg";
import sec from "../../Assets/3.jpg";
import third from "../../Assets/4.jpg";
import fourth from "../../Assets/5.jpg";
import fifth from "../../Assets/6.jpg";
const OurServices = () => {
  return (
    <div
      className="ourServicesContainer"
      style={{ background: "#FFE5E6", minHeight: "50vh", padding: "5rem 0" }}
    >
      <div className="container">
        <h1>OUR SERVICES</h1>
        <p className="mb-5">
          Through our years of experience, we’ve also learned that while each
          channel has its own set of advantages, they all work best when
          strategically paired with other channels. That’s why we offer
          full-service strategies to each of our clients and use a combination
          of digital channels to increase visibility, conversions, and revenue.{" "}
          <br />
          Our team has also worked to develop proprietary tools that help us
          more effectively track and report our results.
        </p>
        <div className="row mb-5">
          <div className="col-12 col-lg-3">
            <div className="row">
              <div className="col-2">{/* <img src={first} alt="" /> */}</div>
              <div className="col-10">
                <h5>Brand Awareness</h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3">
            <div className="row">
              <div className="col-2">
                {/* <img
                  className="w-100"
                  src="https://images.unsplash.com/photo-1567581935884-3349723552ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                  alt=""
                /> */}
              </div>
              <div className="col-10">
                <h5>Mobile App Development</h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3">
            <div className="row">
              <div className="col-2">{/* <img src={third} alt="" /> */}</div>
              <div className="col-10">
                <h5>Web Development</h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3">
            <div className="row">
              <div className="col-2">{/* <img src={fourth} alt="" /> */}</div>
              <div className="col-10">
                <h5>Software Development</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-3">
            <div className="row">
              <div className="col-2">{/* <img src={fifth} alt="" /> */}</div>
              <div className="col-10">
                <h5>Business Management</h5>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-3">
            <div className="row">
              <div className="col-2">{/* <img src={fifth} alt="" /> */}</div>
              <div className="col-10">
                <h5>Hosting & Domain</h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3">
            <div className="row">
              <div className="col-2">{/* <img src={fifth} alt="" /> */}</div>
              <div className="col-10">
                <h5>Graphic & Animation</h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3">
            <div className="row">
              <div className="col-2">{/* <img src={fifth} alt="" /> */}</div>
              <div className="col-10">
                <h5>Foreign Exchange (Launching in 2023)</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
