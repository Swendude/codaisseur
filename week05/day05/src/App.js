import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Homepage from "./pages/Homepage";
// import Loginpage from "./pages/Loginpage";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);
  };
  return (
    <div className="App">
      <h1>Login</h1>
      {/* <form onSubmit={handleSubmit}>
        <p>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </p>
        <p>
          <label>Password:</label>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
        <p>
          <button type="submit">Login</button>
        </p>
      </form> */}
      <Routes>
        <Route path="/" element={<h1>Hello world</h1>} />
      </Routes>
    </div>
  );
}

export default App;