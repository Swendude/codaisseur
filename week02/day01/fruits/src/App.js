import "./App.css";
import FruitCard from "./components/FruitCard";

function App() {
  return (
    <div className="App">
      <h1 id="welcome">Hello 59, welcome to React</h1>
      <FruitCard title="Banana" price="1" description="Yellow, long, sweet" />
      <FruitCard
        title="Pineapple"
        price="2"
        description="Orange, short, sour"
      ></FruitCard>
      <FruitCard title="Coconut" price="4" description="Brown, round, sweet" />
      <FruitCard title="Mango" price="4" description="Orange, short, sweet" />
      <FruitCard />
    </div>
  );
}

export default App;
