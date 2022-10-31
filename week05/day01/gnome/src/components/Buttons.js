import { useDispatch } from "react-redux";
import { decrease, increase, reset, set } from "../store/counter/slice";

const Buttons = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(increase())}>+</button>
      <button onClick={() => dispatch(decrease())}>-</button>
      <button onClick={() => dispatch(reset())}>reset</button>
      <button onClick={() => dispatch(set(42))}>set to 42</button>
    </div>
  );
};

export default Buttons;
