import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import Container from "../../components/Container/Container";

const About: FC = () => {
  return (
    <Container>
      <div className="landing-content-div" style={{ paddingTop: "15rem" }}>
        <div className="landing-img-wrapper">
          <div className="landing-img-overlay">
            <FontAwesomeIcon icon={faChevronRight} className="landing-icon" />
          </div>
          <img src="./images/grad-photo-web.png" alt="" className="" />
        </div>
        <div className="landing-about">
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
        <div className="landing-attributes">
          <h1 data-aos="fade-left">UX Focused</h1>
          <h1 data-aos="fade-left">Business Driven</h1>
          <h1 data-aos="fade-left">Results Oriented</h1>
        </div>
      </div>
    </Container>
  );
};

export default About;
