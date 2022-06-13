import { useSelector, useDispatch } from "react-redux";
import { selectCounter } from "./store/selectors";
import { decrement, increment } from "./store/counter/slice";
import Emotion from "./Emotion";
import Lamp from "./Lamp";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector(selectCounter);
  return (
    <div className="App">
      <div>
        <Emotion />
      </div>
      {counter}
      <button onClick={() => dispatch(increment(1))}>+</button>
      <button onClick={() => dispatch(decrement(1))}>-</button>
      <button onClick={() => dispatch(increment(5))}>+5</button>
      <button onClick={() => dispatch(decrement(9))}>-9</button>
      <div>
        <Lamp />
      </div>
    </div>
  );
}

export default App;
