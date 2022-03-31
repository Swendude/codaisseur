import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/Loginpage";
import { useEffect } from "react";
import { bootstrapLoginThunk } from "./store/auth/actions";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(bootstrapLoginThunk);
  }, [dispatch]);

  return (
    <div className="App">
      <div>
        <NavLink to="/">Home</NavLink>
        <br />
        <NavLink to="/login">Login</NavLink>
      </div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
