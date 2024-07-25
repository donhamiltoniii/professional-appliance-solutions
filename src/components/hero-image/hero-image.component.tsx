import "./hero-image.styles.scss";

import logo from "../../assets/images/PAS Logo/PAS_Blue_Web.png";

const HeroImage = () => {
  return (
    <div className="hero-image">
      <figure className="hero-image__image-container">
        <img alt="PAS logo" src={logo} />
      </figure>
    </div>
  );
};

export default HeroImage;
