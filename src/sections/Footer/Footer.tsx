import { FC } from "react";
import "./footer.scss";
import FooterDivider from "../../assets/svg/component/FooterDivider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faCloudDownload } from "@fortawesome/free-solid-svg-icons/faCloudDownload";
import { Link } from "react-router";
import Container from "../../components/Container/Container";

const Footer: FC = () => {
  return (
    <div className="contact-main-div">
      <FooterDivider text="Creative. Driven. Focused. Life long learner." />
      <Container className="footer-container">
        <div>
          <h1>THANKS FOR VISITING!</h1>
          <p>
            This website was made entirely from code, not using a website
            builder. Here are all of the project's pipeline and dev dependencies
            for those who are curious.
          </p>
          <div className="code-wrapper">
            <code>
              {`"dependencies": {
    "@fortawesome/fontawesome-svg-core": "^6.7.1",
    "@fortawesome/free-brands-svg-icons": "^6.7.1",
    "@fortawesome/free-solid-svg-icons": "^6.7.1",
    "@fortawesome/react-fontawesome": "^0.2.2",
    "@gsap/react": "^2.1.1",
    "aos": "^2.3.4",
    "gsap": "^3.12.5",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-intersection-observer": "^9.13.1",
    "react-router": "^7.0.2"
    }
    `}
            </code>
          </div>
          <div className="code-wrapper">
            <code>
              {`"devDependencies": {
    "@eslint/js": "^9.15.0",
    "@types/aos": "^3.0.7",
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.3.4",
    "eslint": "^9.15.0",
    "eslint-plugin-react-hooks": "^5.0.0",
    "eslint-plugin-react-refresh": "^0.4.14",
    "globals": "^15.12.0",
    "sass": "^1.82.0",
    "typescript": "~5.6.2",
    "typescript-eslint": "^8.15.0",
    "vite": "^6.0.1"
    }`}
            </code>
          </div>
        </div>
        <div className="footer-content">
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
          <br />
          <hr />
          <br />
          <p>This website was designed and built by Christopher Sy Alba.</p>
          <p>&copy; 2025</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
