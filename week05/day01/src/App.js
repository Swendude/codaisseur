import "./App.css";
import { increase, decrease, change } from "./store/amazon/slice";
import { useDispatch, useSelector } from "react-redux";
import { selectCount, selectCountReadable } from "./store/selectors";

function App() {
  const dispatch = useDispatch();

  const count = useSelector(selectCount);
  const readableCount = useSelector(selectCountReadable);
  const values = [-10, -5, -1, 1, 5, 10];
  return (
    <div className="App">
      <div>
        <p>Products: {count}</p>
        <p>{readableCount}</p>
      </div>
      <div>
        {values.map((value) => {
          return (
            <button onClick={() => dispatch(change(value))}>{value}</button>
          );
        })}

        {/* <button onClick={() => dispatch(change(-1))}>-</button>
        <button onClick={() => dispatch(change(-5))}>-5</button> */}
      </div>
    </div>
  );
}

export default App;
