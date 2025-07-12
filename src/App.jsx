import React, { useEffect, useState } from "react";
import LandingPage from "./TailwindBlocks/pages/LandingPage";
import LoginPage from "./TailwindBlocks/pages/LoginPage";

function App() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div>
      {/* <LoginPage /> */}
      <LandingPage change={handleThemeChange} theme={theme} />
    </div>
  );
}

export default App;
