import { addCow, addPig, reset, addAnimal } from "../store/text/slice";
import { useDispatch } from "react-redux";

const ButtonRow = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(addAnimal("🐖"))}>🐖</button>
      <button onClick={() => dispatch(addAnimal("🐄"))}>🐄</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default ButtonRow;
