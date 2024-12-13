import { FC, useEffect, useState } from "react";
import "./navbar.scss";
import Container from "../../components/Container/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const Navbar: FC<{ setTheme: (theme: string) => void; theme: string }> = ({
  setTheme,
  theme,
}) => {
  const [displayDrawer, setDisplayDrawer] = useState(false);
  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
      localStorage.setItem("theme", "dark-theme");
    } else {
      setTheme("light-theme");
      localStorage.setItem("theme", "light-theme");
    }
  };

  const handleNavigation = (destination: string) => {
    var target = document.getElementsByClassName(destination)[0];
    target.scrollIntoView({ behavior: "smooth" });
  };

  const toggleDrawer = () => {
    setDisplayDrawer(!displayDrawer);
  };

  // Effect to close the drawer when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (displayDrawer) {
        setDisplayDrawer(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [displayDrawer]);

  return (
    <>
      <div className="nav-main-div">
        <Container style={{ height: "100%" }}>
          <div className="nav-inner-div">
            <button className="nav-bars" onClick={toggleDrawer}>
              <FontAwesomeIcon icon={displayDrawer ? faClose : faBars} />
            </button>
            <div>
              <button className="nav-shortcut" onClick={() => handleNavigation("landing-container")}>About</button>
              <button className="nav-shortcut" onClick={() => handleNavigation("skills-container")}>Skills</button>
              <button className="nav-shortcut" onClick={() => handleNavigation("technology-main-div")}>Tech</button>
              <button className="nav-shortcut" onClick={() => handleNavigation("career-container")}>Career</button>
              <button className="nav-shortcut" onClick={() => handleNavigation("education-container")}>Education</button>
              <button className="nav-shortcut" onClick={() => handleNavigation("contact-main-div")}>Contact</button>
            </div>
            <button className="nav-theme" onClick={toggleTheme}>
              {theme === "light-theme" ? "Dark Mode" : "Light Mode"}
            </button>
          </div>
        </Container>
      </div>
      {displayDrawer && (
        <div className="nav-drawer" onClick={toggleDrawer}>
          <Container className="nav-drawer-container">
            <button className="nav-shortcut" onClick={() => handleNavigation("landing-container")}>About</button>
            <button className="nav-shortcut" onClick={() => handleNavigation("skills-container")}>Skills</button>
            <button className="nav-shortcut" onClick={() => handleNavigation("technology-main-div")}>Tech</button>
            <button className="nav-shortcut" onClick={() => handleNavigation("career-container")}>Career</button>
            <button className="nav-shortcut" onClick={() => handleNavigation("education-container")}>Education</button>
            <button className="nav-shortcut" onClick={() => handleNavigation("contact-main-div")}>Contact</button>
          </Container>
        </div>
      )}
    </>
  );
};

export default Navbar;
