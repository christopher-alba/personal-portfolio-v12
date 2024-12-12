import { useState } from "react";
import Landing from "./sections/Landing/Landing";
import Technologies from "./sections/Technologies/Technologies";
import Skills from "./sections/Skills/Skills";
import Navbar from "./sections/Navbar/Navbar";
import Career from "./sections/Career/Career";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === "light-theme"
      ? "light-theme"
      : "dark-theme"
  );
  return (
    <div className={theme}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Landing />
      <Skills />
      <Technologies themeName={theme} />
      <Career />
    </div>
  );
}

export default App;
