import React from "react";
import facebook from "../../../assets/img/facebook.svg";
import linkedin from "../../../assets/img/linkedin.svg";
import pinterest from "../../../assets/img/pinterest.svg";
import email from "../../../assets/img/email.svg";
import { Link } from "react-router-dom";

import classes from "./footer.module.css";

const socialIcons = [
  { name: "facebook", url: facebook },
  { name: "linkedin", url: linkedin },
  { name: "pinterest", url: pinterest },
  { name: "email", url: email },
];

const Social = () => {
  return (
    <div className="row media-links">
      {socialIcons.map((icon, idx) => (
        <div
          className={
            idx === 0
              ? "col-sm-1 col-md-1 offset-sm-4 offset-md-4"
              : "col-sm-1 col-md-1 "
          }
          key={icon.name}
        >
          <div className={classes[icon.name]}>
            <Link to="#">
              <img src={icon.url} alt={icon.name} className="img-responsive" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Social;
