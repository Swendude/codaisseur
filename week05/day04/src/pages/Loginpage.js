import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../store/auth/actions";
import { selectToken, selectMe } from "../store/auth/selectors";

const Loginpage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const me = useSelector(selectMe);
  const handleClick = () => {
    dispatch(loginThunk(email, password));
  };

  return (
    <div>
      <h1>Hello Login</h1>
      {me ? (
        <p>You are logged in! Welcome {me.name}</p>
      ) : (
        <div>
          <label>email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label>password</label>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button onClick={handleClick}>login!</button>
        </div>
      )}
    </div>
  );
};

export default Loginpage;
