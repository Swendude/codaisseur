import { useSelector } from "react-redux";
import { countSelector } from "../store/counter/selectors";

const Counter = () => {
  const count = useSelector(countSelector);
  return <p>Count: {count}</p>;
};

export default Counter;
