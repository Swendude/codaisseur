import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../store/auth/actions";
import { selectToken, selectMe } from "../store/selectors";

const LoginPage = () => {
  const dispatch = useDispatch();
  const me = useSelector(selectMe);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loginThunk(email, password));
    setEmail("");
    setPassword("");
    // console.log(email, password);
  };
  return (
    <div>
      <h3>Login</h3>
      {!me ? (
        <div>
          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <label>Password</label>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button type="submit">Submit</button>
          </form>
        </div>
      ) : (
        <p>Already logged in, hello {me.name}</p>
      )}
    </div>
  );
};

export default LoginPage;
