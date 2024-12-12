import { FC } from "react";
import "./skills.scss";
import Container from "../../components/Container/Container";
import { skills } from "./data";

const Skills: FC = () => {
  return (
    <Container className="skills-container">
      <div className="flex-wrapper">
        <div className="skills-heading-wrapper">
          <h1 className="skills-heading heading">
            <span>SKILLS +</span> SERVICES
          </h1>
        </div>
        <div>
          {skills.map((skill) => (
            <div className="skills-skill">
              <h1>{skill.title}</h1>
              <div className="skills-points">
                {skill.points.map((point) => (
                  <div className="skills-point">{point}</div>
                ))}
              </div>
              <p>{skill.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Skills;
