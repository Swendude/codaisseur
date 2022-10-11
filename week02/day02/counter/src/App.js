import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  // Inlined below, not required anymore!
  // const increaseCount = () => {
  //   setCount(count + 1);
  // };

  const [favorite, setFavorite] = useState(true);

  const changeFavorite = () => {
    setFavorite(!favorite);
  };

  const handleFruitInputChange = (event) => {
    setFruitInput(event.target.value);
  };

  const add = () => {
    setFruits([...fruits, fruitInput]);
    setFruitInput("");
  };

  const [fruits, setFruits] = useState(["apple", "banana", "strawberry"]);

  const [fruitInput, setFruitInput] = useState("");

  return (
    <div className="App">
      <h1>Hello hooks!</h1>
      {fruits.map((fruit) => {
        return <h3>{fruit}</h3>;
      })}
      <input type="text" value={fruitInput} onChange={handleFruitInputChange} />
      <button onClick={add}>Add</button>
      <p>Count is: {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        increase
      </button>
      {favorite ? <p>Favorite</p> : <p>I hate it</p>}
      <input type="checkbox" checked={favorite} onChange={changeFavorite} />
    </div>
  );
}

export default App;
