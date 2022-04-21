import React from "react";
import { Link } from "react-router-dom";

const News = () => {
  return (
    <div style={{ background: "#FFE5E6", padding: "5rem 0" }}>
      <div className="container">
        <h1 className="text-center text-danger">News & Updates</h1>
        <h5 className="text-danger">
          Difference between website design & development.
        </h5>
        <p>
          Being in a digital technology in which humans realized the web
          applications to live on; there are wishes to apprehend web sites and
          packages. The web applications are of different kinds, Static Websites
          now do not offer user pride while Dynamic Website fair, in this modern
          time generation innovation, affords us with an advanced approach of
          growing an internet site to deal with emerging hardware and provide an
          end-user enjoy. This internet site is called a Responsive website. The
          responsive internet site is a method that indicates that design and
          improvement should reply to a consumer's behavior and environment
          primarily based on the display screen length, platform, and
          orientation. <br />
          <br />
          The practice consists of a combination of bendy grids and layouts,
          snapshots, and clever use of CSS media queries. As the user switches
          from their laptop, iPad to the mobile, the website must routinely
          switch to deal with resolution, picture size, and scripting
          competencies. This paper offers the processes concerned in designing a
          responsive internet site in current perspectives, it also demonstrates
          trying out to analyze the overall performance of various layout
          strategies or strategies as well as the analysis of the performance
          result on every design technique the usage of a google chrome
          developer device. <br />
          <br />
        </p>
        <h5 className="text-danger">Please share your thoughts with us</h5>
        <Link className="contactUsLink" to="/contact">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default News;
