import { FC } from "react";
import "./career.scss";
import Container from "../../components/Container/Container";
import { timelineItems } from "./data";

const Career: FC = () => {
  return (
    <Container className="career-container flex-wrapper">
      <div>
        <h1 className="heading career-heading">CAREER HISTORY</h1>
      </div>
      <div className="timeline">
        {timelineItems.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div
              className="timeline-icon"
              style={{ background: index === 0 ? "var(--blue-main)" : "" }}
            ></div>
            <div className="timeline-content">
              <h3 className="timeline-title">{item.position}</h3>
              <h5>
                {item.name} : {item.dateString}
              </h5>
              <p className="timeline-description">{item.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Career;
