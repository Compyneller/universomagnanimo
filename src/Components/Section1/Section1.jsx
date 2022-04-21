import React from "react";
import "./section1.scss";

const Section1 = () => {
  return (
    <div className="section1Container">
      <div className="container text-light">
        <div className="row">
          <div className="col-12 col-lg-4  ">
            {/* <form action="">
              <p>SEND MESSAGE</p>
              <div className="w-100 d-flex flex-column align-items-end justify-content-center">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email Address" />
                <textarea
                  name=""
                  id=""
                  cols="30"
                  placeholder="Message"
                  rows="5"
                ></textarea>
                <button className="bg-danger ">Submit</button>
              </div>
            </form> */}
          </div>
          <div className="col-12 col-lg-8 ">
            <div className="row text-center">
              <div
                className="col-12 col-lg-6 p-5"
                style={{ background: "#ED1E26" }}
              >
                <h5 style={{ fontSize: "18px" }}>Who we are?</h5>
                <p style={{ fontSize: "14px" }}>
                  Universo Magnanimo is a tech-enabled digital marketing
                  solutions provider, and we create custom strategies for each
                  of our clients based on their needs and goals.
                </p>
              </div>
              <div
                className="col-12 col-lg-6 p-5"
                style={{ background: "#E94D62" }}
              >
                <h5 style={{ fontSize: "18px" }}>What You Get?</h5>
                <p style={{ fontSize: "14px" }}>
                  Our team is made up of award-winning marketers, designers, and
                  developers, and we know what it takes to get real results
                  online. We also keep the focus on the metrics that mean the
                  most, like leads and revenue generated. We know that hitting
                  these goals is what moves businesses forward, and we believe
                  that our client’s success is the best measure of our own
                  performance.
                </p>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
