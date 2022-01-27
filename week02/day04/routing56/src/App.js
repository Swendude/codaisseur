import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>
        <Link to="/">home</Link>
        <br />
        <Link to="/about">about</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
