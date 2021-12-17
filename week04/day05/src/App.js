import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div className="App">
      <div>
        <a href="/">Home</a>
        <br/>
        <a href="/login">Login</a>
      </div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </div>
  );
}

export default App;
