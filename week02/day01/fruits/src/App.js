import "./App.css";
// import Greeting from "./components/Greeting";
// import { double, halve } from "./utils";
// import sheep from "./utils";
import FruitCard from "./components/FruitCard";
function App() {
  return (
    <div className="App">
      <h1>Buy delicious fruits!</h1>
      <FruitCard
        name="apple"
        img="https://pngimg.com/uploads/apple/apple_PNG12405.png"
      />
      <FruitCard
        name="banana"
        img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp5042624.png&f=1&nofb=1&ipt=ed8284c55ece0dfab2372f05f2a9aaa8e077e8983e4468e90eb0383dc492e935&ipo=images"
      />
      <FruitCard
        name="coconut"
        img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fatlantisjavasea.files.wordpress.com%2F2015%2F07%2Fcoconut.jpg%3Fw%3D1200&f=1&nofb=1&ipt=e9c8d41a76480f3e434173c49664edc69f3ef09c95f51c0781ac0bcfdd83d0f4&ipo=images"
      />
      {/* <div className="fruit-card">
        <h3>Apple</h3>
        <img
          className="fruit-img"
          alt="fruit"
          src="https://pngimg.com/uploads/apple/apple_PNG12405.png"
        />
      </div>
      <div className="fruit-card">
        <h3>Banana</h3>
        <img
          className="fruit-img"
          alt="fruit"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp5042624.png&f=1&nofb=1&ipt=ed8284c55ece0dfab2372f05f2a9aaa8e077e8983e4468e90eb0383dc492e935&ipo=images"
        />
      </div> */}
    </div>
  );
}

export default App;
