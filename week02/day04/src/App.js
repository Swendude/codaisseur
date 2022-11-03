import "./App.css";
import { Route, Routes, Link, NavLink } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import StudentPage from "./pages/StudentPage";
function App() {
  return (
    <div className="App">
      <h1>Hello, React Routing!</h1>
      <div>
        <NavLink to="/">Home</NavLink>
        <br />
        <NavLink to="/about">About</NavLink>
        <br />
        <NavLink to="/students/bob">Bob's page</NavLink>
        <br />
        <NavLink to="/students/alice">Alice's page</NavLink>
      </div>
      <div className="greeter">Welcome to my beautiful site</div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/students/:name" element={<StudentPage />} />
      </Routes>
    </div>
  );
}

export default App;
