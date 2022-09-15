import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <div className="App">
      <h3>Hello, Redux Auth!</h3>
      <div>
        <NavLink to="/">Home</NavLink>
        <p>---</p>
        <NavLink to="/login">Login</NavLink>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
