import "./App.css";
import FruitCard from "./components/FruitCard";
import fruits from "./fruits.json";
function App() {
  // const fruits = [
  //   { name: "Banana", price: 1, sale: true },
  //   { name: "Banana", price: 1, sale: false },
  //   { name: "Pineapple", price: 2, sale: true },
  //   { name: "Coconut", price: 4, sale: true },
  //   { name: "Mango", price: 4, sale: true }
  // ];
  return (
    <div className="App">
      <h1 id="welcome">Hello 59, welcome to React</h1>
      {fruits
        .filter((fruit) => fruit.sale)
        .map((fruit, index) => {
          return (
            <FruitCard
              key={index}
              sale={fruit.sale}
              title={fruit.name}
              price={fruit.price}
            />
          );
        })}
    </div>
  );
}

export default App;
