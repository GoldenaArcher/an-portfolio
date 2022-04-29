import React from "react";
import Social from "./social";
import Contact from "./contact";
import Disclaimer from "./disclaimer";

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid">
        <Social />
        <Contact />
        <Disclaimer />
      </div>
    </footer>
  );
};

export default Footer;
