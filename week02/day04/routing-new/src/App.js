import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> React Routing </h1>
        <div>
          <Link to="/">Home</Link>
          {/* <a href="/">home</a> */}
          <br/>
          <Link to="/about">About</Link>
          {/* <a href="/about">about</a> */}
        </div>
      </header>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
