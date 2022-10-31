import "./App.css";
import Buttons from "./components/Buttons";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, Redux!</h1>
        <Counter />
        <Buttons />
      </header>
    </div>
  );
}

export default App;
