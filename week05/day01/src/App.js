import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease, reset } from "./store/counter/slice";
import { selectCurrentCount } from "./store/counter/selectors";
function App() {
  const dispatch = useDispatch();
  const currentCount = useSelector(selectCurrentCount);

  return (
    <div className="App">
      <p>{currentCount}</p>
      <button onClick={() => dispatch(increase())}>+</button>
      <button onClick={() => dispatch(decrease())}>-</button>
      <button onClick={() => dispatch(reset())}>reset</button>
    </div>
  );
}

export default App;
