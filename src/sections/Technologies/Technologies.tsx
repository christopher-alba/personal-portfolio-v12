import { FC } from "react";
import PieChart from "./components/DynamicPieChart/DynamicPieChart";
import { barGraphData, chartData } from "./data";
import Container from "../../components/Container/Container";
import "./technologies.scss";

const Technologies: FC<{ themeName: string }> = ({ themeName }) => {
  return (
    <div className="technology-main-div">
      <Container>
        <div className="technology-heading">
          <h1 className="technology-title heading">TECHNOLOGIES</h1>
          <h1 className="technology-subtitle heading">
            <span style={{ whiteSpace: "nowrap" }}>COMFORT +</span> USAGE
          </h1>
        </div>
        <p className="technology-description">
          My skills range from frontend to backend technologies. I have more
          professional experience developing enterprise level backend solutions,
          but spend most of my own time outside of work developing in the
          frontend.
        </p>
        <div className="flex-wrapper">
          <div className="technology-chart-wrapper">
            <p style={{ position: "absolute" }}>Figure 1.</p>
            <PieChart data={chartData} themeName={themeName} />
          </div>
          <div className="technology-description-wrapper">
            <h1>Comfort Levels Graph</h1>
            <p>
              Figure 1 shows how comfortable I am with certain technologies. It
              DOES NOT represent my skill levels or how I compare to other
              engineers.
            </p>
            <br />
            <hr />
            <br />
            <p>Figure 2.</p>
            <h1>My Most Used Technologies.</h1>
            {barGraphData
              .sort((a, b) => b.value - a.value)
              .map((tech) => {
                return (
                  <div style={{ display: "flex", width: "100%", alignItems:"center" }}>
                    <p style={{fontSize: "0.7rem", width: "6rem", textAlign: "right", whiteSpace: "nowrap", marginRight: "10px"}}>{tech.label}</p>
                    <div style={{ height: "10px", width: "100%" }}>
                      <div
                        style={{
                          width: (tech.value / 10) * 100 + "%",
                          height: "10px",
                          background: "var(--blue-main)",
                        }}
                      ></div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Technologies;
