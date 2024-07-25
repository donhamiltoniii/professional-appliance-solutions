import "./header.styles.scss";

import logo from "../../assets/images/PAS Logo/PAS_Letterhead-09.png";
import { ReactNode } from "react";

type HeaderProps = {
  openModal: () => void;
};

const Header = ({ openModal }: HeaderProps): ReactNode => {
  return (
    <header className="header padding-1">
      <figure className="header__logo-container padding-1 padding-bottom-half padding-top-half">
        <img
          alt="Professional Appliance Solutions logo"
          className="header__logo"
          src={logo}
        />
      </figure>
      {/* <button onClick={openModal}>Order Now</button> */}
    </header>
  );
};

export default Header;
