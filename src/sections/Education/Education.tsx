import "./education.scss";
import { education } from "./data";
import { FC } from "react";

import Container from "../../components/Container/Container";

const Education: FC = () => {
  return (
    <Container className="education-container">
      <div className="flex-wrapper">
        <div className="education-heading-wrapper">
          <h1 className="education-heading heading">
            <span>EDUCATION +</span> FOUNDATIONS
          </h1>
        </div>
        <div>
          {education.map((x) => (
            <div
              className="education-skill"
              data-aos="fade-left"
              key={x.position}
            >
              <h1>{x.position}</h1>
              <h5>
                {x.name}: {x.dateString}
              </h5>
              <p>{x.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Education;
