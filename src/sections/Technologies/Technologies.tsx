import { FC } from "react";
import PieChart from "./components/DynamicPieChart/DynamicPieChart";
import { chartData } from "./data";
import Container from "../../components/Container/Container";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import "./technologies.css";

const Technologies: FC = () => {
  return (
    <div id="technology-main-div">
      <Container>
        <SectionTitle title="TECHNOLOGIES" number={2} />
        <div id="technology-upper-div">
          <div id="technology-content-div">
            <p>
              I’m a full stack software engineer, so{" "}
              <strong>
                my skills range from frontend to backend technologies.
              </strong>{" "}
              I have more professional experience developing enterprise level
              backend solutions, but spend most of my own time outside of work
              developing in the frontend.
            </p>
            <h1>Comfort Levels</h1>
            <p>
              The graph indicates the different technologies I've had experience
              in and my level of comfort in using them. This is by no way a
              representation of how skilled I am at these technologies compared
              to myself or other people.
            </p>
          </div>
          <div id="technology-graphic-div">
            <PieChart data={chartData} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Technologies;
