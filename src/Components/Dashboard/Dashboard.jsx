import React from "react";
import "./Dashboard.scss";
import banner from "../../Assets/banner.jpg";

const Dashboard = () => {
  return (
    <div className="DashboardContainer">
      <img src={banner} alt="banner" />
      <div className="my-auto container">
        <h1>We are waiting for your ideas to make you a digital expert </h1>
        <p>
          We craft digital products that solve business needs and drive market
          differentiation. Our team provides end-to-end solutions, full-stack
          development, strategy, design, and valuable marketing services.
        </p>
      </div>
      <div className="container">
        <div className="row ">
          <div className="col-12 col-lg-4"></div>
          <div className="col-12 col-lg-8 bg-light py-5 px-4 emailContainer">
            <p>We’re a leader in tech-enabled digital marketing solutions.</p>
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
