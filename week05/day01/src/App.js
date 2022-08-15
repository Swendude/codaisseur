import "./App.css";
import { useState } from "react";
import { increase, decrease } from "./store/amazon/slice";
import { useDispatch, useSelector } from "react-redux";
import { selectCount } from "./store/selectors";

function App() {
  const dispatch = useDispatch();

  const count = useSelector(selectCount);

  return (
    <div className="App">
      <div>
        <p>Products: {count}</p>
      </div>
      <div>
        <button onClick={() => dispatch(increase())}>+</button>
        <button onClick={() => dispatch(decrease())}>-</button>
      </div>
    </div>
  );
}

export default App;
