import React from "react";
import { useContext } from "react";
import { Data } from "../Context/DataContext";

const Career = () => {
  const { career } = useContext(Data);
  return (
    <div style={{ background: "#FFE5E6", padding: "5rem 0" }}>
      <div className="container">
        <h1 className="text-danger">{career?.data?.heading}</h1>
        <h5 className="text-danger">{career?.data?.sub_heading}</h5>
        <p>{career?.data?.text}</p>
        <div className="d-flex">
          <h5 className="text-danger">Email : </h5>
          <a href="mailto:hello@universomagnanimo.com">
            <h5 className="text-danger">hello@universomagnanimo.com</h5>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Career;
