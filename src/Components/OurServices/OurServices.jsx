import React from "react";
import { useContext } from "react";
import first from "../../Assets/2.jpg";
import sec from "../../Assets/3.jpg";
import third from "../../Assets/4.jpg";
import fourth from "../../Assets/5.jpg";
import fifth from "../../Assets/6.jpg";
import { Data } from "../../Context/DataContext";
const OurServices = () => {
  const { homepage } = useContext(Data);
  return (
    <div
      className="ourServicesContainer"
      style={{ background: "#FFE5E6", minHeight: "50vh", padding: "5rem 0" }}
    >
      <div className="container">
        <h1>{homepage?.data?.services?.heading}</h1>
        <p className="mb-5">{homepage?.data?.services?.text}</p>
        <div className="row mb-5">
          {homepage?.data?.services?.list?.map((items, index) => {
            return (
              <div className="col-12 col-lg-3" key={index}>
                <div className="row">
                  <div className="col-2">
                    {/* <img src={first} alt="" /> */}
                  </div>
                  <div className="col-10">
                    <h5>{items}</h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
