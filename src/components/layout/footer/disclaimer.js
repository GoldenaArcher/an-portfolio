import React from "react";
import { Link } from "react-router-dom";
import classes from "./footer.module.css";

const Disclaimer = () => {
  return (
    <div className="row">
      <div className="col-sm-4 col-md-4 text-center">
        <div className={classes.companyInformation}>
          <h3>XXXX</h3>
          <h4>Copyright © 2021</h4>
          <h4>NY</h4>
        </div>
      </div>

      <div className="col-sm-2 col-md-2 text-center">
        <div className={classes.homeFooter}>
          <h4>
            <Link to={"#"}>Home</Link>
          </h4>
        </div>
      </div>

      <div className="col-sm-2 col-md-2 text-center">
        <div className={classes.portfolioFooter}>
          <h4>
            <Link to={"#"}>Portfolio</Link>
          </h4>
          <ul>
            <li>
              <Link to={"#"}>Project1</Link>
            </li>
            <li>
              <Link to={"#"}>Project2</Link>
            </li>
            <li>
              <Link to={"#"}>Project3</Link>
            </li>
            <li>
              <Link to={"#"}>See All</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="col-sm-2 col-md-2 text-center">
        <div className={classes.resumeFooter}>
          <h4>
            <Link to={"#"}>Resume</Link>
          </h4>
          <ul>
            <li>
              <Link to={"#"}>Download</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="col-sm-2 col-md-2 text-center">
        <div className={classes.contactFooter}>
          <h4>
            <Link to={"#"}>Contact</Link>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
