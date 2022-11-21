import { useSelector } from "react-redux";
import { selectTextValue } from "../store/text/selectors";

const TextView = () => {
  const textValue = useSelector(selectTextValue);
  return <p>Our text: {textValue}</p>;
};

export default TextView;
