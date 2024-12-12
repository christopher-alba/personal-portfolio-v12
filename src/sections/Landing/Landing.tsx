import { FC } from "react";
import "./landing.scss";
import Container from "../../components/Container/Container";

const Landing: FC = () => {
  return (
    <Container className="landing-container">
      <div className="landing-heading-div">
        <h1 className="landing-name">Christopher Alba</h1>
        <h1 className="landing-title">SOFTWARE</h1>
        <h1 className="landing-title-2">
          <span className="landing-text-no-wrap">ENGINEER +</span>
        </h1>
        <h1 className="landing-speciality">WEB DEVELOPER</h1>
      </div>
      <div className="landing-content-div">
        <img src="./images/grad-photo-web.png" alt="" />
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
          <h1>UX Focused</h1>
          <h1>Business Driven</h1>
          <h1>Results Oriented</h1>
        </div>
      </div>
    </Container>
  );
};

export default Landing;
