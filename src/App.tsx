import { useState } from "react";
import Landing from "./sections/Landing/Landing";
import Technologies from "./sections/Technologies/Technologies";
import Skills from "./sections/Skills/Skills";
import Navbar from "./sections/Navbar/Navbar";

function App() {
  const [theme, setTheme] = useState("light-theme");
  return (
    <div className={theme}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Landing />
      <Skills />
      <Technologies themeName={theme} />
    </div>
  );
}

export default App;
