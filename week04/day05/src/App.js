import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bootstrapLoginState, logout } from "./store/auth/actions";
import { selectMe } from "./store/auth/selector";

function App() {
  const dispatch = useDispatch();
  const me = useSelector(selectMe);
  useEffect(() => {
    console.log("refresh");
    dispatch(bootstrapLoginState);
  }, []);

  return (
    <div className="App">
      <div>
        <a href="/">Home</a>
        <br />
        <a href="/login">Login</a>
        <br />
        {me ? <button onClick={(e) => dispatch(logout)} >logout</button> : <div />}
      </div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </div>
  );
}

export default App;
