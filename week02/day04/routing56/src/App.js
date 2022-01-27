import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import PokemonPage from "./Pages/PokemonPage";
import { Routes, Route, NavLink, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>
        <NavLink className={"navItem"} to="/">
          home
        </NavLink>
        <br />
        <NavLink className={"navItem"} to="/about">
          about
        </NavLink>
        <br />
        <NavLink className={"navItem"} to="/pokemon/psyduck">
          psyduck
        </NavLink>
        <br />
        <NavLink className={"navItem"} to="/pokemon/pikachu">
          pikachu
        </NavLink>
        <br />
        <NavLink className={"navItem"} to="/pokemon/charizard">
          charizard
        </NavLink>
        <br />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pokemon/:name" element={<PokemonPage />} />
      </Routes>
    </div>
  );
}

export default App;
