import React from "react";
import { useContext } from "react";
import { Data } from "../../Context/DataContext";
import "./section1.scss";

const Section1 = () => {
  const { homepage } = useContext(Data);
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
                <h5 style={{ fontSize: "18px" }}>
                  {homepage?.data?.about?.content_boxes[0]?.heading}
                </h5>
                <p style={{ fontSize: "14px" }}>
                  {homepage?.data?.about?.content_boxes[0]?.text}
                </p>
              </div>
              <div
                className="col-12 col-lg-6 p-5"
                style={{ background: "#E94D62" }}
              >
                <h5 style={{ fontSize: "18px" }}>
                  {" "}
                  {homepage?.data?.about?.content_boxes[1]?.heading}
                </h5>
                <p style={{ fontSize: "14px" }}>
                  {homepage?.data?.about?.content_boxes[1]?.text}
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
