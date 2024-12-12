import { FC } from "react";
import "./landing.scss";
import Container from "../../components/Container/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";

const Landing: FC = () => {
  return (
    <Container className="landing-container">
      <div className="landing-heading-div">
        <h1 className="landing-name animated fade-slide-in">
          Christopher Alba
        </h1>
        <h1 className="landing-title animated fade-slide-in delay-1">
          SOFTWARE
        </h1>
        <h1 className="landing-title-2 animated fade-slide-in delay-2">
          <span className="landing-text-no-wrap">ENGINEER +</span>
        </h1>
        <h1 className="landing-speciality animated fade-slide-in delay-3">
          WEB DEVELOPER
        </h1>
      </div>
      <div className="landing-content-div">
        <div className="landing-img-wrapper">
          <div className="landing-img-overlay animated fade-in">
            <FontAwesomeIcon icon={faChevronRight} className="landing-icon" />
          </div>
          <img
            src="./images/grad-photo-web.png"
            alt=""
            className="animated zoom-in delay-1"
          />
        </div>
        <div className="landing-about animated fade-in delay-2">
          <div>
            <h1 className="heading">ABOUT</h1>
            <p>
              Focused on{" "}
              <strong>
                creating efficient, scalable solutions for complex problems.
              </strong>{" "}
              With an emphasis on reducing technical debt and designing systems
              that support long-term business goals, I aim to deliver
              <strong> clean and maintainable code.</strong>
            </p>
          </div>
          <div>
            <h4>
              Works at <strong>TAG Digital</strong>
            </h4>
            <h4>Based in New Zealand</h4>
          </div>
        </div>
        <div className="landing-attributes animated fade-in delay-3">
          <h1 data-aos="fade-left">UX Focused</h1>
          <h1 data-aos="fade-left">Business Driven</h1>
          <h1 data-aos="fade-left">Results Oriented</h1>
        </div>
      </div>
    </Container>
  );
};

export default Landing;
