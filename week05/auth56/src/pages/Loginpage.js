import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginThunk } from "../store/auth/actions";
const Loginpage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loginThunk(email, password));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
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
      </form>
    </div>
  );
};

export default Loginpage;
