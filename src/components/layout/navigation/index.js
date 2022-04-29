import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/img/logo.svg";

import classes from "./navigation.module.css";

const nav = [
  { href: "/", name: "Home" },
  { href: "/portfolio", name: "Portfolio" },
  { href: "/contact", name: "Contact" },
];

const Navigation = () => {
  return (
    <div className={classes.navigation}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-center">
            <div className={classes.logo}>
              <Link to={"/"}>
                <img src={logo} alt="webiste logo" />
              </Link>
            </div>
          </div>
          <div className="col-xs-11 col-sm-11 col-md-11 col-lg-11 text-end">
            <div className={classes.primaryNav}>
              <ul>
                {nav.map((navItem) => (
                  <li key={navItem.name}>
                    <Link to={navItem.href}>{navItem.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
