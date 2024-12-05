import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import PieChart from "./components/DynamicPieChart/DynamicPieChart";

const chartData = [
  { label: "Angular", value: 5 },
  { label: "ASP.NET C#", value: 5 },
  { label: "React", value: 5 },
  { label: "Typescript", value: 5 },
  { label: "HTML", value: 4 },
  { label: "Javascript", value: 4 },
  { label: "CSS", value: 4 },
  { label: "Node.js", value: 4 },
  { label: "C++", value: 2 },
  { label: "C", value: 3 },
  { label: "VHDL", value: 2 },
  { label: "Postgresql", value: 4 },
  { label: "MongoDB", value: 4 },
  { label: "Java", value: 4 },
  { label: "AWS", value: 4 },
  { label: "Unity", value: 3 },
  { label: "Blender", value: 3 },
  { label: "Figma", value: 3 },
  { label: "Git", value: 3 },
  { label: "Python", value: 1 },
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <PieChart data={chartData} />
    </>
  );
}

export default App;
