import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Loginpage from "./pages/Loginpage";
import Supersecretpage from "./pages/Supersecretpage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { bootstrapLoginThunk } from "./store/auth/actions";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bootstrapLoginThunk);
  }, []);

  return (
    <div className="App">
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/secret">Secret</NavLink>
      </div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/secret" element={<Supersecretpage />} />
      </Routes>
    </div>
  );
}

export default App;
