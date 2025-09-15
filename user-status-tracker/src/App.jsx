import React, { useState } from "react";
import UserStatus from "./components/UserStatus";
import HookDemo from "./components/HookDemo";
import "./App.css";

export default function App() {
  const [theme, setTheme] = useState("light");

  // Toggle light / dark theme
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className={`app-container ${theme}`}>
      <h1>User Status Tracker</h1>
      <p>Class Components, Lifecycle, HOCs & Hooks Demo</p>

   
      <button className="theme-btn" onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Theme
      </button>

    
      <UserStatus theme={theme} />
      <HookDemo />

      <footer>
        Open your browser console to see lifecycle and hook logs.
      </footer>
    </div>
  );
}



