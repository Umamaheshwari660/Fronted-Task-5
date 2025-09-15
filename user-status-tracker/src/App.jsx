import UserStatus from "./components/UserStatus";
import HookDemo from "./components/HookDemo";
import "./App.css";

export default function App() {
  return (
    <div className="app-container">
      <h1>User Status Tracker</h1>
      <p>Class Components, Lifecycle, HOCs & Hooks Demo</p>

      {/* Class Component + HOC */}
      <UserStatus userId={42} />

      {/* Hooks demo */}
      <HookDemo />

      <footer>
        Open your browser console to see lifecycle and hook logs.
      </footer>
    </div>
  );
}


