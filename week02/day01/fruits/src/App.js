import "./App.css";
import NavigationBar from "./NavigationBar";
import FruitCard from "./FruitCard";
import fruitStock from "./fruitStock.json";
// function objectToCard (object) {

// } /// This is annoying

function App() {
  // const removeFruit = () => {
  //   fruitsStock.pop();
  //   console.log(fruitsStock);
  // };

  return (
    <div className="App">
      <NavigationBar />
      <p>Welcome to fruits.com</p>
      {/* <button onClick={() => removeFruit()}>Remove fruit</button> */}
      {fruitStock
        .filter((fruit) => !fruit.name.startsWith("A"))
        .map((fruit) => (
          <FruitCard
            name={fruit.name}
            imgSrc={fruit.image}
            description={fruit.description}
          /> // IF WE ARE INSIDE AN HTML (JSX) ELEMENT WE NEED TO USE BRACKETS AGAIN!!!
        ))}
    </div>
  );
}

export default App;
