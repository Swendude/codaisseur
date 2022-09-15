import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { bootstrapLoginThunk } from "./store/user/thunks";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(bootstrapLoginThunk());
  }, [dispatch]);
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
