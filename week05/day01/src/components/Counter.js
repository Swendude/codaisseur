import { useDispatch, useSelector } from "react-redux";
import { change, setValue } from "../store/counter/slice";
import { selectCounterValue } from "../store/counter/selectors";
import { useState } from "react";

const Counter = () => {
  const [getInput, setInput] = useState("");
  const dispatch = useDispatch();
  const counterValue = useSelector(selectCounterValue);
  return (
    <div>
      <p>Counter: {counterValue}</p>
      <div>
        <button onClick={() => dispatch(change(1))}>+</button>
        <button onClick={() => dispatch(change(-1))}>-</button>
      </div>
      <input
        type="number"
        onChange={(event) => setInput(event.target.value)}
        value={getInput}
      ></input>
      <button onClick={() => dispatch(setValue(getInput))}>Set value</button>
    </div>
  );
};

export default Counter;
