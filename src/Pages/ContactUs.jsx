import React from "react";
import { useContext } from "react";
import { Data } from "../Context/DataContext";

const ContactUs = () => {
  const { contact } = useContext(Data);
  return (
    <div style={{ background: "#FFEAEB", padding: "5rem 0" }}>
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex flex-column justify-content-center emailAddress">
            <h3>{contact?.data?.sub_heading}</h3>
            <h1>{contact?.data?.heading}</h1>
            <div className="row">
              <div className="col-12">
                <div className="row">
                  <div className="col-2 d-flex justify-content-end">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div className="col-10">
                    <a
                      target="_blank"
                      href="mailto:hello@universomagnanimo.com"
                    >
                      <h5>
                        {" "}
                        <span>Email - </span> hello@universomagnanimo.com
                      </h5>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className="row">
              <div className="col-12">
                <div className="row">
                  <div className="col-2 d-flex justify-content-end ">
                    <i className="fa-solid fa-house"></i>
                  </div>
                  <div className="col-10">
                    <h5>
                      <span> Address -</span> {contact?.data?.address}
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
