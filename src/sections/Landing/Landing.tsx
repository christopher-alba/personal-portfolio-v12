import { FC } from "react";
import "./landing.scss";
import Container from "../../components/Container/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons/faAngleDoubleDown";

const Landing: FC = () => {
  return (
    <Container className="landing-container">
      <div className="landing-heading-div">
        <h1 className="landing-name animated fade-in">
          Hi! My name is Christopher Alba.
        </h1>
        <h1 className="landing-title animated fade-slide-in delay-1">
          <span className="landing-text-no-wrap">CREATIVE +</span>
        </h1>
        <h1 className="landing-title-2 animated fade-slide-in delay-2">
          SOFTWARE
        </h1>
        <h1 className="landing-speciality animated fade-slide-in delay-3">
          ENGINEER
        </h1>
        <button
          className="landing-button"
          onClick={() => {
            document
              .getElementsByClassName("landing-content-div")[0]
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          <FontAwesomeIcon icon={faAngleDoubleDown} />
        </button>
      </div>
    </Container>
  );
};

export default Landing;
