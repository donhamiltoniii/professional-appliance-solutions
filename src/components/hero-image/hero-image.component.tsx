import React from "react";

import "./hero-image.styles.scss";

import logo from "../../assets/images/PAS Logo/PAS_Blue_Web.png";

const HeroImage = () => {
  return (
    <div className="hero-image">
      <figure className="hero-image__image-container margin-top-4-half">
        <img alt="PAS logo" src={logo} />
      </figure>
      <p>
        Professional appliance delivery and installation, insured and factory
        trained.
      </p>
    </div>
  );
};

export default HeroImage;
