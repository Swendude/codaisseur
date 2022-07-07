import "./App.css";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactsPage from "./pages/ContactsPage";
import UserPage from "./pages/UserPage";
import PokemonPage from "./pages/PokemonPage";

function App() {
  return (
    <div className="App">
      <div className="nav">
        <NavLink to="/">home</NavLink>
        <NavLink to="/contacts">contacts</NavLink>
        <NavLink to="/user">user</NavLink>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user/:name" element={<UserPage />} />
        <Route path="/user" element={<ContactsPage />} />
        <Route path="/pokemon" element={<PokemonPage />} />
      </Routes>
    </div>
  );
}

export default App;
