import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactsPage from "./pages/ContactsPage";

function App() {
  return (
    <div className="App">
      <div className="nav">
        <Link to="/">home</Link>
        <Link to="/contacts">contacts</Link>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </div>
  );
}

export default App;
