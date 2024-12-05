import { FC } from "react";
import "./landing.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import Container from "../../components/Container/Container";
import { faCode } from "@fortawesome/free-solid-svg-icons/faCode";
import { faCloudDownload } from "@fortawesome/free-solid-svg-icons/faCloudDownload";
import { Link } from "react-router";

const Landing: FC = () => {
  return (
    <div className="landing-main-div">
      <Container>
        <p>
          <strong>Creative. Driven. Focused.</strong>
        </p>
      </Container>
      <Container className="landing-heading-div">
        <img src="./images/heading.png" />
      </Container>
      <Container className="landing-container">
        <div className="landing-div-inner">
          <div style={{ display: "flex", alignItems: "center" }}>
            <FontAwesomeIcon
              icon={faCircle}
              style={{ color: "var(--blue-main)", marginRight: "20px" }}
            />
            <p>Learning, growing, and mastering my craft.</p>
          </div>
          <h1>I’m a software engineer specializing in web development.</h1>
          <p>
            I currently work at{" "}
            <strong>Turners Automotive Group Digital</strong> as a full stack
            software engineer. I started off as a part-time tester during
            university, and quickly grew into a development/engineering role
            once I finished my degree in 2022.
          </p>
          <Link
            to="./cv.pdf"
            target="_blank"
            className="landing-download-cv-button"
          >
            <p>Download CV</p>
            <div>
              <FontAwesomeIcon icon={faCloudDownload} />
            </div>
          </Link>
        </div>
        <div className="landing-div-inner">
          <FontAwesomeIcon icon={faCode} />
        </div>
      </Container>
    </div>
  );
};

export default Landing;
