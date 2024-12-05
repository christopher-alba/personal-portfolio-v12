import { FC } from "react";
import "./about.scss";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Container from "../../components/Container/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";

const About: FC = () => {
  return (
    <div className="about-main-div">
      <Container className="about-container">
        <div className="about-content-div">
          <SectionTitle title="ABOUT" number={1} />
          <p>
            I'm a software engineer focused on creating efficient, scalable
            solutions for complex problems. With an emphasis on reducing
            technical debt and designing systems that support long-term business
            goals, I aim to deliver clean and maintainable code.
          </p>
          <p>
            Being an engineer isn’t just about coding and development. Its about
            understanding business requirements and solving business problems.
            In my career as a software engineer, I work in an environment that
            allows me to think and share my ideas on new features and designs
            that helps the business grow and thrive.
          </p>
          <a
            className="contact-me-link"
            href="https://www.linkedin.com/in/christopher-alba/"
            target="_blank"
          >
            <div>
              <p>Contact</p>
              <div>
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
            </div>
          </a>
        </div>
        <div className="about-image-wrapper">
          <img
            className="about-background-image"
            src="./images/about-image.svg"
          />
        </div>
      </Container>
    </div>
  );
};

export default About;
