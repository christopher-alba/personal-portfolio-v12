import { useEffect, useState } from "react";
import Landing from "./sections/Landing/Landing";
import Technologies from "./sections/Technologies/Technologies";
import Skills from "./sections/Skills/Skills";
import Navbar from "./sections/Navbar/Navbar";
import Career from "./sections/Career/Career";
import Aos from "aos";
import "aos/dist/aos.css";
import Education from "./sections/Education/Education";
import Footer from "./sections/Footer/Footer";
import { Canvas, useThree } from "@react-three/fiber";
import Room from "./components/Room/Room";
import About from "./sections/About/About";
import { Physics } from "@react-three/cannon";

const Camera = () => {
  const { camera } = useThree();
  const [scrollPos, setScrollPos] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  // Handle scroll event to update scroll position
  const onScroll = () => {
    const scrollValue = window.scrollY; // Get the current scroll position
    setScrollPos(scrollValue);
  };

  // Handle mouse movement to update mouse position
  const onMouseMove = (event: MouseEvent) => {
    const x = (event.clientX / window.innerWidth) * 2 - 1; // Normalize to [-1, 1]
    const y = -(event.clientY / window.innerHeight) * 2 + 1; // Normalize to [-1, 1]
    setMousePos({ x, y });
  };

  // Attach scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  // Set the initial camera position
  useEffect(() => {
    camera.position.z = 10; // Set the initial Z position
  }, [camera]);

  // Move the camera based on the scroll position
  useEffect(() => {
    // Adjust how fast the camera moves based on the scroll position
    const speed = 0.01;
    const movement = scrollPos * speed;

    // Move the camera along the Z-axis or along a path based on the scroll position
    camera.position.z = 20 - movement; // You can modify the starting position and direction of movement

    const rotationSpeed = -0.125; // Rotation sensitivity
    camera.rotation.x = mousePos.y * rotationSpeed; // Rotate along X-axis based on mouse Y
    camera.rotation.y = mousePos.x * rotationSpeed; // Rotate along Y-axis based on mouse X

    // Optionally, you can add lateral movement (X or Y) to create a more dynamic effect

    // Ensure the camera always looks at the center of the scene (optional)
  }, [scrollPos, camera, mousePos]);

  return null;
};

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === "light-theme"
      ? "light-theme"
      : "dark-theme"
  );
  useEffect(() => {
    Aos.init();
  });

  const getColorFromTheme = (theme: string) => {
    let color =
      theme === "light-theme"
        ? `hsl(220, ${Math.floor(Math.random() * 20 + 80)}%, ${Math.floor(
            Math.random() * 20 + 80
          )}%)` // Hue = 200 (blue), Saturation = 80-100%, Lightness = 80-100%
        : "black";
    console.log(color);
    return color;
  };
  // Map 100 Rooms
  const rooms = Array.from({ length: 500 }, (_, index) => {
    const xPosition = (Math.random() - 0.5) * 50; // Random X position between -25 and 25
    const yPosition = (Math.random() - 0.5) * 50; // Random Y position between 0 and 10
    const zPosition = (Math.random() - 0.5) * 150; // Random Z position between -25 and 25

    return (
      <Room
        key={index}
        position={[xPosition, yPosition, zPosition]} // Random position
        theme={getColorFromTheme(theme)}
      />
    );
  });

  return (
    <>
      <div className={theme}>
        <Navbar theme={theme} setTheme={setTheme} />
        <Canvas style={{ position: "fixed", zIndex: 0 }}>
          <Camera />
          <ambientLight
            intensity={(Math.PI / 2) * (theme === "light-theme" ? 10 : 1)}
          />
          <spotLight
            position={[10, 10, 1000]}
            angle={0.15}
            penumbra={1}
            decay={0}
            intensity={Math.PI}
          />
          <pointLight
            position={[-10, -10, -1000]}
            decay={0}
            intensity={Math.PI}
          />
          <Physics gravity={[0, 0, 0]}>{rooms}</Physics>
        </Canvas>
        <div style={{ zIndex: 1, position: "relative" }}>
          <Landing />
          <div className="hide-3d">
            <About />
            <Skills />
          </div>
          <Technologies themeName={theme} />
          <Career />
          <div className="hide-3d">
            <Education />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
