import { useState } from "react";
import Landing from "./sections/Landing/Landing";
import Technologies from "./sections/Technologies/Technologies";

function App() {
  const [theme, setTheme] = useState("light-theme");
  return (
    <div className={theme}>
      <Landing />
      <Technologies />
    </div>
  );
}

export default App;
