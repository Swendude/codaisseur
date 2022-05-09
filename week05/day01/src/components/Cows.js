import { useSelector } from "react-redux";
import { selectCounterValue } from "../store/counter/selectors";

const Cows = () => {
  const counterVal = useSelector(selectCounterValue);
  return (
    <div>{counterVal >= 0 ? "🐄".repeat(counterVal) : "No negative cows!"}</div>
  );
};

export default Cows;
