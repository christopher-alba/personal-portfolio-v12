import { useEffect, useState } from "react";
import Landing from "./sections/Landing/Landing";
import Technologies from "./sections/Technologies/Technologies";
import Skills from "./sections/Skills/Skills";
import Navbar from "./sections/Navbar/Navbar";
import Career from "./sections/Career/Career";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === "light-theme"
      ? "light-theme"
      : "dark-theme"
  );
  useEffect(() => {
    Aos.init();
  });
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
