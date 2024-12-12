import { useState } from "react";
import Landing from "./sections/Landing/Landing";
import Technologies from "./sections/Technologies/Technologies";
import Skills from "./sections/Skills/Skills";

function App() {
  const [theme, setTheme] = useState("light-theme");
  return (
    <div className={theme}>
      <Landing />
      <Skills />
      <Technologies themeName={theme} />
    </div>
  );
}

export default App;
