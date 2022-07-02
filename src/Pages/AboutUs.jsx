import React from "react";
import { useContext } from "react";
import banner from "../Assets/marvin-meyer-SYTO3xs06fU-unsplash.jpg";
import { Data } from "../Context/DataContext";

const AboutUs = () => {
  const { about } = useContext(Data);
  console.log(about);
  return (
    <div className="mainContainer py-5" style={{ background: "#FFEAEB" }}>
      <div className="container">
        <div className="row">
          <div className="col-12  ">
            <h1 className="text-danger">{about?.data?.heading}</h1>
            <div className="row mb-2">
              <h5 className="text-danger">{about?.data?.sub_heading}</h5>
              <div className="row mb-4">
                <div className="col-6">
                  <img src={about?.data?.images[0]} className="w-100" alt="" />
                </div>
                <div className="col-6">
                  <img src={about?.data?.images[1]} className="w-100" alt="" />
                </div>
              </div>
              {/* <br /> <br />
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
              </div> */}
            </div>
            <h5 className="text-danger">
              {about?.data?.content_paras[0]?.heading}
            </h5>
            <p>{about?.data?.content_paras[0]?.text}</p>{" "}
            <h5 className="text-danger">
              {about?.data?.content_paras[1]?.heading}
            </h5>
            <p>{about?.data?.content_paras[1]?.text}</p>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
