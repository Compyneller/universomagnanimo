import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Data } from "../Context/DataContext";

const News = () => {
  const { news } = useContext(Data);
  return (
    <div style={{ background: "#FFE5E6", padding: "5rem 0" }}>
      <div className="container">
        <h1 className="text-center text-danger">{news?.data?.heading}</h1>
        <h5 className="text-danger">{news?.data?.sub_heading}</h5>
        <p>{news?.data?.text}</p>
        <h5 className="text-danger">{news?.data?.call_to_action}</h5>
        <Link className="contactUsLink" to="/contact">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default News;
