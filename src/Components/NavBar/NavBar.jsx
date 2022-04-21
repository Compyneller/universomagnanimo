import React, { useState } from "react";
import logo2 from "../../Assets/logo.png";
import style from "./NavBar.module.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={style.navBarContainer}>
      <div className={style.Container}>
        <Link onClick={() => setToggle(false)} to="/">
          <img src={logo2} alt="" />
        </Link>
        <div
          className={`${style.Links} ${
            toggle ? style.LinksActive : style.Link
          }`}
        >
          <Link to="/" onClick={() => setToggle(false)}>
            Home
          </Link>
          <Link to="/aboutus" onClick={() => setToggle(false)}>
            About Us
          </Link>
          <Link onClick={() => setToggle(false)} to="/services">
            Services
          </Link>
          <Link onClick={() => setToggle(false)} to="/contact">
            Contact Us
          </Link>
          <Link to="/news" onClick={() => setToggle(false)}>
            News & Updates
          </Link>
          <Link to="/career" onClick={() => setToggle(false)}>
            Career
          </Link>

          {/* <a
            onClick={() => setToggle(false)}
            target="_blank"
            href="https://twitter.com/univmagnanimo"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>

          <a
            onClick={() => setToggle(false)}
            target="_blank"
            href=" https://universomagnanimounipessoal.medium.com/"
          >
            <i className="fa-brands fa-medium"></i>
          </a>
          <a
            onClick={() => setToggle(false)}
            href=" https://www.linkedin.com/company/universo-magnanimo"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a> */}
        </div>
        {toggle ? (
          <i
            className="fa-solid fa-xmark"
            onClick={() => setToggle(!toggle)}
            id={style.hamburger}
          ></i>
        ) : (
          <i
            className="fa-solid fa-bars"
            onClick={() => setToggle(!toggle)}
            id={style.hamburger}
          ></i>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
