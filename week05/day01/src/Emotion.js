import { useSelector } from "react-redux";
import { selectCounter } from "./store/selectors";

const Emotion = () => {
  const counter = useSelector(selectCounter);
  return <p>{counter > 0 ? "😊" : "😥"}</p>;
};

export default Emotion;
