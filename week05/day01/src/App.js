import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCounter } from "./store/selectors";
import { decrement, increment } from "./store/counter/slice";
import Emotion from "./Emotion";
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
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
