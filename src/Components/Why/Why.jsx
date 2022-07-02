import React from "react";
import { useContext } from "react";
import { Data } from "../../Context/DataContext";

const Why = () => {
  const { homepage } = useContext(Data);
  return (
    <div
      className="whyContainer text-light d-flex align-items-center w-100"
      style={{ background: "#ED1E26", minHeight: "50vh", padding: "2rem 0" }}
    >
      <div className="container ">
        <div className="whyContainer">
          <h1>{homepage?.data?.why?.heading}</h1>
          <p>{homepage?.data?.why?.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Why;
