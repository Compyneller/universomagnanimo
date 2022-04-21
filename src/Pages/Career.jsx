import React from "react";

const Career = () => {
  return (
    <div style={{ background: "#FFE5E6", padding: "5rem 0" }}>
      <div className="container">
        <h1 className="text-danger">Career</h1>
        <h5 className="text-danger">
          Wanna try something exciting? Join one of the fastest-growing
          technology startups disrupting the IT industry.
        </h5>
        <p>
          We aim to build teams with diverse backgrounds, skills and
          perspectives to enhance problem-solving and foster innovation. By
          striving to fulfill our core values, we enact our commitment to
          creating an environment of inclusion - a place where every talent can
          thrive.{" "}
        </p>
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
