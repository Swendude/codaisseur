import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Loginpage from "./pages/Loginpage";

function App() {
  return (
    <div className="App">
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
      </div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Loginpage />} />
      </Routes>
    </div>
  );
}

export default App;
