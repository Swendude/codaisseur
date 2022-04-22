import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import GreetingPage from "./pages/GreetingPage";
// I would like to go to /about and see a different page

// IMPORTANT!!!! INSIDE 'ELEMENT' YOU NEED TO PUT A WHOLE COMPONENT (NOT JUST THE NAME)
function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/greeting/:cow/:sheep" element={<GreetingPage />} />
      </Routes>
    </div>
  );
}

export default App;
