import "./header.styles.scss";

import logo from "../../assets/images/PAS Logo/PAS_Letterhead-09.png";
import { ReactNode } from "react";

const Header = (): ReactNode => {
  return (
    <header className="header padding-1">
      <figure className="header__logo-container">
        <img
          alt="Professional Appliance Solutions logo"
          className="header__logo"
          src={logo}
        />
      </figure>
    </header>
  );
};

export default Header;
