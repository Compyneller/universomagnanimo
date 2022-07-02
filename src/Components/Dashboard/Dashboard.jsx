import React from "react";
import "./Dashboard.scss";
import banner from "../../Assets/banner.jpg";
import { useContext } from "react";
import { Data } from "../../Context/DataContext";

const Dashboard = () => {
  const { homepage } = useContext(Data);
  return (
    <div className="DashboardContainer">
      <img src={banner} alt="banner" />
      <div className="my-auto w-75 text-center ">
        <h1>{homepage?.data?.main_text}</h1>
        <br />
        <p style={{ fontSize: "22px" }}>{homepage?.data?.sub_text}</p>
      </div>
      <div className="container">
        <div className="row ">
          <div className="col-12 col-lg-4"></div>
          <div className="col-12 col-lg-8 bg-light py-5 px-4 emailContainer">
            <p>{homepage?.data?.about?.sub_text}</p>
            <a href="mailto:hello@universomagnanimo.com">
              <h2>hello@universomagnanimo.com</h2>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
