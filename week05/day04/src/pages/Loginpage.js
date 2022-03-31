import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk, logout } from "../store/auth/actions";
import { meSelector } from "../store/auth/selectors";

const Loginpage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const me = useSelector(meSelector);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loginThunk(email, password));
  };
  return (
    <div>
      {!me ? (
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
      ) : (
        <div>
          <p>{`Hello ${me.name}`}</p>
          <button onClick={(e) => dispatch(logout())}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Loginpage;
