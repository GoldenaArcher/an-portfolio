import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/img/logo.svg";

import classes from "./navigation.module.css";

const nav = [
  { href: "/", name: "Home" },
  { href: "/portfolio", name: "Portfolio" },
  { href: "/contact", name: "Contact" },
];

// function navigation() {
//   // adding the inline-css style
//   //   update the height of primary-nav same as logo
//   $(".primary-nav").css("height", $(".logo").height());
//   //   update the margin-top of nav>li
//   //      to (primary-nav's height - nav>li's hight) / 2
//   $(".primary-nav li").css(
//     "margin-top",
//     ($(".primary-nav").height() - $(".primary-nav li").height()) / 2 + "px"
//   );

//   // once resize, the nav func will be triggered after 500 ms
//   $(window).resize(function () {
//     setTimeout(navigation, 500);
//   });
// }

const Navigation = () => {
  const [height, setHeight] = useState("");
  const [liMarginTop, setLiMarginTop] = useState("");

  const navRef = useRef();
  const primaryNavRef = useRef();

  useEffect(() => {
    window.addEventListener("resize", () => {
      setTimeout(() => {
        setHeight(navRef.current.clientHeight);
        setLiMarginTop(
          (primaryNavRef.current.clientHeight -
            primaryNavRef.current.firstChild.firstChild.clientHeight) /
            2
        );
      }, 500);
    });
  }, []);

  return (
    <div className={classes.navigation}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-center">
            <div className={classes.logo} ref={navRef}>
              <Link to={"/"}>
                <img src={logo} alt="webiste logo" />
              </Link>
            </div>
          </div>
          <div className="col-xs-11 col-sm-11 col-md-11 col-lg-11 text-end">
            <div
              className={classes.primaryNav}
              style={{ height: `${height}px` }}
              ref={primaryNavRef}
            >
              <ul>
                {nav.map((navItem) => (
                  <li
                    key={navItem.name}
                    style={{ marginTop: `${liMarginTop}px` }}
                  >
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
