import React from "react";
import Carousel from "../Components/Carousel/Carousel";
import Dashboard from "../Components/Dashboard/Dashboard";
import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/NavBar/NavBar";
import OurServices from "../Components/OurServices/OurServices";
import Section1 from "../Components/Section1/Section1";
import Stip from "../Components/Strip/Stip";
import Why from "../Components/Why/Why";

const Home = () => {
  return (
    <div>
      <Dashboard />
      <Section1 />
      <OurServices />
      <Why />
      <Carousel />
    </div>
  );
};

export default Home;
