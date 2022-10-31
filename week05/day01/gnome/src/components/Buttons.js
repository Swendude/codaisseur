import { useState } from "react";
import { useDispatch } from "react-redux";
import { decrease, increase, reset, set } from "../store/counter/slice";

const Buttons = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(increase())}>+</button>
      <button onClick={() => dispatch(decrease())}>-</button>
      <button onClick={() => dispatch(reset())}>reset</button>
      <button onClick={() => dispatch(set(42))}>set to 42</button>
      <div>
        <input
          type="number"
          value={input}
          onChange={(e) => {
            const parsed = parseInt(e.target.value);
            if (isNaN(parsed)) {
              setInput("");
            } else {
              setInput(parsed);
            }
          }}
        />
        <button
          onClick={() => {
            if (input !== "") {
              dispatch(set(input));
              setInput("");
            } else {
              dispatch(set(0));
            }
          }}
        >
          set
        </button>
      </div>
    </div>
  );
};

export default Buttons;
