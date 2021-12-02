import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import GreetingPage from "./GreetingPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> React Routing </h1>
        <div>
          <NavLink to="/">Home</NavLink>
          <br />
          <NavLink to="/about">About</NavLink>
          <br />
          <NavLink to="/greeting/swen">Hello Swen</NavLink>
          <br />
          <NavLink to="/greeting/chris">Hello Chris</NavLink>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/greeting" element={<GreetingPage />}>
          <Route path=":name" element={<GreetingPage />}/>  
        </Route>
{/* 
        <Route path="/greeting" element={<GreetingPage />}/>
        <Route path="/greeting/:name" element={<GreetingPage />}/> */}
        
      </Routes>
    </div>
  );
}

export default App;
