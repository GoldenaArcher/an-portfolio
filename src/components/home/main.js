import React from "react";
import classes from "./home.module.css";

const Main = () => {
  return (
    <div className={classes.main}>
      <div className="container-fluid">
        <div className="row">
          <div className="entry-banner text-center">
            <h1 className={classes.hello}>Hello, I'm</h1>
            <h1 className={classes.name}>XXXX</h1>
            <h1 className={classes.personDescription}>
              UI Developer. UX Desinger. Problem Solver.
            </h1>
          </div>
        </div>

        <div className={[classes.bannerButtons, "row text-center"].join(" ")}>
          <div className="col-sm-1 col-md-1 offset-sm-5 offset-md-5">
            <a className="btn btn-default btnBorder" href="#about">
              Info
            </a>
          </div>

          <div className="col-sm-1 col-md-1">
            <a className="btn btn-default btnBorder" href="#projects">
              Portfolio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
