import { Route, Switch } from "react-router";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Menu from "./components/Menu";
import "./App.css";

function App() {
  return (
    <div>
      <Menu />
      <Switch>
        <Route exact={true} path='/cow' component={ContactPage} />
        <Route exact={true} path='/about' component={AboutPage} />
        <Route exact={true} path='/' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
