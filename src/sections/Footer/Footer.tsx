import { FC } from "react";
import "./footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faCloudDownload } from "@fortawesome/free-solid-svg-icons/faCloudDownload";
import { Link } from "react-router";
import Container from "../../components/Container/Container";
import Name from "../../assets/svg/component/Name";

const Footer: FC = () => {
  return (
    <div className="contact-main-div">
      <Container className="footer-container">
        <div className="footer-descriptions">
          <h1>NEED A CUSTOM WEBSITE?</h1>
          <p>
            This website was made using React, not using a website builder. If
            you need any custom websites done feel free to contact me through
            Linkedin.
          </p>
          <div className="link-wrapper">
            <Link
              to="https://www.linkedin.com/in/christopher-alba/"
              target="_blank"
              className="contact-link"
            >
              Contact <FontAwesomeIcon icon={faLinkedin} />
            </Link>
            <Link to="./cv.pdf" target="_blank" className="download-link">
              View CV <FontAwesomeIcon icon={faCloudDownload} />
            </Link>
          </div>
        </div>
        <div className="footer-content">
          <Name />
          <p>This website was designed and built by Christopher Sy Alba.</p>
          <p>&copy; 2025</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
