import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "./store/counter/slice";
import { selectCounterValue } from "./store/counter/selectors";

function App() {
  const dispatch = useDispatch();
  const counterValue = useSelector(selectCounterValue);
  return (
    <div className="App">
      <p>Counter: {counterValue}</p>
      <button onClick={() => dispatch(increase())}>+</button>
      <button onClick={() => dispatch(decrease())}>-</button>
    </div>
  );
}

export default App;
