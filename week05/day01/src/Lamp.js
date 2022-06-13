import { useSelector, useDispatch } from "react-redux";
import { selectLamp, selectAllLampsOff } from "./store/selectors";
import { toggle } from "./store/lamp/slice";

const Lamp = () => {
  const dispatch = useDispatch();
  const lamps = useSelector(selectLamp);
  const allLampsOff = useSelector(selectAllLampsOff);
  return (
    <div>
      {allLampsOff ? "ALL LAMPS ARE OFF" : "LAMP STILL ON"}
      {lamps.map((lamp, index) => {
        return (
          <div>
            <p>{lamp ? "ON" : "OFF"}</p>
            <button onClick={() => dispatch(toggle(index))}>toggle</button>
          </div>
        );
      })}
    </div>
  );
};

export default Lamp;
