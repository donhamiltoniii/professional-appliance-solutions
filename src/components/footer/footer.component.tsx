import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

import "./footer.styles.scss";

const Footer = () => {
  const currentYear: string = new Date().getFullYear().toString();

  return (
    <footer className="main-footer">
      <div className="main-footer__contact">
        <h4>Contact Us</h4>
        <div>
          <a href="tel:6143487995">Call</a>
          <a href="mailto:Office@professionalappliancesolutions.com">Email</a>
        </div>
      </div>
      <div className="main-footer__social-media">
        <a
          aria-label="facebook"
          href="https://www.facebook.com/professionalappliancesolutions/"
        >
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a
          aria-label="instagram"
          href="https://www.instagram.com/proappliancesolutions/"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
      <div className="main-footer__hours">
        <span>M-F: 8a-4p</span>
        <span>S&S: Closed</span>
      </div>
      <p className="main-footer__copy">
        &copy; {currentYear} Professional Appliance Solutions
      </p>
    </footer>
  );
};

export default Footer;
