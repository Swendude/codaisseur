import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease, reset, change } from "./store/counter/slice";
import {
  selectCurrentCount,
  selectPositiveOrNegative
} from "./store/counter/selectors";
function App() {
  const dispatch = useDispatch();
  const currentCount = useSelector(selectCurrentCount);
  const posneg = useSelector(selectPositiveOrNegative);
  const changeOptions = [-10, -5, 5, 10, 20];

  return (
    <div className="App">
      <p>{currentCount}</p>
      <p>{posneg}</p>
      <button onClick={() => dispatch(increase())}>+</button>
      <button onClick={() => dispatch(decrease())}>-</button>
      {changeOptions.map((option) => {
        return (
          <button onClick={() => dispatch(change(option))}>{option}</button>
        );
      })}
      <button onClick={() => dispatch(reset())}>reset</button>
    </div>
  );
}

export default App;
