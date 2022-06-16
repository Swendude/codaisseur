import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { bootstrapLoginThunk } from "./store/auth/actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bootstrapLoginThunk);
  }, [dispatch]);

  return (
    <div className="App">
      <div>
        <NavLink to="/">Home</NavLink>
      </div>
      <div>
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
