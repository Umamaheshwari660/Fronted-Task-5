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

      {/* Theme Toggle Button */}
      <button className="theme-btn" onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Theme
      </button>

      {/* Class Component + HOC */}
      <UserStatus theme={theme} />

      {/* Hooks demo */}
      <HookDemo />

      <footer>
        Open your browser console to see lifecycle and hook logs.
      </footer>
    </div>
  );
}



