import { useEffect } from "react";
import "./App.css";
import Buttons from "./components/Buttons";
import Counter from "./components/Counter";
import { useSelector, useDispatch } from "react-redux";
import { selectBikes } from "./store/bikes/selectors";
import { toggleFavorite, deleteBike } from "./store/bikes/slice";

function App() {
  const dispatch = useDispatch();
  const bikes = useSelector(selectBikes);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, Redux!</h1>
        <Counter />
        <Buttons />
        <h1>Hello, Bikes!</h1>
        {bikes.map((bike) => (
          <div style={{ border: "1px solid white" }}>
            <p>Material: {bike.material}</p>
            <p>Gears: {bike.gears}</p>
            <p>Omafiets: {bike.omaFiets ? "Yes" : "No"}</p>
            <div onClick={() => dispatch(toggleFavorite(bike.id))}>
              {bike.favorite ? <p>❤️</p> : <p>🖤</p>}
            </div>
            <button onClick={() => dispatch(deleteBike(bike.id))}>❌</button>
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
